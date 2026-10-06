"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

import orbitLines from "@/assets/icons/orbit-lines.svg";

import styles from "../css/ExperienceOrbits.module.css";

gsap.registerPlugin(ScrollTrigger);

// Angle the orbits start drawing from (fully hidden) and draw to (fully
// shown), clockwise from straight up around the top-right corner where the
// lines meet; see `--orbit-draw` in the CSS.
const DRAW_FROM = 270;
const DRAW_TO = 180;

/**
 * Decorative orbit lines that sweep in from the top-right corner as the
 * section scrolls in.
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
          start: "top 70%",
          end: "center 40%",
          scrub: true,
        },
      },
    );
  });

  return (
    <div ref={ref} aria-hidden="true" className={styles.orbits}>
      <Image src={orbitLines} alt="" className={styles.lines} />
    </div>
  );
}
