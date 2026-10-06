"use client";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect, useState } from "react";

import styles from "../css/ProductNav.module.css";

// Clearance (px) left above a product when jumping to it, for the header.
const SCROLL_OFFSET = 120;

/**
 * In-page links to each product; the one crossing the middle of the viewport
 * is marked current. `items`: `[{ id, label }]`, `id` being the section's.
 */
export default function ProductNav({ label, items }) {
  const [currentId, setCurrentId] = useState(items[0].id);

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

  function onClick(event, id) {
    const smoother = ScrollSmoother.get();
    const target = document.getElementById(id);
    if (!smoother || !target) return;
    // The smoothed content is transformed, so native anchor jumps land off.
    event.preventDefault();
    smoother.scrollTo(target, true, `top ${SCROLL_OFFSET}px`);
    history.replaceState(null, "", `#${id}`);
  }

  return (
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
  );
}
