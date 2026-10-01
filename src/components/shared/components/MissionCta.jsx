import Image from "next/image";

import Button from "@/components/ui/Button";

import styles from "../css/MissionCta.module.css";

/** Figma: Frame 1410156559 (2910:603); also Missions "6" (3002:1510). */
export default function MissionCta() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="mission-cta-heading"
      className={styles.section}
    >
      <Image
        src="/assets/start-your-mission-md.jpg"
        alt=""
        fill
        sizes="(min-width: 768px) 0px, 100vw"
        className={`${styles.background} ${styles.backgroundMobile}`}
      />
      <Image
        src="/assets/hp-mission-cta.jpg"
        alt=""
        fill
        sizes="100vw"
        className={`${styles.background} ${styles.backgroundDesktop}`}
      />
      <div className={`container ${styles.content}`}>
        <p className={`text-5 text-4-md text-trim-cap ${styles.eyebrow}`}>
          Start your mission
        </p>
        <h2
          id="mission-cta-heading"
          className={`heading-2 heading-3-md text-trim-cap ${styles.title}`}
        >
          Engineered around your mission requirements.
        </h2>
        <Button href="/build-your-mission">Build your mission</Button>
      </div>
    </section>
  );
}
