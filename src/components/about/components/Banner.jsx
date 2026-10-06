import Image from "next/image";

import styles from "../css/Banner.module.css";

/** Figma: Frame 1410156001 (3035:14402); mobile 3035:12960. */
export default function Banner() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="about-heading"
      className={styles.section}
    >
      <Image
        src="/assets/about/about-banner-md.jpg"
        alt="Azista cleanroom with satellite test equipment and engineers at work"
        fill
        preload
        sizes="(min-width: 768px) 0px, 100vw"
        className={`${styles.image} ${styles.imageMobile}`}
      />
      <Image
        src="/assets/about/about-banner.jpg"
        alt="Azista cleanroom with satellite test equipment and engineers at work"
        fill
        preload
        sizes="100vw"
        className={`${styles.image} ${styles.imageDesktop}`}
      />
      <div className={`container ${styles.content}`}>
        <h1 id="about-heading" className="heading-2 heading-1-md text-trim-cap">
          The Azista story
        </h1>
      </div>
    </section>
  );
}
