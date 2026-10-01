import Image from "next/image";

import satelliteShadow from "@/assets/icons/satellite-shadow.svg";
import CornerFrame from "@/components/shared/components/CornerFrame";

import styles from "../css/SatellitePreview.module.css";
import {
  missionSummary,
  missionTitle,
  pickBus,
  subsystems,
} from "../data/mission";

/**
 * Figma: the grey satellite panel (3035:18445). Follows the form: the bus
 * (render and size) tracks the payload, chosen subsystems stack up beside it
 * and the caption sums up the mission.
 */
export default function SatellitePreview({
  mission,
  animate = false,
  className = "",
}) {
  const bus = pickBus(mission);
  const title = missionTitle(mission);
  const chosen = subsystems.filter(({ value }) =>
    mission.subsystems.includes(value),
  );

  return (
    <figure className={`${styles.panel} ${className}`}>
      <CornerFrame tone="medium" className={styles.frame} />
      <div className={styles.stage} style={{ "--scale": bus.scale }}>
        <Image
          src={satelliteShadow}
          alt=""
          width={374.62}
          height={214.842}
          className={styles.shadow}
        />
        {/* Keyed by bus so a new bus fades in. */}
        <div
          key={bus.name}
          className={`${styles.render} ${animate ? styles.fadeIn : ""}`}
        >
          <Image
            src={bus.image}
            alt={`${title} built on the ${bus.name} bus`}
            width={2134}
            height={1224}
            preload
            sizes="(min-width: 1280px) 49vw, 87vw"
            className={styles.image}
          />
        </div>
      </div>
      <ul aria-hidden="true" className={styles.subsystems}>
        {chosen.map(({ value, image }) => (
          <li key={value} className={styles.subsystem}>
            <Image
              src={image}
              alt=""
              width={56}
              height={56}
              sizes="56px"
              className={styles.subsystemImage}
            />
          </li>
        ))}
      </ul>
      <figcaption className={styles.caption}>
        <span className="text-1 text-trim-cap">{title}</span>
        <span className={`text-5 text-trim-cap ${styles.summary}`}>
          {missionSummary(mission)}
        </span>
      </figcaption>
    </figure>
  );
}
