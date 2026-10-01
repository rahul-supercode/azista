import Image from "next/image";

import styles from "../css/Facilities.module.css";
import { defaultFacilityId, facilities } from "../data/facilities";
import FacilityExplorer from "./FacilityExplorer";
import FacilityPanel from "./FacilityPanel";

/** Figma: Our Facilities (3035:14482, 3035:13211, 3035:14483). */
export default function Facilities() {
  const tabs = facilities.map((facility) => ({
    id: facility.id,
    label: facility.city,
    panel: <FacilityPanel facility={facility} />,
    mapPoint: facility.mapPoint,
  }));

  return (
    <section aria-labelledby="facilities-heading" className={styles.section}>
      <div className={`container ${styles.header}`}>
        <h2
          id="facilities-heading"
          className={`heading-2 text-trim-cap ${styles.title}`}
        >
          Our Facilities
        </h2>
      </div>
      <FacilityExplorer
        tabs={tabs}
        defaultId={defaultFacilityId}
        map={
          <Image
            src="/assets/about/facilities-map.png"
            alt="Map of India marking Azista facilities in Ahmedabad, Hyderabad and Bengaluru"
            width={3024}
            height={1582}
            // Covers the zoomed-in view too.
            sizes="(min-width: 1280px) 200vw, (min-width: 768px) 240vw, 450vw"
            className={styles.mapImage}
          />
        }
      />
    </section>
  );
}
