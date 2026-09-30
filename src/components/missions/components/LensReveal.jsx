"use client";

import { useEffect, useRef } from "react";

import CornerFrame from "@/components/shared/components/CornerFrame";

import styles from "../css/LensReveal.module.css";

// Resting spot as a fraction of the area; keep in sync with `--lens-left` /
// `--lens-top` in LensReveal.module.css.
const REST = { x: 0.431, y: 0.5425 };
// Share of the remaining distance covered each frame (1 = no easing).
const EASE = 0.18;

const clamp = (value, max) => Math.min(Math.max(value, 0), max);

/**
 * Shows `lens` (a sharp copy of `children`) through a square that eases after
 * the mouse; it rests at its default spot otherwise, and on touch. Fills its
 * positioned parent.
 */
export default function LensReveal({ lens, className = "", children }) {
  const rootRef = useRef(null);
  const lensRef = useRef(null);
  const current = useRef(null);
  const target = useRef(null);
  const frame = useRef(0);
  const resting = useRef(true);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  // The frame and the sharp copy both read these, so they always move together.
  const apply = ({ x, y }) => {
    rootRef.current.style.setProperty("--lens-x", `${x}px`);
    rootRef.current.style.setProperty("--lens-y", `${y}px`);
  };

  const tick = () => {
    const from = current.current;
    const to = target.current;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const step = reduced ? 1 : EASE;
    const next = {
      x: from.x + (to.x - from.x) * step,
      y: from.y + (to.y - from.y) * step,
    };

    if (Math.abs(to.x - next.x) < 0.1 && Math.abs(to.y - next.y) < 0.1) {
      current.current = to;
      frame.current = 0;
      // Back home: hand the position back to CSS so it follows resizes.
      if (resting.current) {
        rootRef.current.style.removeProperty("--lens-x");
        rootRef.current.style.removeProperty("--lens-y");
      } else {
        apply(to);
      }
      return;
    }

    current.current = next;
    apply(next);
    frame.current = requestAnimationFrame(tick);
  };

  const animateTo = (point) => {
    target.current = point;
    if (!frame.current) frame.current = requestAnimationFrame(tick);
  };

  const bounds = () => {
    const box = rootRef.current.getBoundingClientRect();
    const { offsetWidth: w, offsetHeight: h } = lensRef.current;
    return { box, w, h };
  };

  const restPoint = ({ box }) => ({
    x: box.width * REST.x,
    y: box.height * REST.y,
  });

  const move = (event) => {
    if (event.pointerType !== "mouse") return;
    const size = bounds();
    const { box, w, h } = size;
    if (!current.current || (resting.current && !frame.current)) {
      current.current = restPoint(size);
    }
    resting.current = false;
    animateTo({
      x: clamp(event.clientX - box.left - w / 2, box.width - w),
      y: clamp(event.clientY - box.top - h / 2, box.height - h),
    });
  };

  const leave = () => {
    if (resting.current) return;
    resting.current = true;
    animateTo(restPoint(bounds()));
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={move}
      onPointerLeave={leave}
      className={`${styles.root} ${className}`}
    >
      {children}
      <div aria-hidden="true" className={styles.sharp}>
        {lens}
      </div>
      <div ref={lensRef} aria-hidden="true" className={styles.lens}>
        <CornerFrame tone="fineLight" className={styles.frame} />
      </div>
    </div>
  );
}
