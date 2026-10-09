"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useMemo, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Words start in this grey and fill to each element's own colour.
const FROM_COLOR = "#acacac";

/**
 * Like `useWordReveal`, but for `count` elements in sequence: one continuous
 * scroll-scrub fills in the first element's words, then the second's only
 * once the first is fully filled in, and so on. Returns `count` refs, one
 * per element, in order.
 */
export function useWordRevealChain(count) {
  const elements = useRef([]);
  const refs = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => (el) => {
        elements.current[i] = el;
      }),
    [count],
  );

  useGSAP(() => {
    const els = elements.current.filter(Boolean);
    if (els.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const splits = els.map((el) => SplitText.create(el, { type: "words" }));
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: els[0],
        start: "top 85%",
        endTrigger: els[els.length - 1],
        end: "top 35%",
        scrub: true,
      },
    });
    for (const split of splits) {
      timeline.from(split.words, {
        color: FROM_COLOR,
        ease: "none",
        stagger: 0.1,
      });
    }

    return () => {
      for (const split of splits) split.revert();
    };
  }, [count]);

  return refs;
}
