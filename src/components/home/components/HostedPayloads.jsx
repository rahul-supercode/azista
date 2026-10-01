import Image from "next/image";

import glow from "@/assets/icons/glow.svg";
import CornerFrame from "@/components/shared/components/CornerFrame";
import Button from "@/components/ui/Button";

import styles from "../css/HostedPayloads.module.css";

/** Figma: section-6 (2938:8). */
export default function HostedPayloads() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="hosted-payloads-heading"
      className={styles.section}
    >
      <div className="container">
        <CornerFrame tone="light" className={styles.frame}>
          <div className={styles.media}>
            <Image src={glow} alt="" className={styles.glow} />
            <Image
              src="/assets/hp-hosted-payloads.png"
              alt="An Azista satellite with four deployed solar panels and a payload mounted on top"
              fill
              sizes="(min-width: 1280px) 700px, (min-width: 768px) 50vw, 100vw"
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <h2
              id="hosted-payloads-heading"
              className={`heading-2 heading-2-md text-trim-cap ${styles.title}`}
            >
              Hosted Payloads
            </h2>
            <p className={`text-1 text-1-md text-trim-cap ${styles.intro}`}>
              A route to space for critical instruments and sensors, flown on
              our satellites and delivered without the cost or timeline of
              building a dedicated spacecraft
            </p>
            <Button
              variant="framed"
              href="/hosted-payloads"
              className={styles.cta}
            >
              Learn more
            </Button>
          </div>
        </CornerFrame>
      </div>
    </section>
  );
}
