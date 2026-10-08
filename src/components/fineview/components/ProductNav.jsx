"use client";

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

import styles from "../css/ProductNav.module.css";

gsap.registerPlugin(ScrollTrigger);

// Selector of the site header. The nav sits just below whatever part of it
// is currently visible (works for a header that hides/shows on scroll).
const HEADER_SELECTOR = "header";
// Gap (px) left between the pinned nav and a product when jumping to it.
const SCROLL_GAP = 24;
// The nav stops pinning when this row (0-based) reaches it. 3 = row 4.
const END_ROW_INDEX = 3;

/**
 * In-page links to each product; the one crossing the middle of the viewport
 * is marked current. `items`: `[{ id, label }]`, `id` being the section's.
 * The nav pins at the top of the viewport (below the header when it is
 * visible) and releases when the last row arrives.
 */
export default function ProductNav({ label, items }) {
  const [currentId, setCurrentId] = useState(items[0].id);
  const pinRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setCurrentId(visible.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    for (const { id } of items) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const pin = pinRef.current;
    const inner = innerRef.current;
    if (!pin || !inner) return;

    const endRow = document.getElementById(
      items[Math.min(END_ROW_INDEX, items.length - 1)].id,
    );
    if (!endRow) return;

    const trigger = ScrollTrigger.create({
      trigger: pin,
      start: "top top",
      endTrigger: endRow,
      end: () => `top top+=${pin.offsetHeight}`,
      pin: true,
      pinSpacing: false,
      invalidateOnRefresh: true,
    });

    // Slide the nav down by the visible height of the header, so it follows
    // the header when it is on view and goes back to top: 0 when it hides.
    // Only retweens on an actual change, so a touch drag on the horizontal
    // list below (e.g. scrolling between products on mobile) isn't fighting
    // a transform that's being rewritten on every single frame.
    const moveTo = gsap.quickTo(inner, "y", {
      duration: 0.25,
      ease: "power3.out",
    });
    let lastOffset = -1;
    const update = () => {
      let offset = lastOffset;
      if (trigger.isActive) {
        const header = document.querySelector(HEADER_SELECTOR);
        const bottom = header ? header.getBoundingClientRect().bottom : 0;
        offset = Math.max(0, Math.round(bottom));
      } else if (trigger.progress === 0) {
        offset = 0;
      }
      // progress === 1: keep the last offset so the release doesn't jump.
      if (offset !== lastOffset) {
        lastOffset = offset;
        moveTo(offset);
      }
    };
    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      gsap.set(inner, { clearProps: "transform" });
      trigger.kill();
    };
  }, [items]);

  function onClick(event, id) {
    const smoother = ScrollSmoother.get();
    const target = document.getElementById(id);
    if (!smoother || !target) return;
    // The smoothed content is transformed, so native anchor jumps land off.
    event.preventDefault();
    const offset = (pinRef.current?.offsetHeight ?? 0) + SCROLL_GAP;
    smoother.scrollTo(target, true, `top ${offset}px`);
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <div ref={pinRef} className={styles.pin}>
      <div ref={innerRef} className={styles.inner}>
        <nav aria-label={label} className="container">
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={item.id === currentId ? "location" : undefined}
                  onClick={(event) => onClick(event, item.id)}
                  className={`text-1 text-1-md text-trim-cap ${styles.link}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
