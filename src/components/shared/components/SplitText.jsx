"use client";

import { useEffect, useRef, useState } from "react";

import { CHAR_DURATION_MS, CHAR_STAGGER_MS } from "./splitTextDuration";
import styles from "../css/SplitText.module.css";

/**
 * Splits `children` (plain text) into per-letter spans that reveal in
 * sequence, left to right, once this element scrolls into view — the same
 * letter-by-letter animation as the header nav, but triggered by scroll
 * instead of hover. Fires once per mount. `delay` (ms) pushes the whole
 * sequence back, e.g. to let a preceding dt's reveal finish before a dd's
 * starts (pair with `splitTextDuration`, in ./splitTextDuration — a plain
 * module, not "use client", so server components can call it directly).
 * Screen readers get the full word via the sr-only span; the letters
 * themselves are aria-hidden.
 */
export default function SplitText({ children, className = "", delay = 0 }) {
  const text = String(children);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      data-visible={visible || undefined}
      style={{
        "--stagger": `${CHAR_STAGGER_MS}ms`,
        "--duration": `${CHAR_DURATION_MS}ms`,
        "--start": `${delay}ms`,
      }}
      className={`${styles.root} ${className}`}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={styles.split}>
        {Array.from(text).map((char, index) => (
          <span key={index} className={styles.char} style={{ "--c": index }}>
            {char === " " ? " " : char}
          </span>
        ))}
      </span>
    </span>
  );
}
