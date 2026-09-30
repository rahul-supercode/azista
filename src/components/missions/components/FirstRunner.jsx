import Image from "next/image";

import OrbitRings from "@/components/shared/components/OrbitRings";

import styles from "../css/FirstRunner.module.css";
import MissionClock from "./MissionClock";
import SatelliteDescent from "./SatelliteDescent";

// Launch: SpaceX Falcon 9, 13 June 2023 (IST).
const LAUNCH = "2023-06-13T00:00:00+05:30";
// The page is static: this is the build time, which the clock hydrates with.
const RENDERED_AT = Date.now();

/** Figma: 2 (3002:1368). */
export default function FirstRunner() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="first-runner-heading"
      className={styles.section}
    >
      <div className={`container ${styles.header}`}>
        <p className={`text-5 text-trim-cap ${styles.eyebrow}`}>
          In orbit since 2023
        </p>
        <h2 id="first-runner-heading" className="heading-2 text-trim-cap">
          Azista First Runner
        </h2>
      </div>
      <div className={styles.earth}>
        <Image
          src="/assets/missions/earth-from-space.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.earthImage}
        />
        {/* Starts beside the heading and descends into the dock on scroll. */}
        <SatelliteDescent
          dock="#first-runner-dock"
          orbit="#first-runner-orbit"
          className={styles.satellite}
        >
          <Image
            src="/assets/missions/first-runner.png"
            alt="The Azista First Runner satellite"
            width={1402}
            height={1122}
            sizes="27vw"
            className={styles.satelliteImage}
          />
        </SatelliteDescent>
      </div>
      <MissionClock
        since={LAUNCH}
        renderedAt={RENDERED_AT}
        className={styles.clock}
      />
      <div id="first-runner-orbit" aria-hidden="true" className={styles.orbit}>
        <OrbitRings sizes="85vw" className={styles.rings} />
      </div>
      <div id="first-runner-dock" className={styles.dock} />
    </section>
  );
}
