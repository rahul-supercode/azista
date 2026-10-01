import Image from "next/image";

import bullet from "@/assets/icons/bullet-triangle.svg";

import styles from "../css/FacilityPanel.module.css";

export default function FacilityPanel({ facility }) {
  return (
    <>
      <h3 className={`heading-3 text-trim-cap ${styles.city}`}>
        {facility.city}
      </h3>
      {facility.sites.length > 0 ? (
        <ul className={styles.sites}>
          {facility.sites.map((site) => (
            <li key={site} className={styles.site}>
              <Image src={bullet} alt="" className={styles.bullet} />
              {site}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
