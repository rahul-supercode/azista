import Tabs from "@/components/ui/Tabs";

import styles from "../css/SatellitePlatforms.module.css";
import { defaultPlatformId, platforms } from "../data/platforms";
import PlatformPanel from "./PlatformPanel";

/** Figma: Section-2 (2977:16274). */
export default function SatellitePlatforms() {
  const tabs = platforms.map((platform) => ({
    id: platform.id,
    label: platform.name,
    panel: <PlatformPanel platform={platform} />,
  }));

  return (
    <section
      data-bg="dark"
      aria-labelledby="satellite-platforms-heading"
      className={styles.section}
    >
      <div className="container">
        <div className={styles.header}>
          <h2
            id="satellite-platforms-heading"
            className={`heading-2 text-trim-cap ${styles.title}`}
          >
            Satellite Platforms
          </h2>
          <p className={`text-2 text-trim-cap ${styles.intro}`}>
            Modular satellite platforms designed for rapid deployment across
            diverse mission requirements, with proven flight heritage and
            scalable configurations.
          </p>
        </div>
        <Tabs
          label="Satellite platforms"
          tabs={tabs}
          defaultId={defaultPlatformId}
          className={styles.tabs}
        />
      </div>
    </section>
  );
}
