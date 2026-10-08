import Image from "next/image";

import styles from "../css/MissionCard.module.css";

/**
 * `theme`: text colour for the background behind it. `specsAt`: "top"
 * (beside the title) or "bottom". `video`, if set, plays behind the card
 * instead of `image`/`mobileImage`, and `image` (if also set) is overlaid on
 * top of it instead.
 */
export default function MissionCard({
  title,
  image,
  mobileImage = image,
  imageAlt,
  video,
  specs,
  theme = "light",
  specsAt = "bottom",
}) {
  return (
    <article
      className={`${styles.card} ${theme === "dark" ? styles.dark : ""}`}
    >
      {video ? (
        <>
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className={`${styles.image} ${styles.video}`}
          />
          {image ? (
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1280px) 1130px, 100vw"
              draggable={false}
              className={`${styles.image} ${styles.overlay}`}
            />
          ) : null}
        </>
      ) : (
        <>
          <Image
            src={mobileImage}
            alt={imageAlt}
            fill
            sizes="100vw"
            draggable={false}
            className={`${styles.image} ${styles.imageMobile}`}
          />
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1280px) 1130px, 100vw"
            draggable={false}
            className={`${styles.image} ${styles.imageDesktop}`}
          />
        </>
      )}
      <h3 className={`heading-3 heading-3-md text-trim-cap ${styles.title}`}>
        {title}
      </h3>
      <dl
        className={`${styles.specs} ${specsAt === "top" ? styles.specsTop : ""}`}
      >
        {specs.map((spec) => (
          <div key={spec.label} className={styles.spec}>
            <dt
              className={`text-5 text-4-md text-trim-cap ${styles.specLabel}`}
            >
              {spec.label}
            </dt>
            <dd className="text-1 text-1-md text-trim-cap">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
