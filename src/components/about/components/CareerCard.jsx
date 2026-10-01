import Image from "next/image";

import chevron from "@/assets/icons/chevron-down.svg";

import styles from "../css/CareerCard.module.css";

/** An accordion on mobile; always open from tablet up. */
export default function CareerCard({ title, icon, text }) {
  return (
    <details name="careers" className={styles.card}>
      <summary className={styles.summary}>
        <span className={styles.icon}>
          <Image src={icon} alt="" />
        </span>
        <span className={styles.title}>{title}</span>
        <Image src={chevron} alt="" className={styles.chevron} />
      </summary>
      <p className={`text-trim-cap ${styles.text}`}>{text}</p>
    </details>
  );
}
