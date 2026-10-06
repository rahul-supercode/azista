import ExperienceOrbits from "./ExperienceOrbits";
import styles from "../css/Experience.module.css";

/** Figma: section (3186:4406). */
export default function Experience() {
  return (
    <section aria-labelledby="experience-heading" className={styles.section}>
      <ExperienceOrbits />

      <div className={`container ${styles.content}`}>
        <h2
          id="experience-heading"
          className={`heading-2 text-trim-cap ${styles.title}`}
        >
          Experience of delivering subsystems across 75+ satellite missions.
        </h2>
      </div>
    </section>
  );
}
