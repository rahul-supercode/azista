"use client";

import { useWordReveal } from "@/hooks/useWordReveal";

/** A paragraph whose words darken one by one as it scrolls into view. */
export default function ScrollRevealText({ className = "", children }) {
  const ref = useWordReveal();

  return (
    <p ref={ref} className={className}>
      {children}
    </p>
  );
}
