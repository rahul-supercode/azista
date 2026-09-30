import Image from "next/image";

import orbitDashed from "@/assets/icons/orbit-dashed.png";
import orbitDot from "@/assets/icons/orbit-dot.svg";
import orbitInner from "@/assets/icons/orbit-inner.svg";
import orbitOuter from "@/assets/icons/orbit-outer.svg";
import Button from "@/components/ui/Button";

import styles from "../css/Experience.module.css";

// Dot positions inside the (unrotated) 512 × 746 orbit box, from Figma.
const DOTS = [
  { left: 213, top: 367 },
  { left: 379, top: 543 },
  { left: 280, top: 250 },
  { left: 123, top: 98 },
];

/** Figma: Section-7 (2938:9). */
export default function Experience() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="experience-heading"
      className={styles.section}
    >
      {/* Decorative orbits, drawn in a 512 × 746 box turned 90° (as in Figma). */}
      <div aria-hidden="true" className={styles.orbitSlot}>
        <div className={styles.orbits}>
          <Image
            src={orbitInner}
            alt=""
            className={`${styles.orbit} ${styles.inner}`}
          />
          <Image
            src={orbitOuter}
            alt=""
            className={`${styles.orbit} ${styles.outer}`}
          />
          {DOTS.map((dot) => (
            <Image
              key={`${dot.left}-${dot.top}`}
              src={orbitDot}
              alt=""
              className={styles.dot}
              style={{ left: dot.left, top: dot.top }}
            />
          ))}
          <Image
            src={orbitDashed}
            alt=""
            width={1409.599}
            height={1409.599}
            className={`${styles.orbit} ${styles.dashed}`}
          />
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        <h2
          id="experience-heading"
          className={`heading-2 text-trim-cap ${styles.title}`}
        >
          Experience of delivering subsystems across 75+ satellite missions.
        </h2>
        <Button variant="arrow-light" href="/contact">
          Contact us
        </Button>
      </div>
    </section>
  );
}
