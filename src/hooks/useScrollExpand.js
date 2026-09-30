"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/** Scroll-scrubbed grow-in entrance. Returns a ref for the element. */
export function useScrollExpand() {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scrollTrigger = {
      trigger: el,
      start: "top bottom",
      end: "top top",
      scrub: true,
    };
    gsap.from(el, {
      clipPath: "inset(20%)",
      ease: "power1.out",
      scrollTrigger,
    });
    gsap.from(el, {
      scale: 0.8,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger,
    });
  });

  return ref;
}
