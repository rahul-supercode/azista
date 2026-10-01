import Image from "next/image";

import bulletTriangle from "@/assets/icons/bullet-triangle.svg";
import DatasheetButton from "@/components/shared/components/DatasheetButton";

import styles from "../css/ProductRow.module.css";
import CroppedImage from "./CroppedImage";

/** One Fineview imager; `reverse` puts the image on the right from desktop. */
export default function ProductRow({ product, reverse = false }) {
  const { id, name, description, specs, media, datasheet } = product;
  const headingId = `${id}-heading`;

  return (
    <article
      id={id}
      aria-labelledby={headingId}
      className={`${styles.row} ${reverse ? styles.reverse : ""}`}
    >
      <CroppedImage {...media} className={styles.media} />
      <div className={styles.content}>
        <h2 id={headingId} className="heading-2 text-trim-cap">
          {name}
        </h2>
        <p className={`text-2 text-trim-cap ${styles.description}`}>
          {description}
        </p>
        <h3 className={`text-6 ${styles.specsTitle}`}>Specifications</h3>
        <dl className={styles.specs}>
          {specs.map((spec) => (
            <div key={spec.label} className={styles.spec}>
              <dt className={styles.term}>
                <Image src={bulletTriangle} alt="" className={styles.bullet} />
                <span className={`text-5 ${styles.label}`}>{spec.label}</span>
              </dt>
              <dd className="text-1 text-trim-cap">{spec.value}</dd>
            </div>
          ))}
        </dl>
        <DatasheetButton
          name={name}
          datasheet={datasheet}
          variant="download"
          className={styles.cta}
        >
          Download Datasheet
        </DatasheetButton>
      </div>
    </article>
  );
}
