import Image from "next/image";

import Button from "@/components/ui/Button";
import Tabs from "@/components/ui/Tabs";
import { locations, mapUrl } from "@/config/locations";

import styles from "../css/Locations.module.css";

const tabs = locations.map((location) => ({
  id: location.id,
  label: location.city,
  panel: (
    <div className={styles.panel}>
      <address className={`text-1 text-1-md text-trim-cap ${styles.address}`}>
        {location.addressLines.join(" ")}
      </address>
      <Button
        variant="link-light"
        href={mapUrl(location)}
        target="_blank"
        rel="noopener noreferrer"
      >
        View location<span className="sr-only">: {location.city}</span>
      </Button>
    </div>
  ),
}));

/** Figma: Frame 1410156121 (3035:20963). */
export default function Locations() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="locations-heading"
      className={styles.section}
    >
      <div className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <h2
            id="locations-heading"
            className={`heading-3 heading-2-md text-trim-cap ${styles.heading}`}
          >
            Locations
          </h2>
          <Tabs label="Office locations" tabs={tabs} variant="pill" />
        </div>
        <div className={styles.map}>
          <Image
            src="/assets/contact/locations-map.jpg"
            alt="Map of southern India marking the Azista Space location"
            width={1258}
            height={1448}
            sizes="(min-width: 1280px) 62vw, 131vw"
            className={styles.mapImage}
          />
        </div>
      </div>
    </section>
  );
}
