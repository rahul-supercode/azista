"use client";

import { useEffect, useRef } from "react";

import CornerFrame from "@/components/shared/components/CornerFrame";

import styles from "../css/LensReveal.module.css";

// Resting spot as a fraction of the area; keep in sync with `--lens-left` /
// `--lens-top` in LensReveal.module.css.
const REST = { x: 0.431, y: 0.5425 };
// Share of the remaining distance covered each frame (1 = no easing).
const EASE = 0.18;
// Max px the background shifts toward the cursor at the area's edges.
const PARALLAX = 20;

const clamp = (value, max) => Math.min(Math.max(value, 0), max);

/**
 * Shows `lens` (a sharp copy of `children`) through a square that eases after
 * the mouse; hidden otherwise (including on touch, which never shows it).
 * `children` also drifts a little toward the cursor (a parallax effect),
 * re-centring when it leaves. Fills its positioned parent.
 */
export default function LensReveal({ lens, className = "", children }) {
  const rootRef = useRef(null);
  const lensRef = useRef(null);
  const current = useRef(null);
  const target = useRef(null);
  const frame = useRef(0);
  const resting = useRef(true);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  // The frame and the sharp copy read --lens-*, set on our own root. The
  // parallax drift is set one level up, on the parent, so a sibling (the
  // grid lines, in Banner) can pick it up too via plain CSS inheritance.
  const apply = ({ x, y, px, py }) => {
    const root = rootRef.current;
    root.style.setProperty("--lens-x", `${x}px`);
    root.style.setProperty("--lens-y", `${y}px`);
    root.parentElement.style.setProperty("--parallax-x", `${px}px`);
    root.parentElement.style.setProperty("--parallax-y", `${py}px`);
  };

  const tick = () => {
    const from = current.current;
    const to = target.current;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const step = reduced ? 1 : EASE;
    const next = {
      x: from.x + (to.x - from.x) * step,
      y: from.y + (to.y - from.y) * step,
      px: from.px + (to.px - from.px) * step,
      py: from.py + (to.py - from.py) * step,
    };

    const settled =
      Math.abs(to.x - next.x) < 0.1 &&
      Math.abs(to.y - next.y) < 0.1 &&
      Math.abs(to.px - next.px) < 0.1 &&
      Math.abs(to.py - next.py) < 0.1;

    if (settled) {
      current.current = to;
      frame.current = 0;
      // Back home: hand the position back to CSS so it follows resizes.
      if (resting.current) {
        const root = rootRef.current;
        root.style.removeProperty("--lens-x");
        root.style.removeProperty("--lens-y");
        root.parentElement.style.removeProperty("--parallax-x");
        root.parentElement.style.removeProperty("--parallax-y");
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
    px: 0,
    py: 0,
  });

  const move = (event) => {
    if (event.pointerType !== "mouse") return;
    const size = bounds();
    const { box, w, h } = size;
    const point = {
      x: clamp(event.clientX - box.left - w / 2, box.width - w),
      y: clamp(event.clientY - box.top - h / 2, box.height - h),
      px: ((event.clientX - box.left) / box.width - 0.5) * 2 * PARALLAX,
      py: ((event.clientY - box.top) / box.height - 0.5) * 2 * PARALLAX,
    };
    // Coming back from hidden/resting (even mid-flight, still easing toward
    // the resting spot after a quick leave-and-reenter): start exactly under
    // the cursor instead, so the lens appears wherever the pointer actually
    // entered rather than sliding over from that spot.
    if (!current.current || resting.current) {
      current.current = point;
    }
    resting.current = false;
    rootRef.current.setAttribute("data-active", "");
    animateTo(point);
  };

  const leave = () => {
    rootRef.current.removeAttribute("data-active");
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
      <div className={styles.parallax}>{children}</div>
      <div aria-hidden="true" className={styles.sharp}>
        {lens}
      </div>
      <div ref={lensRef} aria-hidden="true" className={styles.lens}>
        <CornerFrame tone="fineLight" className={styles.frame} />
      </div>
    </div>
  );
}
