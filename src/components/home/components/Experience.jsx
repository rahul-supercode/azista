import Button from "@/components/ui/Button";

import ExperienceOrbits from "./ExperienceOrbits";
import styles from "../css/Experience.module.css";

/** Figma: Section-7 (2938:9). */
export default function Experience() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="experience-heading"
      className={styles.section}
    >
      <ExperienceOrbits />

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
