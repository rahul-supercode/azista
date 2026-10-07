import Image from "next/image";

import gridLines from "@/assets/icons/grid-lines.svg";
import Button from "@/components/ui/Button";

import styles from "../css/SatelliteBus.module.css";

/** Figma: Section-5 (2938:3). */
export default function SatelliteBus() {
  return (
    <section aria-labelledby="satellite-bus-heading" className={styles.section}>
      <Image src={gridLines} alt="" fill className={styles.lines} />
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
