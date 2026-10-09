import Image from "next/image";

import Button from "@/components/ui/Button";

import styles from "../css/SatelliteBus.module.css";

// Line counts for the background grid; spacing scales with the section via
// percentages, so these just need to be dense enough to look continuous.
const V_LINES = 13;
const H_LINES = 7;
// ms between each line's fade starting, so the wave sweeps top-to-bottom,
// then (once every horizontal line has started) right-to-left, rather than
// every line pulsing in sync.
const STAGGER_MS = 150;
const V_START_MS = H_LINES * STAGGER_MS;

/** Figma: Section-5 (2938:3). */
export default function SatelliteBus() {
  return (
    <section aria-labelledby="satellite-bus-heading" className={styles.section}>
      <Image
        src="/assets/satellite-bus-hp.svg"
        alt=""
        fill
        className={styles.gridGlow}
      />
      {/* CSS-drawn (not the static grid-lines.svg) so each line can fade on its own. */}
      <div aria-hidden="true" className={styles.lines}>
        {Array.from({ length: H_LINES }, (_, i) => (
          <span
            key={`h-${i}`}
            className={styles.hLine}
            style={{
              top: `${(i / (H_LINES - 1)) * 100}%`,
              animationDelay: `${i * STAGGER_MS}ms`,
            }}
          />
        ))}
        {Array.from({ length: V_LINES }, (_, i) => (
          <span
            key={`v-${i}`}
            className={styles.vLine}
            style={{
              left: `${(i / (V_LINES - 1)) * 100}%`,
              animationDelay: `${V_START_MS + (V_LINES - 1 - i) * STAGGER_MS}ms`,
            }}
          />
        ))}
      </div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h2
            id="satellite-bus-heading"
            className={`heading-2 heading-2-md text-trim-cap ${styles.title}`}
          >
            Satellite Bus
          </h2>
          <p className={`text-1 text-1-md text-trim-cap ${styles.intro}`}>
            Modular satellite platforms up to 500 kg, engineered and
            manufactured in-house, ready to carry any mission, from full-scale
            deployments to in-orbit demonstrations.
          </p>
          <Button
            variant="framed"
            // href="/satellite-bus/subsystems"
            href="#"
            className={styles.cta}
          >
            Explore subsystems
          </Button>
        </div>
        <div className={styles.media}>
          <Image
            src="/assets/hp-satellite-bus.png"
            alt="An Azista satellite bus with a deployed solar panel and gold-foiled body"
            fill
            sizes="(min-width: 768px) 463px, 80vw"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
