import Image from "next/image";

import ringDashed from "@/assets/icons/ring-dashed.png";
import ringInner from "@/assets/icons/ring-inner.svg";
import ringMiddle from "@/assets/icons/ring-middle.svg";

import styles from "../css/OrbitRings.module.css";

/**
 * Three concentric orbit rings (dashed outer, two thin inner), square. Size
 * and place it with `className`; `sizes` is the rendered width.
 */
export default function OrbitRings({ sizes, className = "" }) {
  return (
    <div aria-hidden="true" className={`${styles.rings} ${className}`}>
      <Image src={ringDashed} alt="" sizes={sizes} className={styles.dashed} />
      <Image src={ringMiddle} alt="" className={styles.middle} />
      <Image src={ringInner} alt="" className={styles.inner} />
    </div>
  );
}
