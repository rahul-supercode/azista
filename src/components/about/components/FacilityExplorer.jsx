"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import arrow from "@/assets/icons/slider-arrow.svg";
import Tabs from "@/components/ui/Tabs";

import styles from "../css/FacilityExplorer.module.css";

// Share of the map that must be on screen before it zooms in.
const ZOOM_THRESHOLD = 0.4;

/**
 * Map with location tabs and prev/next buttons that cycle through them. Once
 * the map scrolls into view it zooms to the selected location's `mapPoint`
 * (`mapPointMobile` below 768px, for the differently-cropped mobile image).
 */
export default function FacilityExplorer({ tabs, defaultId, map }) {
  const [activeId, setActiveId] = useState(defaultId);
  const [zoomed, setZoomed] = useState(false);
  const mapRef = useRef(null);

  const index = tabs.findIndex((tab) => tab.id === activeId);
  const { x, y } = tabs[index].mapPoint;
  const { x: mx, y: my } = tabs[index].mapPointMobile;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setZoomed(true);
      },
      { threshold: ZOOM_THRESHOLD },
    );
    observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  function step(delta) {
    setActiveId(tabs[(index + delta + tabs.length) % tabs.length].id);
  }

  return (
    <div className={styles.stage}>
      <div ref={mapRef} className={styles.map}>
        <div
          className={styles.canvas}
          data-zoomed={zoomed || undefined}
          style={{
            "--point-x": x,
            "--point-y": y,
            "--point-x-mobile": mx,
            "--point-y-mobile": my,
          }}
        >
          {map}
        </div>
      </div>
      <div className={`container ${styles.explorer}`}>
        <Tabs
          label="Facility locations"
          tabs={tabs}
          activeId={activeId}
          onChange={setActiveId}
          variant="compact"
          className={styles.card}
        />
        <div className={styles.arrows}>
          <button
            type="button"
            aria-label="Previous location"
            onClick={() => step(-1)}
            className={`${styles.arrow} ${styles.prev}`}
          >
            <Image src={arrow} alt="" />
          </button>
          <button
            type="button"
            aria-label="Next location"
            onClick={() => step(1)}
            className={styles.arrow}
          >
            <Image src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
