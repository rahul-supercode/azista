import Image from "next/image";

import adcs from "@/assets/icons/ait-adcs.svg";
import emi from "@/assets/icons/ait-emi.svg";
import thermal from "@/assets/icons/ait-thermal.svg";
import vibration from "@/assets/icons/ait-vibration.svg";

import styles from "../css/AitCapabilities.module.css";

const CAPABILITIES = [
  {
    title: "EMI/EMC Testing",
    description:
      "Checks electronics for electromagnetic interference and compatibility.",
    icon: emi,
    light: true,
  },
  {
    title: "Thermal-Vacuum Testing",
    description: "Tests systems in extreme temperature and vacuum conditions.",
    icon: thermal,
  },
  {
    title: "Vibration Testing",
    description: "Tests spacecraft strength against launch vibrations.",
    icon: vibration,
  },
  {
    title: "ADCS Test Setup",
    description: "Tests spacecraft pointing, control, stability, and accuracy.",
    icon: adcs,
  },
];

/** Figma: Frame 1410156749 (3002:3). */
export default function AitCapabilities() {
  return (
    <section aria-labelledby="ait-heading" className={styles.section}>
      <div className={`container ${styles.layout}`}>
        <h2
          id="ait-heading"
          className={`heading-2 heading-2-md text-trim-cap ${styles.title}`}
        >
          Assembly, Integration &amp; Testing (AIT)
        </h2>
        <ul className={styles.grid}>
          {CAPABILITIES.map((item) => (
            <li key={item.title} className={styles.card}>
              <span className={styles.iconBox}>
                <Image
                  src={item.icon}
                  alt=""
                  className={item.light ? styles.iconLight : styles.icon}
                />
              </span>
              <h3 className={`text-6 text-5-md ${styles.cardTitle}`}>
                {item.title}
              </h3>
              <p
                className={`text-1 text-1-md text-trim-cap ${styles.description}`}
              >
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
