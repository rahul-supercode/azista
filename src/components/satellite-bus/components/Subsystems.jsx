import CornerFrame from "@/components/shared/components/CornerFrame";
import DatasheetRequest from "@/components/shared/components/DatasheetRequest";
import Button from "@/components/ui/Button";

import styles from "../css/Subsystems.module.css";
import { subsystems } from "../data/subsystems";
import SubsystemCard from "./SubsystemCard";

/** Figma: Section-3 (2977:16275). */
export default function Subsystems() {
  return (
    <section
      id="subsystems"
      aria-labelledby="subsystems-heading"
      className={styles.section}
    >
      <div className="container">
        <header className={styles.header}>
          <h2 id="subsystems-heading" className="heading-2 text-trim-cap">
            Subsystems
          </h2>
          <p className={`text-2 text-trim-cap ${styles.intro}`}>
            Flight-proven satellite subsystems covering critical spacecraft
            functions, engineered for integration, reliability, and mission
            performance.
          </p>
        </header>
        <DatasheetRequest>
          <ul className={styles.grid}>
            {subsystems.map((subsystem) => (
              <li key={subsystem.name}>
                <SubsystemCard subsystem={subsystem} />
              </li>
            ))}
            <li className={styles.ctaCell}>
              <CornerFrame tone="fine" className={styles.cta}>
                <p className={`heading-3 text-trim-cap ${styles.ctaTitle}`}>
                  Let’s discuss your mission
                </p>
                <Button variant="framed" href="/contact">
                  Contact our team
                </Button>
              </CornerFrame>
            </li>
          </ul>
        </DatasheetRequest>
      </div>
    </section>
  );
}
