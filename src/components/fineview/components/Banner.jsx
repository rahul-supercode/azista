import Image from "next/image";

import payloadShadow from "@/assets/icons/payload-shadow.svg";
import statAperture from "@/assets/icons/stat-aperture.svg";
import statSensor from "@/assets/icons/stat-sensor.svg";

import styles from "../css/Banner.module.css";
import CroppedImage from "./CroppedImage";

const STATS = [
  { label: "Type of Sensor", value: "TDI CCD on CMOS", icon: statSensor },
  { label: "Optics Aperture", value: "500 mm", icon: statAperture },
];

/** Figma: hero of Payload-Fineview Series page (3035:16332). */
export default function Banner() {
  return (
    <section aria-labelledby="fineview-heading" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <h1
          id="fineview-heading"
          className={`heading-1 text-trim-cap ${styles.title}`}
        >
          FineView Electro-
          <br />
          Optical Payload
        </h1>
        <p className={`text-2 text-trim-cap ${styles.intro}`}>
          High-quality panchromatic and multispectral Earth observation payload
          built for sub-meter resolution imaging over a 5+ year LEO lifetime.
        </p>
        <dl className={styles.stats}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.statLabel}>
                <span className={styles.statIcon}>
                  <Image src={stat.icon} alt="" />
                </span>
                <span className={`text-5 ${styles.statName}`}>
                  {stat.label}
                </span>
              </dt>
              <dd className="text-1 text-trim-cap">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <div className={styles.media}>
          <Image src={payloadShadow} alt="" className={styles.shadow} />
          <CroppedImage
            src="/assets/fineview/fineview-payload.png"
            alt="The Fineview payload: a gold-foiled telescope barrel on a grey test mount"
            width={1521}
            height={704}
            frame={[830.893, 432.667]}
            crop={[-0.1, 0, 112.5, 100]}
            preload
            className={styles.payload}
          />
        </div>
      </div>
    </section>
  );
}
