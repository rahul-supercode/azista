import Image from "next/image";

import bulletTriangle from "@/assets/icons/bullet-triangle.svg";

import SplitText from "./SplitText";
import { splitTextDuration } from "./splitTextDuration";
import styles from "../css/SpecTable.module.css";

function Spec({ label, value }) {
  return (
    <div className={styles.spec}>
      <dt className={`text-5 text-4-md ${styles.label}`}>
        <Image src={bulletTriangle} alt="" />
        <SplitText className={styles.labelText}>{label}</SplitText>
      </dt>
      <dd className={`text-5 text-4-md ${styles.value}`}>
        <SplitText delay={splitTextDuration(label)}>{value}</SplitText>
      </dd>
    </div>
  );
}

/**
 * Bulleted label → value rows. From tablet up the labels form a column; set
 * its width with `--spec-label-width` (default 228px) on `className`.
 * `mobileLimit`, if given and shorter than `specs`, shows only that many
 * rows on mobile with a "Load more" toggle revealing the rest; desktop
 * always shows every row regardless.
 */
export default function SpecTable({ specs, mobileLimit, className = "" }) {
  const hasMore = mobileLimit != null && specs.length > mobileLimit;
  const visible = hasMore ? specs.slice(0, mobileLimit) : specs;
  const rest = hasMore ? specs.slice(mobileLimit) : [];

  return (
    <dl className={`${styles.specs} ${className}`}>
      {visible.map((spec) => (
        <Spec key={spec.label} {...spec} />
      ))}
      {hasMore && (
        <details className={styles.more}>
          <summary className={styles.moreToggle}>Load more</summary>
          {rest.map((spec) => (
            <Spec key={spec.label} {...spec} />
          ))}
        </details>
      )}
    </dl>
  );
}
