import Image from "next/image";

import download from "@/assets/icons/download.svg";
import DatasheetButton from "@/components/shared/components/DatasheetButton";

import styles from "../css/SubsystemCard.module.css";

/** Product tile, name, one-line description and datasheet button. */
export default function SubsystemCard({ subsystem }) {
  const { name, description, image, alt, datasheet } = subsystem;

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
          className={styles.image}
        />
      </div>
      <h3 className={`text-6 ${styles.title}`}>{name}</h3>
      <p className={`text-1 text-trim-cap ${styles.description}`}>
        {description}
      </p>
      <DatasheetButton
        name={name}
        datasheet={datasheet}
        className={`text-1 ${styles.datasheet}`}
      >
        <Image src={download} alt="" />
        <span className="text-trim-cap">Download Datasheet</span>
      </DatasheetButton>
    </article>
  );
}
