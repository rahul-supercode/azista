import CornerFrame from "@/components/shared/components/CornerFrame";
import ScrollRevealText from "@/components/shared/components/ScrollRevealText";
import Button from "@/components/ui/Button";

import styles from "../css/About.module.css";

/** Figma: section-2 (2910:564). */
export default function About() {
  return (
    <section
      aria-label="About Azista"
      className={`container ${styles.section}`}
    >
      <CornerFrame className={styles.frame}>
        <ScrollRevealText
          className={`text-3 text-trim-cap ${styles.statement}`}
        >
          Azista Space is a vertically integrated space systems manufacturer
          delivering optical payloads, satellite buses, and subsystems. We bring
          engineering, manufacturing, integration, and testing together to
          simplify the journey from design to deployment, with reliable,
          scalable, and cost-effective hardware.
        </ScrollRevealText>
        <Button variant="framed" href="/about">
          More about us
        </Button>
      </CornerFrame>
    </section>
  );
}
