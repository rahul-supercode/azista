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
    mapPointMobile: facility.mapPointMobile,
  }));

  return (
    <section aria-labelledby="facilities-heading" className={styles.section}>
      <div className={`container ${styles.header}`}>
        <h2
          id="facilities-heading"
          className={`heading-2 heading-2-md text-trim-cap ${styles.title}`}
        >
          Our Facilities
        </h2>
      </div>
      <FacilityExplorer
        tabs={tabs}
        defaultId={defaultFacilityId}
        map={
          <>
            {/* Mobile: a dedicated portrait map — a different crop than
                desktop's, not just a resize, so it zooms/pans using its own
                mapPointMobile fractions (see data/facilities.js). */}
            <Image
              src="/assets/about/facilities-map-md.png"
              alt="Map of India marking Azista facilities in Ahmedabad, Hyderabad and Bengaluru"
              width={640}
              height={1010}
              sizes="(min-width: 768px) 0px, 100vw"
              className={`${styles.mapImage} ${styles.mapImageMobile}`}
            />
            <Image
              src="/assets/about/facilities-map.png"
              alt="Map of India marking Azista facilities in Ahmedabad, Hyderabad and Bengaluru"
              width={3024}
              height={1582}
              // Covers the zoomed-in view too.
              sizes="(min-width: 1280px) 200vw, 240vw"
              className={`${styles.mapImage} ${styles.mapImageDesktop}`}
            />
          </>
        }
      />
    </section>
  );
}
