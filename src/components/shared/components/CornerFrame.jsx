import Image from "next/image";

import cornerFineWhite from "@/assets/icons/corner-fine-white.svg";
import cornerFine from "@/assets/icons/corner-fine.svg";
import cornerLight from "@/assets/icons/corner-light.svg";
import corner from "@/assets/icons/corner.svg";

import styles from "../css/CornerFrame.module.css";

const CORNERS = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

const TONES = {
  red: { src: corner, size: 15.5 },
  light: { src: cornerLight, size: 15.5 },
  fine: { src: cornerFine, size: 10.4 },
  fineLight: { src: cornerFineWhite, size: 10.4 },
};

/**
 * Box marked by a corner at each corner. `tone`: "red", "light" (on dark),
 * "fine" or "fineLight" (fine, on dark).
 */
export default function CornerFrame({
  tone = "red",
  className = "",
  children,
}) {
  const { src, size } = TONES[tone];

  return (
    <div className={`${styles.frame} ${styles[tone]} ${className}`}>
      {CORNERS.map((position) => (
        <Image
          key={position}
          src={src}
          alt=""
          width={size}
          height={size}
          className={`${styles.corner} ${styles[position]}`}
        />
      ))}
      {children}
    </div>
  );
}
