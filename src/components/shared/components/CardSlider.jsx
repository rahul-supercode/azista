"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";

import styles from "../css/CardSlider.module.css";

// A drag past this share of a slide's width moves to the neighbour.
const DRAG_THRESHOLD = 0.15;
// Pointer travel (px) before a press counts as a drag rather than a click.
const DRAG_SLOP = 6;
// How much of the drag is applied past the first/last slide.
const EDGE_RESISTANCE = 0.3;
// Quiet time (ms) after the last wheel event before snapping to a slide.
const WHEEL_SETTLE_MS = 140;

/**
 * Horizontal card slider (after turionspace.com's mission slider): the
 * first card sits on the content's left edge, middle cards are centred with
 * their neighbours peeking in, and the last card sits on the right edge.
 * Moves by dragging/swiping, trackpad swipes, the arrow keys, or clicking a
 * peeking card.
 * `slideLabels` names each child for screen readers; `cursorLabel`, if set,
 * is a visual hint that follows the mouse over the cards.
 */
export default function CardSlider({
  label,
  slideLabels,
  cursorLabel,
  children,
}) {
  const slides = Children.toArray(children);
  const count = slides.length;

  const edgesRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const dragRef = useRef(null);
  const cursorRef = useRef(null);
  const [index, setIndex] = useState(0);

  /** Track translation that puts slide `i` in place, clamped to the edges. */
  const offsetFor = useCallback(
    (i) => {
      const edges = edgesRef.current;
      const viewport = viewportRef.current;
      const items = trackRef.current?.children;
      if (!edges || !viewport || !items?.length) return 0;

      const origin = viewport.getBoundingClientRect().left;
      const content = edges.getBoundingClientRect();
      const slide = items[i];
      const last = items[count - 1];

      const centred =
        (viewport.clientWidth - slide.offsetWidth) / 2 - slide.offsetLeft;
      const max = content.left - origin;
      const min = content.right - origin - (last.offsetLeft + last.offsetWidth);
      return Math.min(max, Math.max(min, centred));
    },
    [count],
  );

  const applyOffset = useCallback((x, animate) => {
    const track = trackRef.current;
    if (!track) return;
    offsetRef.current = x;
    track.style.transition = animate ? "" : "none";
    track.style.transform = `translate3d(${x}px, 0, 0)`;
  }, []);

  // Glide to the active slide; re-place it instantly whenever the layout changes.
  const placedRef = useRef(false);
  useEffect(() => {
    applyOffset(offsetFor(index), placedRef.current);
    placedRef.current = true;
  }, [index, offsetFor, applyOffset]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const observer = new ResizeObserver(() =>
      applyOffset(offsetFor(index), false),
    );
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [index, offsetFor, applyOffset]);

  const goTo = useCallback(
    (i) => {
      const next = Math.min(count - 1, Math.max(0, i));
      // Same index (e.g. a short drag): glide back into place.
      if (next === index) applyOffset(offsetFor(index), true);
      setIndex(next);
    },
    [count, index, offsetFor, applyOffset],
  );

  // ── Trackpad / horizontal wheel ───────────────────────────────────────
  // Horizontal wheel deltas (two-finger swipes, Magic Mouse, Shift+wheel)
  // move the track directly; once the gesture and its inertia go quiet, it
  // snaps to the nearest slide. Vertical scrolling is left to the page.
  // Attached natively because React's wheel listener is passive and can't
  // stop the browser's own back/forward swipe.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    let settle;

    function onWheel(event) {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();

      const start = offsetFor(0);
      const end = offsetFor(count - 1);
      const x = Math.min(
        start,
        Math.max(end, offsetRef.current - event.deltaX),
      );
      applyOffset(x, false);

      clearTimeout(settle);
      settle = setTimeout(() => {
        let nearest = 0;
        for (let i = 1; i < count; i++) {
          if (Math.abs(offsetFor(i) - x) < Math.abs(offsetFor(nearest) - x)) {
            nearest = i;
          }
        }
        goTo(nearest);
      }, WHEEL_SETTLE_MS);
    }

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      clearTimeout(settle);
      viewport.removeEventListener("wheel", onWheel);
    };
  }, [count, offsetFor, applyOffset, goTo]);

  function onKeyDown(event) {
    if (event.key === "ArrowLeft") goTo(index - 1);
    else if (event.key === "ArrowRight") goTo(index + 1);
    else return;
    event.preventDefault();
  }

  // ── Drag / swipe ──────────────────────────────────────────────────────

  function onPointerDown(event) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragRef.current = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      base: offsetRef.current,
      dx: 0,
      active: false,
    };
  }

  // ── Cursor label ──────────────────────────────────────────────────────

  function moveCursor(event) {
    const cursor = cursorRef.current;
    if (!cursor || event.pointerType !== "mouse") return;
    const box = viewportRef.current.getBoundingClientRect();
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

  function onPointerMove(event) {
    moveCursor(event);
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;

    if (!drag.active) {
      if (Math.abs(dx) < DRAG_SLOP && Math.abs(dy) < DRAG_SLOP) return;
      // Mostly vertical: let the page scroll instead.
      if (Math.abs(dy) > Math.abs(dx)) {
        dragRef.current = null;
        return;
      }
      drag.active = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    drag.dx = dx;
    const atStart = index === 0 && dx > 0;
    const atEnd = index === count - 1 && dx < 0;
    const eased = atStart || atEnd ? dx * EDGE_RESISTANCE : dx;
    applyOffset(drag.base + eased, false);
  }

  function onPointerUp(event) {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    if (!drag.active) {
      dragRef.current = null;
      return;
    }
    const width = trackRef.current.children[index].offsetWidth;
    const step = Math.abs(drag.dx) > width * DRAG_THRESHOLD;
    goTo(step ? index - Math.sign(drag.dx) : index);
    // Keep the flag until the click that follows this pointerup is swallowed.
    requestAnimationFrame(() => {
      dragRef.current = null;
    });
  }

  function onClickCapture(event) {
    if (dragRef.current?.active) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={styles.slider}
    >
      {/* Zero-height marker whose box gives the content's left/right edges. */}
      <div className="container">
        <div ref={edgesRef} />
      </div>

      <div
        ref={viewportRef}
        className={styles.viewport}
        onPointerDown={onPointerDown}
        onPointerEnter={showCursor}
        onPointerLeave={hideCursor}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={onClickCapture}
      >
        <div ref={trackRef} className={styles.track}>
          {slides.map((slide, i) => (
            <div
              key={slideLabels[i]}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${slideLabels[i]}`}
              onClick={i === index ? undefined : () => goTo(i)}
              className={`${styles.slide} ${i === index ? "" : styles.inactive}`}
            >
              {slide}
            </div>
          ))}
        </div>
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

      <p aria-live="polite" className="sr-only">
        {`Slide ${index + 1} of ${count}: ${slideLabels[index]}`}
      </p>
    </div>
  );
}
