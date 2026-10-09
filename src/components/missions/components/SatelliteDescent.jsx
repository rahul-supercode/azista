"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import styles from "../css/SatelliteDescent.module.css";

gsap.registerPlugin(ScrollTrigger);

// Degrees of tilt while it swings to the centre.
const BANK = -8;
// Undrawn angle either side of the bottom of the orbit before it draws in.
const ORBIT_GAP = 90;

// Layout box (ignores transforms), so it can be re-measured mid-scroll.
function boxWithin(el, ancestor) {
  let x = 0;
  let y = 0;
  for (let node = el; node && node !== ancestor; node = node.offsetParent) {
    x += node.offsetLeft;
    y += node.offsetTop;
  }
  const width = el.offsetWidth;
  const height = el.offsetHeight;
  return { cx: x + width / 2, cy: y + height / 2, width };
}

/**
 * Flies its children into the `dock` element (a selector within the same
 * section). The scroll range runs from the satellite's centre to the dock's
 * centre crossing the middle of the viewport, and it descends 1:1 with the
 * scroll, so it holds the screen centre while it swings over and settles.
 * The children drift gently in place throughout. `orbit` (optional
 * selector) is drawn in from both sides as the satellite arrives; it reads
 * the `--orbit-gap` angle (see FirstRunner.module.css).
 */
export default function SatelliteDescent({
  dock,
  orbit,
  className = "",
  children,
}) {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    const section = el?.closest("section");
    const target = section?.querySelector(dock);
    const rings = orbit && section?.querySelector(orbit);
    if (!target) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const from = () => boxWithin(el, section);
    const to = () => boxWithin(target, section);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: () => `top+=${from().cy} center`,
        end: () => `top+=${to().cy} center`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    timeline
      // Linear, so the descent exactly cancels the scroll.
      .to(el, { y: () => to().cy - from().cy, ease: "none", duration: 1 }, 0)
      .to(
        el,
        { scale: () => to().width / from().width, ease: "none", duration: 1 },
        0,
      )
      // Swings over to the centre, fastest early on but still easing in
      // across the full duration (matching y's), so there's always some
      // horizontal motion blended with the descent — one continuous curve
      // rather than a diagonal leg that stops dead partway down.
      .to(
        el,
        { x: () => to().cx - from().cx, ease: "power2.out", duration: 1 },
        0,
      )
      .to(el, { rotation: BANK, ease: "sine.out", duration: 0.3 }, 0)
      .to(el, { rotation: 0, ease: "sine.inOut", duration: 0.4 }, 0.3);

    // Rings draw from their sides and join underneath as it settles in.
    if (rings) {
      timeline.fromTo(
        rings,
        { "--orbit-gap": `${ORBIT_GAP}deg` },
        { "--orbit-gap": "0deg", ease: "power1.inOut", duration: 0.35 },
        0.65,
      );
    }
  });

  return (
    <div ref={ref} className={`${styles.craft} ${className}`}>
      <div className={styles.drift}>{children}</div>
    </div>
  );
}
