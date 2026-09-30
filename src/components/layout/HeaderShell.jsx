"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import styles from "./css/Header.module.css";

/** Mark any section with a dark background with `data-bg="dark"`. */
const DARK_SURFACE = '[data-bg="dark"]';
// Always shown within this distance of the top of the page (px).
const SHOW_NEAR_TOP = 120;
// Scroll travel (px) in one direction before the header reacts.
const SCROLL_SLOP = 8;

/**
 * Fixed header frame that adapts to what's behind it: transparent over dark
 * sections (Figma: 2910:1920), dark translucent fill everywhere else
 * (Figma: 2910:1636). The mobile menu always gets the dark fill.
 * Slides away on scroll down and back on scroll up; stays put near the top
 * and while a menu is open.
 */
export default function HeaderShell({ children }) {
  const headerRef = useRef(null);
  const pathname = usePathname();
  // The route on which a dark section is behind the header, so a result from
  // the previous page never leaks into the next one.
  const [darkOn, setDarkOn] = useState(null);
  const overDark = darkOn === pathname;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let lastY = window.scrollY;
    let frame;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) < SCROLL_SLOP) return;
      lastY = y;
      const menuOpen = header.querySelector('[aria-expanded="true"]');
      setHidden(delta > 0 && y > SHOW_NEAR_TOP && !menuOpen);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const behind = new Set();
    let observer;

    const observe = () => {
      observer?.disconnect();
      behind.clear();

      // Shrink the viewport to the horizontal strip the header covers. Layout
      // offsets ignore the hide-on-scroll translation.
      const top = header.offsetTop;
      const bottom = top + header.offsetHeight;
      const next = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) behind.add(entry.target);
            else behind.delete(entry.target);
          }
          setDarkOn(behind.size > 0 ? pathname : null);
        },
        { rootMargin: `${-top}px 0px ${bottom - window.innerHeight}px 0px` },
      );
      document.querySelectorAll(DARK_SURFACE).forEach((el) => next.observe(el));
      observer = next;
    };

    observe();
    window.addEventListener("resize", observe);
    return () => {
      window.removeEventListener("resize", observe);
      observer?.disconnect();
    };
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      data-over-dark={overDark || undefined}
      data-hidden={hidden || undefined}
      className={styles.header}
    >
      <div className="container">
        <div className={styles.bar}>
          {/* Background layer, kept separate so it can fade without affecting the content. */}
          <div aria-hidden="true" className={styles.barFill} />
          {children}
        </div>
      </div>
    </header>
  );
}
