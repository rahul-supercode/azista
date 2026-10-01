"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useSyncExternalStore } from "react";

import styles from "../css/MissionClock.module.css";

gsap.registerPlugin(ScrollTrigger);

const MINUTE = 60_000;
// Minutes count down from here to the real value when the clock appears.
const COUNT_FROM = 59;
const UNITS = ["years", "months", "days", "hours", "minutes"];

// Re-render once a minute, on the minute.
function subscribe(onChange) {
  let timer;
  const schedule = () => {
    timer = setTimeout(
      () => {
        onChange();
        schedule();
      },
      MINUTE - (Date.now() % MINUTE),
    );
  };
  schedule();
  return () => clearTimeout(timer);
}

const currentMinute = () => Math.floor(Date.now() / MINUTE) * MINUTE;

/** Calendar difference between two dates, in UNITS. */
function elapsed(from, to) {
  const start = new Date(from);
  const end = new Date(to);
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth();
  let anchor = new Date(start);
  anchor.setMonth(start.getMonth() + months);
  if (anchor > end) {
    months -= 1;
    // Recompute from a fresh copy of `start` — `anchor` was already
    // shifted above, so calling setMonth on it again would compound
    // the offset onto the wrong base year.
    anchor = new Date(start);
    anchor.setMonth(start.getMonth() + months);
  }
  let rest = Math.floor((end - anchor) / MINUTE);
  const minutes = rest % 60;
  rest = Math.floor(rest / 60);
  const hours = rest % 24;
  const days = Math.floor(rest / 24);
  return {
    years: Math.floor(months / 12),
    months: months % 12,
    days,
    hours,
    minutes,
  };
}

const pad = (n) => String(n).padStart(2, "0");

/**
 * Time in orbit since `since`, ticking each minute. Hydrates with the
 * server's `renderedAt`, then switches to the current time. The first time
 * it scrolls into view, the minutes count down to the real value.
 */
export default function MissionClock({ since, renderedAt, className = "" }) {
  const ref = useRef(null);
  const now = useSyncExternalStore(subscribe, currentMinute, () => renderedAt);
  const time = elapsed(since, now);
  const summary = UNITS.map((unit) => `${time[unit]} ${unit}`).join(", ");
  // Minutes shown while counting down; null shows the real value.
  const [countdown, setCountdown] = useState(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const counter = { value: COUNT_FROM };
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        setCountdown(COUNT_FROM);
        gsap.to(counter, {
          value: elapsed(since, Date.now()).minutes,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => setCountdown(Math.round(counter.value)),
          onComplete: () => setCountdown(null),
        });
      },
    });
  });

  const shown = { ...time, minutes: countdown ?? time.minutes };

  return (
    <div ref={ref} className={`container ${className}`}>
      <p className="sr-only">In orbit for {summary}.</p>
      <ol aria-hidden="true" className={styles.units}>
        {UNITS.map((unit) => (
          <li key={unit} className={styles.unit}>
            <span className={`text-trim-cap ${styles.value}`}>
              {pad(shown[unit])}
            </span>
            <span className={`text-5 text-4-md  text-trim-cap ${styles.label}`}>
              {unit}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
