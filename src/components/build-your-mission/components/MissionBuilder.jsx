import styles from "../css/MissionBuilder.module.css";
import MissionConfigurator from "./MissionConfigurator";

/** Figma: Build your mission (3035:18443). */
export default function MissionBuilder() {
  return (
    <section aria-labelledby="mission-heading" className={styles.section}>
      <div className="container">
        <MissionConfigurator
          heading={
            <h1
              id="mission-heading"
              className={`heading-3 text-trim-cap ${styles.heading}`}
            >
              Define your mission requirements.
            </h1>
          }
        />
      </div>
    </section>
  );
}
