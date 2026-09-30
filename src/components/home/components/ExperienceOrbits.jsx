"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

import orbitDashed from "@/assets/icons/orbit-dashed.png";
import orbitDot from "@/assets/icons/orbit-dot.svg";
import orbitInner from "@/assets/icons/orbit-inner.svg";
import orbitOuter from "@/assets/icons/orbit-outer.svg";

import styles from "../css/ExperienceOrbits.module.css";

gsap.registerPlugin(ScrollTrigger);

const DOTS = [
  { left: 213, top: 367 },
  { left: 379, top: 543 },
  { left: 280, top: 250 },
  { left: 123, top: 98 },
];

// Angle the orbits start drawing from (fully hidden) and draw to (fully
// shown), clockwise from the top of the rings; see `--orbit-draw` in the CSS.
const DRAW_FROM = 272;
const DRAW_TO = 170;

/**
 * Decorative orbits that draw in from right to left as the section scrolls
 * in, like the First Runner rings on the Missions page.
 */
export default function ExperienceOrbits() {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      el,
      { "--orbit-draw": `${DRAW_FROM}deg` },
      {
        "--orbit-draw": `${DRAW_TO}deg`,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: el.closest("section"),
          start: "top 60%",
          end: "center 35%",
          scrub: true,
        },
      },
    );
  });

  return (
    <div aria-hidden="true" className={styles.slot}>
      <div ref={ref} className={styles.orbits}>
        <Image
          src={orbitInner}
          alt=""
          className={`${styles.orbit} ${styles.inner}`}
        />
        <Image
          src={orbitOuter}
          alt=""
          className={`${styles.orbit} ${styles.outer}`}
        />
        {DOTS.map((dot) => (
          <Image
            key={`${dot.left}-${dot.top}`}
            src={orbitDot}
            alt=""
            className={styles.dot}
            style={{ left: dot.left, top: dot.top }}
          />
        ))}
        <Image
          src={orbitDashed}
          alt=""
          width={1409.599}
          height={1409.599}
          className={`${styles.orbit} ${styles.dashed}`}
        />
      </div>
    </div>
  );
}
