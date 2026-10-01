import Image from "next/image";

import bulletTriangle from "@/assets/icons/bullet-triangle.svg";

import styles from "../css/SpecTable.module.css";

/**
 * Bulleted label → value rows. From tablet up the labels form a column; set
 * its width with `--spec-label-width` (default 228px) on `className`.
 */
export default function SpecTable({ specs, className = "" }) {
  return (
    <dl className={`${styles.specs} ${className}`}>
      {specs.map((spec) => (
        <div key={spec.label} className={styles.spec}>
          <dt className={`text-5 text-4-md ${styles.label}`}>
            <Image src={bulletTriangle} alt="" />
            <span>{spec.label}</span>
          </dt>
          <dd className={`text-5 text-4-md ${styles.value}`}>{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
