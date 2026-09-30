"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-scrubbed "open up" entrance (after icomat.co.uk's carousel): while
 * the element's top travels from the bottom of the viewport to the top, it
 * grows from 80% to full size, fades in, and its 20% clip-path inset opens
 * to the edges. Server-rendered state is the final one, so it reads fine
 * without JS or with reduced motion. Returns a ref for the element.
 */
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
