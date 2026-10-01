import Image from "next/image";

import gridLines from "@/assets/icons/grid-lines-banner.svg";
import scrollDown from "@/assets/icons/scroll-down.svg";

import styles from "../css/Banner.module.css";

/** Figma: Section-1 (2977:16273). */
export default function Banner() {
  return (
    <section aria-labelledby="satellite-bus-heading" className={styles.section}>
      <Image src={gridLines} alt="" fill className={styles.lines} />
      <div className={`container ${styles.content}`}>
        <h1
          id="satellite-bus-heading"
          className={`heading-1 heading-1-md text-trim-cap ${styles.title}`}
        >
          Satellite Bus
        </h1>
        <p className={`text-1 text-1-md text-trim-cap ${styles.intro}`}>
          Modular Satellite Platforms, up to 500 kg, and flight-proven
          subsystems to ensure mission success across diverse missions.
        </p>
        <a href="#satellite-bus-banner-end" className={styles.scrollCue}>
          <Image src={scrollDown} alt="Scroll to content" />
        </a>
      </div>
      <Image
        src="/assets/satellite-bus-banner.png"
        alt="An Azista satellite bus in orbit with both solar arrays deployed"
        width={1512}
        height={1397}
        preload
        sizes="100vw"
        className={styles.satellite}
      />
      <span id="satellite-bus-banner-end" className={styles.end} />
    </section>
  );
}
