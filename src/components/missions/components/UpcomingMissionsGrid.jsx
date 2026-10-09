"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

import gridLines from "@/assets/icons/grid-lines-upcoming.svg";

import styles from "../css/UpcomingMissions.module.css";

gsap.registerPlugin(ScrollTrigger);

// Fades and settles in from this far above as the section scrolls into view.
const FROM_Y = -40;

/** The background grid fades and slides into place as the section scrolls in. */
export default function UpcomingMissionsGrid() {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: FROM_Y },
      {
        opacity: 1,
        y: 0,
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
    <Image ref={ref} src={gridLines} alt="" fill className={styles.lines} />
  );
}
