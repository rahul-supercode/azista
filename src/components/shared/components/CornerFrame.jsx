import Image from "next/image";

import cornerLight from "@/assets/icons/corner-light.svg";
import corner from "@/assets/icons/corner.svg";

import styles from "../css/CornerFrame.module.css";

const CORNERS = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

/**
 * Box marked by a 15px corner at each corner (Figma: About, Hosted
 * Payloads). `tone`: "red" (1px, on light) or "light" (0.5px white, on dark).
 */
export default function CornerFrame({
  tone = "red",
  className = "",
  children,
}) {
  return (
    <div className={`${styles.frame} ${styles[tone]} ${className}`}>
      {CORNERS.map((position) => (
        <Image
          key={position}
          src={tone === "light" ? cornerLight : corner}
          alt=""
          width={15.5}
          height={15.5}
          className={`${styles.corner} ${styles[position]}`}
        />
      ))}
      {children}
    </div>
  );
}
