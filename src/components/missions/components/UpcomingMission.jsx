import Image from "next/image";

import bullet from "@/assets/icons/bullet-triangle.svg";

import styles from "../css/UpcomingMission.module.css";

/**
 * One mission row: mirrored render with a "Coming soon" badge beside the
 * name, description and specs. `reverse` puts the image on the right;
 * `imageCrop` zooms the render as in Figma.
 */
export default function UpcomingMission({
  id,
  name,
  description,
  image,
  imageAlt,
  imageCrop = false,
  reverse = false,
  specs,
}) {
  return (
    <article
      aria-labelledby={`${id}-heading`}
      className={`${styles.mission} ${reverse ? styles.reverse : ""}`}
    >
      <div className={styles.media}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 577px, (min-width: 768px) 45vw, 100vw"
          className={`${styles.image} ${imageCrop ? styles.crop : ""}`}
        />
        <p className={`text-5 ${styles.badge}`}>Coming soon</p>
      </div>
      <div className={styles.details}>
        <h3 id={`${id}-heading`} className="heading-3 text-trim-cap">
          {name}
        </h3>
        <p className={`text-1 text-trim-cap ${styles.description}`}>
          {description}
        </p>
        <dl className={styles.specs}>
          {specs.map((spec) => (
            <div key={spec.label} className={styles.spec}>
              <dt className={`text-5 ${styles.label}`}>
                <Image src={bullet} alt="" />
                {spec.label}
              </dt>
              <dd className="text-5">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
