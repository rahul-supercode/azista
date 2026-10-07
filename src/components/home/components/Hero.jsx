import ArtDirectedImage from "@/components/ui/ArtDirectedImage";

import styles from "../css/Hero.module.css";

/** Figma: Section-1 (2938:5). */
export default function Hero() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="home-hero-heading"
      className={styles.section}
    >
      <ArtDirectedImage
        mobileSrc="/assets/hero-banner-md.jpg"
        desktopSrc="/assets/homepage-banner.jpg"
        alt="Azista space hardware: a gold electronics unit, an antenna test chamber, a satellite in orbit and Earth imagery from space"
        priority
        className={styles.banner}
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
