import Image from "next/image";

import styles from "../css/Hero.module.css";

/** Figma: Section-1 (2938:5). */
export default function Hero() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="home-hero-heading"
      className={styles.section}
    >
      <Image
        src="/assets/hero-banner-md.jpg"
        alt="Azista space hardware: a gold electronics unit, an antenna test chamber, a satellite in orbit and Earth imagery from space"
        fill
        preload
        sizes="(min-width: 768px) 0px, 100vw"
        className={`${styles.banner} ${styles.bannerMobile}`}
      />
      <Image
        src="/assets/homepage-banner.jpg"
        alt="Azista space hardware: a gold electronics unit, an antenna test chamber, a satellite in orbit and Earth imagery from space"
        fill
        preload
        sizes="100vw"
        className={`${styles.banner} ${styles.bannerDesktop}`}
      />
      <div className={`container ${styles.content}`}>
        <h1
          id="home-hero-heading"
          className={`heading-2 heading-1-md text-trim-cap ${styles.heading}`}
        >
          Engineering and Manufacturing Space Hardware at Scale
        </h1>
      </div>
    </section>
  );
}
