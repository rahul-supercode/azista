import Image from "next/image";

import gridLines from "@/assets/icons/grid-lines-dark.svg";
import scrollDown from "@/assets/icons/scroll-down.svg";

import styles from "../css/Banner.module.css";
import LensReveal from "./LensReveal";

const BANNER_IMAGE = {
  src: "/assets/mission-banner.jpg",
  width: 3024,
  height: 1600,
  sizes: "100vw",
};

/** Figma: 1 (3002:1386). */
export default function Banner() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="missions-heading"
      className={styles.section}
    >
      <LensReveal
        className={styles.imagery}
        lens={<Image {...BANNER_IMAGE} alt="" className={styles.image} />}
      >
        <Image
          {...BANNER_IMAGE}
          alt="Satellite image of a river winding through farmland, forest and a town"
          preload
          className={`${styles.image} ${styles.blurred}`}
        />
      </LensReveal>
      <Image src={gridLines} alt="" fill className={styles.lines} />
      <div className={`container ${styles.content}`}>
        <h1
          id="missions-heading"
          className={`heading-1 heading-1-md text-trim-cap ${styles.title}`}
        >
          Building the Future of Earth Observation
        </h1>
      </div>
      <a href="#missions-banner-end" className={styles.scrollCue}>
        <Image src={scrollDown} alt="Scroll to content" />
      </a>
      <span id="missions-banner-end" className={styles.end} />
    </section>
  );
}
