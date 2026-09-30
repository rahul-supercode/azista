import Image from "next/image";

import styles from "../css/MissionCard.module.css";

/**
 * `theme`: text colour for the image behind it. `specsAt`: "top" (beside the
 * title) or "bottom".
 */
export default function MissionCard({
  title,
  image,
  imageAlt,
  specs,
  theme = "light",
  specsAt = "bottom",
}) {
  return (
    <article
      className={`${styles.card} ${theme === "dark" ? styles.dark : ""}`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 1280px) 1130px, 100vw"
        draggable={false}
        className={styles.image}
      />
      <h3 className={`heading-3 text-trim-cap ${styles.title}`}>{title}</h3>
      <dl
        className={`${styles.specs} ${specsAt === "top" ? styles.specsTop : ""}`}
      >
        {specs.map((spec) => (
          <div key={spec.label} className={styles.spec}>
            <dt className={`text-5 text-trim-cap ${styles.specLabel}`}>
              {spec.label}
            </dt>
            <dd className="text-1 text-trim-cap">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
