import Image from "next/image";
import Link from "next/link";

import arrowBlack from "@/assets/icons/arrow-black.svg";
import arrowWhite from "@/assets/icons/arrow-white.svg";
import bracketLeftWhite from "@/assets/icons/bracket-left-white.svg";
import bracketLeft from "@/assets/icons/bracket-left.svg";
import bracketRightWhite from "@/assets/icons/bracket-right-white.svg";
import bracketRight from "@/assets/icons/bracket-right.svg";
import downloadWhite from "@/assets/icons/download-white.svg";
import underline from "@/assets/icons/underline.svg";

import styles from "./css/Button.module.css";

/**
 * Figma: Button-2 → `primary`, Button-1 → `framed`, Button-3 → `link`.
 * `framed-light` is the header CTA: white fill and brackets, for dark backgrounds.
 * `arrow-light` is a bare white arrow + label link, for dark backgrounds.
 * `download` is the red fill with a download icon (Figma: datasheet form).
 * Renders a `next/link` when given `href`, otherwise a `<button>`.
 */
const VARIANT_CLASSES = {
  primary: `text-1 ${styles.primary}`,
  framed: styles.framed,
  "framed-light": styles.framed,
  link: `text-1 ${styles.link}`,
  "arrow-light": `text-1 ${styles.arrowLight}`,
  download: `text-1 ${styles.primary} ${styles.download}`,
};

export default function Button({
  variant = "primary",
  href,
  type = "button",
  className = "",
  children,
  ...props
}) {
  const classes = `${styles.button} ${VARIANT_CLASSES[variant]} ${className}`;
  const content = <ButtonContent variant={variant}>{children}</ButtonContent>;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}

function ButtonContent({ variant, children }) {
  switch (variant) {
    case "framed":
    case "framed-light": {
      const light = variant === "framed-light";
      return (
        <>
          <Bracket src={light ? bracketLeftWhite : bracketLeft} />
          <span
            className={`text-4 ${styles.framedLabel} ${light ? styles.framedLabelLight : ""}`}
          >
            {children}
          </span>
          <Bracket src={light ? bracketRightWhite : bracketRight} flip />
        </>
      );
    }
    case "link":
      return (
        <>
          <span className={styles.linkRow}>
            <Arrow src={arrowBlack} />
            <span className="text-trim-cap">{children}</span>
          </span>
          <span aria-hidden="true" className={styles.underline}>
            <Image src={underline} alt="" width={99} height={0.8} />
          </span>
        </>
      );
    case "download":
      return (
        <>
          <Image src={downloadWhite} alt="" />
          <span className="text-trim-cap">{children}</span>
        </>
      );
    default:
      return (
        <>
          <Arrow src={arrowWhite} />
          <span className="text-trim-cap">{children}</span>
        </>
      );
  }
}

function Arrow({ src }) {
  return (
    <span aria-hidden="true" className={styles.arrow}>
      <Image src={src} alt="" width={11.7955} height={7.2764} />
    </span>
  );
}

function Bracket({ src, flip = false }) {
  return (
    // Outer span: hover/focus animation (corners spread outward).
    // Inner span: mirror for the right-hand bracket.
    <span
      aria-hidden="true"
      className={`${styles.bracket} ${flip ? styles.bracketRight : styles.bracketLeft}`}
    >
      <span className={`${styles.bracketInner} ${flip ? styles.flip : ""}`}>
        <Image src={src} alt="" width={7.5} height={57.5} />
      </span>
    </span>
  );
}
