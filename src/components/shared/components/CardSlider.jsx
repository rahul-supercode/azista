"use client";

import Splide from "@splidejs/splide";
import { Children, useEffect, useRef } from "react";

import styles from "../css/CardSlider.module.css";

// Quiet time (ms) that ends a trackpad / wheel gesture.
const WHEEL_QUIET_MS = 120;
// Once a swipe has reached SWIPE_PEAK px per event, dropping below
// MOMENTUM_TAIL means only momentum is left, so it snaps without waiting.
const SWIPE_PEAK = 8;
const MOMENTUM_TAIL = 2;
// A swipe past this share of a slide's width moves to the neighbour.
const SWIPE_THRESHOLD = 0.1;
// Travel (px) before a gesture is locked to horizontal or vertical.
const AXIS_LOCK = 10;

/**
 * Splide carousel with the active card centred and the ends aligned to the
 * page container. `slideLabels` names each child for screen readers;
 * `cursorLabel` is an optional hint that follows the mouse over the cards.
 */
export default function CardSlider({
  label,
  slideLabels,
  cursorLabel,
  children,
}) {
  const slides = Children.toArray(children);
  const count = slides.length;

  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const cursorRef = useRef(null);
  const slideAriaRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    // `destroy()` strips these, so restore them before a remount (e.g. the
    // development double effect run). Splide keeps existing slide labels.
    const items = [...track.querySelectorAll(".splide__slide")];
    slideAriaRef.current ??= items.map((li) => li.getAttribute("aria-label"));
    root.tabIndex = 0;
    items.forEach((li, i) =>
      li.setAttribute("aria-label", slideAriaRef.current[i]),
    );

    const splide = new Splide(root, {
      type: "slide",
      autoWidth: true,
      focus: "center",
      trimSpace: true,
      gap: "10px",
      // Defined in CSS so the ends line up with the page container.
      padding: { left: "var(--edge)", right: "var(--edge)" },
      speed: 800,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      // Stronger than the default (600) so a short, moderate swipe advances.
      flickPower: 1000,
      flickMaxPages: 1,
      waitForTransition: false,
      updateOnMove: true,
      arrows: false,
      pagination: false,
      keyboard: "focused",
      slideFocus: false,
      label,
    });
    splide.on("click", (slide) => splide.go(slide.index));
    splide.mount();

    // Horizontal trackpad / Shift+wheel swipes (Splide's own wheel option
    // only reads vertical deltas): the track follows the fingers, then snaps
    // to a slide. Each gesture is locked to one axis once it gets going, so
    // vertical scrolling is left to the page.
    const { Controller, Move, Slides } = splide.Components;
    let gesture = null;
    let quiet;

    function snap() {
      const { start, from } = gesture;
      const moved = from - Move.getPosition();
      let dest = Controller.toDest(Move.getPosition());
      const width = Slides.getAt(start).slide.offsetWidth;
      if (dest === start && Math.abs(moved) > width * SWIPE_THRESHOLD) {
        dest = Math.min(
          Controller.getEnd(),
          Math.max(0, start + Math.sign(moved)),
        );
      }
      Controller.go(dest, true);
      gesture.done = true;
    }

    function onWheel(event) {
      const scale = event.deltaMode === 1 ? 16 : 1; // lines → px
      const dx = event.deltaX * scale;
      const size = Math.abs(dx);

      clearTimeout(quiet);
      quiet = setTimeout(() => {
        if (gesture?.axis === "x" && !gesture.done) snap();
        gesture = null;
      }, WHEEL_QUIET_MS);

      // Momentum only ever shrinks, so growing deltas mean a new swipe.
      const newSwipe = gesture?.done && size > gesture.last * 1.5 + 2;
      if (!gesture || newSwipe) {
        gesture = { axis: null, sx: 0, sy: 0, peak: 0, last: 0, done: false };
      }
      // Swipes rarely start straight, so decide the axis on total travel.
      if (!gesture.axis) {
        gesture.sx += size;
        gesture.sy += Math.abs(event.deltaY * scale);
        if (gesture.sx + gesture.sy < AXIS_LOCK) return;
        gesture.axis = gesture.sx >= gesture.sy ? "x" : "y";
        if (gesture.axis === "x") {
          Move.cancel();
          gesture.start = splide.index;
          gesture.from = Move.getPosition();
        }
      }
      if (gesture.axis !== "x") return;
      // Also stops the browser's own back/forward swipe.
      event.preventDefault();
      gesture.last = size;
      if (gesture.done) return;

      gesture.peak = Math.max(gesture.peak, size);
      if (gesture.peak >= SWIPE_PEAK && size < MOMENTUM_TAIL) {
        snap();
        return;
      }
      const [a, b] = [Move.getLimit(false), Move.getLimit(true)];
      const x = Move.getPosition() - dx;
      Move.translate(Math.min(Math.max(a, b), Math.max(Math.min(a, b), x)));
    }
    track.addEventListener("wheel", onWheel, { passive: false });

    // Off-screen slides are clipped by the track, so native lazy loading
    // waits until they slide in and they pop in mid-glide. Once the slider
    // nears the screen, load every slide's images.
    const loader = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        loader.disconnect();
        for (const img of track.querySelectorAll("img[loading=lazy]")) {
          img.loading = "eager";
        }
      },
      { rootMargin: "100% 0px" },
    );
    loader.observe(track);

    return () => {
      clearTimeout(quiet);
      track.removeEventListener("wheel", onWheel);
      loader.disconnect();
      splide.destroy();
    };
  }, [label]);

  // ── Cursor label ──────────────────────────────────────────────────────

  function moveCursor(event) {
    const cursor = cursorRef.current;
    if (!cursor || event.pointerType !== "mouse") return;
    const box = trackRef.current.getBoundingClientRect();
    const x = event.clientX - box.left - cursor.offsetWidth / 2;
    const y = event.clientY - box.top - cursor.offsetHeight / 2;
    // `translate` (not `transform`) so the scale-in happens around its centre.
    cursor.style.translate = `${x}px ${y}px`;
  }

  function showCursor(event) {
    if (event.pointerType !== "mouse") return;
    moveCursor(event);
    cursorRef.current?.setAttribute("data-visible", "");
  }

  function hideCursor() {
    cursorRef.current?.removeAttribute("data-visible");
  }

  // A click focuses the slider (so arrow keys work after it) without the
  // browser scrolling it into view, which jumps the page and cancels the drag.
  function focusWithoutScroll(event) {
    if (event.button !== 0) return;
    event.preventDefault();
    rootRef.current.focus({ preventScroll: true });
  }

  return (
    <div
      ref={rootRef}
      role="region"
      aria-label={label}
      aria-roledescription="carousel"
      tabIndex={0}
      onMouseDown={focusWithoutScroll}
      className={`splide ${styles.slider}`}
    >
      <div
        ref={trackRef}
        className={`splide__track ${styles.track}`}
        onPointerEnter={cursorLabel ? showCursor : undefined}
        onPointerLeave={cursorLabel ? hideCursor : undefined}
        onPointerMove={cursorLabel ? moveCursor : undefined}
      >
        <ul className={`splide__list ${styles.list}`}>
          {slides.map((slide, i) => (
            <li
              key={slideLabels[i]}
              aria-label={`${i + 1} of ${count}: ${slideLabels[i]}`}
              className={`splide__slide ${styles.slide}`}
            >
              {slide}
            </li>
          ))}
        </ul>
        {cursorLabel ? (
          <span
            ref={cursorRef}
            aria-hidden="true"
            className={`text-trim-cap ${styles.cursor}`}
          >
            {cursorLabel}
          </span>
        ) : null}
      </div>
    </div>
  );
}
