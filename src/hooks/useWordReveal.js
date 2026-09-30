"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Words start in this grey and fill to the element's own colour.
const FROM_COLOR = "#acacac";

/**
 * Scroll-scrubbed word-by-word colour fill: the element's text is split into
 * words, which darken one after another as it scrolls up the viewport — from
 * its top entering the bottom 15% of the screen until it reaches 35% from the
 * top. Server-rendered text keeps its final colour, so it reads fine
 * without JS or with reduced motion. Returns a ref to attach to the element.
 */
export function useWordReveal() {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const split = SplitText.create(el, { type: "words" });
    gsap.from(split.words, {
      color: FROM_COLOR,
      ease: "none",
      stagger: 0.1,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "top 35%",
        scrub: true,
      },
    });

    return () => split.revert();
  });

  return ref;
}
