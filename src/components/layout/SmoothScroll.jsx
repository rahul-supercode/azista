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
 * Site-wide GSAP ScrollSmoother. Fixed elements such as the header must
 * render outside it.
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

  // New page content: snap back to the top instantly (a route change resets
  // native scroll, but not the smoother's own eased offset, which would
  // otherwise glide up from wherever the previous page was scrolled to) and
  // recalculate every trigger and the scroll height.
  useEffect(() => {
    ScrollSmoother.get()?.scrollTo(0, false);
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
