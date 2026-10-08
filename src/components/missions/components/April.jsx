"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import Button from "@/components/ui/Button";

import styles from "../css/April.module.css";

const IMAGES = [
  {
    src: "/assets/missions/april-1.jpg",
    alt: "Satellite image of green, forested islands and a coastal town",
  },
  {
    src: "/assets/missions/april-2.jpg",
    alt: "Satellite image of a harbour on a curved bay beside dry hills",
  },
  {
    src: "/assets/missions/april-3.jpg",
    alt: "Satellite image of a port with long breakwaters in deep blue water",
  },
  {
    src: "/assets/missions/april-4.jpg",
    alt: "Satellite image of a forested coastline and a sediment-filled bay",
  },
];

const SPEED = 40; // px/s
const RESUME_DELAY = 1500; // ms of inactivity before autoplay resumes

// Keeps `strip`'s scroll position within one copy's width, wrapping in
// either direction so the duplicated list can loop seamlessly however far
// autoplay or a drag moves it.
function wrapScroll(strip, value) {
  const loopWidth = strip.scrollWidth / 2;
  if (!loopWidth) return;
  strip.scrollLeft = ((value % loopWidth) + loopWidth) % loopWidth;
}

/**
 * Figma: 5 (3002:1591). Auto-scrolls right-to-left through two copies of the
 * list (so it loops seamlessly) by driving `scrollLeft` directly, which
 * keeps it a real scroll container: it can also be dragged, swiped, or
 * scrolled manually. Autoplay pauses while the user interacts and resumes
 * shortly after, and is skipped for `prefers-reduced-motion`.
 */
export default function April() {
  const stripRef = useRef(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(null);
  const resumeTimer = useRef(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let raf;
    let last = performance.now();

    function tick(now) {
      const dt = now - last;
      last = now;
      if (!pausedRef.current) {
        wrapScroll(strip, strip.scrollLeft + (SPEED * dt) / 1000);
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  function pause() {
    pausedRef.current = true;
    clearTimeout(resumeTimer.current);
  }

  function scheduleResume() {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  }

  function onPointerDown(event) {
    pause();
    draggingRef.current = {
      x: event.clientX,
      scrollLeft: stripRef.current.scrollLeft,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event) {
    const drag = draggingRef.current;
    if (!drag) return;
    wrapScroll(stripRef.current, drag.scrollLeft - (event.clientX - drag.x));
  }

  function endDrag() {
    draggingRef.current = null;
    scheduleResume();
  }

  return (
    <section aria-labelledby="april-heading" className={styles.section}>
      <div className="container">
        <h2
          id="april-heading"
          className={`heading-2 heading-2-md text-trim-cap ${styles.heading}`}
        >
          Azista’s research and intelligence lab (APRIL)
        </h2>
      </div>
      {/* The list runs twice so it can loop seamlessly while auto-scrolling. */}
      <ul
        ref={stripRef}
        className={styles.strip}
        onPointerEnter={pause}
        onPointerLeave={() => {
          if (!draggingRef.current) scheduleResume();
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onFocus={pause}
        onBlur={scheduleResume}
      >
        {[0, 1].flatMap((copy) =>
          IMAGES.map((image) => (
            <li key={`${copy}-${image.src}`} className={styles.item}>
              <Image
                src={image.src}
                alt={copy === 0 ? image.alt : ""}
                aria-hidden={copy === 1 || undefined}
                fill
                sizes="(min-width: 1280px) 735px, 80vw"
                className={styles.image}
                draggable={false}
              />
            </li>
          )),
        )}
      </ul>
      <div className={`container ${styles.footer}`}>
        <p className={`text-2 text-1-md text-trim-cap ${styles.intro}`}>
          A research and intelligence lab focused on advancing Earth observation
          through advanced image processing, analytics, and data-driven
          intelligence.
        </p>
        <Button
          variant="framed"
          href="https://www.april.azista.space/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore April
        </Button>
      </div>
    </section>
  );
}
