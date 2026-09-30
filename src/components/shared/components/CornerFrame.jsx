import Image from "next/image";

import cornerFine from "@/assets/icons/corner-fine.svg";
import cornerLight from "@/assets/icons/corner-light.svg";
import corner from "@/assets/icons/corner.svg";

import styles from "../css/CornerFrame.module.css";

const CORNERS = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

const TONES = {
  red: { src: corner, size: 15.5 },
  light: { src: cornerLight, size: 15.5 },
  fine: { src: cornerFine, size: 10.4 },
};

/**
 * Box marked by a corner at each corner (Figma: About, Hosted Payloads,
 * Subsystems). `tone`: "red" (15px, 1px, on light), "light" (15px, 0.5px
 * white, on dark) or "fine" (10px, 0.8px red, on light).
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
