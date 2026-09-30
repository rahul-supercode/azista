"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Seconds the content takes to catch up with the native scroll position.
const SMOOTHNESS = 1.2;

/**
 * Site-wide GSAP ScrollSmoother. Page scroll stays native (window.scrollY,
 * anchors and ScrollTriggers keep working); the content just eases after it.
 * Fixed elements such as the header must render outside this wrapper. Off
 * for reduced motion; touch devices keep their native scrolling.
 */
export default function SmoothScroll({ children }) {
  const pathname = usePathname();

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: SMOOTHNESS,
      effects: true,
    });
    // Triggers created by child components before the smoother existed.
    ScrollTrigger.refresh();
    return () => smoother.kill();
  });

  // New page content: recalculate every trigger and the scroll height.
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
