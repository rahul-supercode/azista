"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

import Button from "@/components/ui/Button";
import { useScrollExpand } from "@/hooks/useScrollExpand";

import styles from "../css/ShowcaseCarousel.module.css";

/**
 * Full-bleed image carousel (after icomat.co.uk's): opens up as it scrolls
 * into view, then auto-advances — the active tab's underline fills as a
 * timer and the next slide wipes down over the current one while its image
 * settles. Autoplay pauses while the carousel is off screen, hovered or
 * focused, and stops for good once a tab is chosen.
 *
 * slides: [{ label, title, href, image, imageAlt, dark? }] — `dark` switches
 * the text and tabs to white for a dark image.
 */
export default function ShowcaseCarousel({ label, slides }) {
  const id = useId();
  const frameRef = useScrollExpand();
  const slideRefs = useRef([]);
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [inView, setInView] = useState(false);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 },
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, [frameRef]);

  // Raise the newly active image above the rest and wipe it down over the
  // previous one while it settles into place. `shownRef` is the slide on
  // screen: the wipe only runs when it changes, so effect re-runs (e.g.
  // React's dev double-invoke) don't replay it.
  const shownRef = useRef(0);
  const zRef = useRef(1);
  useGSAP(
    () => {
      if (index === shownRef.current) return;
      shownRef.current = index;
      const slide = slideRefs.current[index];
      if (!slide) return;
      // Finish any interrupted wipe underneath so no slide stays half-clipped.
      for (const other of slideRefs.current) {
        // Only slides already shown (they carry a z-index) sit underneath.
        if (!other || other === slide || !other.style.zIndex) continue;
        gsap.killTweensOf([other, other.querySelector("img")]);
        gsap.set(other, { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(other.querySelector("img"), { yPercent: 0 });
      }
      gsap.killTweensOf([slide, slide.querySelector("img")]);
      zRef.current += 1;
      slide.style.zIndex = String(zRef.current);
      gsap.fromTo(
        slide,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power3.inOut" },
      );
      gsap.fromTo(
        slide.querySelector("img"),
        { yPercent: -5 },
        { yPercent: 0, duration: 1.6, ease: "power2.out" },
      );
    },
    { dependencies: [index] },
  );

  function show(next) {
    setIndex(next);
    setCycle((c) => c + 1);
  }

  function choose(next) {
    setAutoplay(false);
    if (next !== index) show(next);
  }

  const playing = autoplay && inView && !held;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={styles.carousel}
      onPointerEnter={() => setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHeld(false);
      }}
    >
      <div
        ref={frameRef}
        data-dark={slides[index].dark || undefined}
        className={styles.frame}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.label}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            aria-hidden={i !== index}
            className={styles.slide}
            // The first slide starts on top; later ones are raised as they're shown.
            style={i === 0 ? { zIndex: 1 } : undefined}
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              sizes="100vw"
              className={styles.image}
            />
          </div>
        ))}

        {/* Text sits above the wiping images and cross-fades on its own. */}
        <div className={`container ${styles.panels}`}>
          {slides.map((slide, i) => (
            <div
              key={slide.label}
              id={`${id}-panel-${i}`}
              role="tabpanel"
              aria-label={slide.label}
              inert={i !== index}
              className={`${styles.panel} ${i === index ? styles.panelActive : ""}`}
            >
              <h3 className={`text-3 text-trim-cap ${styles.title}`}>
                {slide.title}
              </h3>
              <Button variant="link" href={slide.href}>
                Learn more
              </Button>
            </div>
          ))}
        </div>

        <div className={`container ${styles.tabsBar}`}>
          <div role="tablist" aria-label={label} className={styles.tabs}>
            {slides.map((slide, i) => (
              <button
                key={slide.label}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-controls={`${id}-panel-${i}`}
                onClick={() => choose(i)}
                className={`text-1 ${styles.tab}`}
              >
                <span className="text-trim-cap">{slide.label}</span>
                <span aria-hidden="true" className={styles.track}>
                  {i === index ? (
                    <span
                      key={cycle}
                      className={`${styles.fill} ${autoplay ? "" : styles.fillDone}`}
                      style={{
                        animationPlayState: playing ? "running" : "paused",
                      }}
                      onAnimationEnd={() => show((index + 1) % slides.length)}
                    />
                  ) : null}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
