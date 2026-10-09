import Image from "next/image";

import bullet from "@/assets/icons/bullet-triangle.svg";
import glow from "@/assets/icons/glow-satellite.svg";
import imagingIcon from "@/assets/icons/stat-imaging.svg";
import massIcon from "@/assets/icons/stat-mass.svg";
import missionLifeIcon from "@/assets/icons/stat-mission-life.svg";
import orbitIcon from "@/assets/icons/stat-orbit.svg";
import SplitText from "@/components/shared/components/SplitText";
import { splitTextDuration } from "@/components/shared/components/splitTextDuration";
import Button from "@/components/ui/Button";

import styles from "../css/FlightRecord.module.css";

const RECORD = [
  { label: "Images captured", value: "4000+" },
  { label: "Terabytes of compressed image data downloaded", value: "07+" },
  { label: "Gigabytes of telemetry downloaded", value: "296" },
  { label: "Hours of time in orbit", value: "26,000+" },
  { label: "Seconds of payload ops", value: "131,400+" },
  { label: "Area capture worth of Earth’s surface", value: "26%" },
  { label: "Times celestial objects were imaged", value: "50+" },
  { label: "Night images captured", value: "120+" },
  { label: "Videos acquired", value: "100+" },
];

const SPECS = [
  { label: "Mass", value: "~80 kg", icon: massIcon },
  { label: "Orbit", value: "SSO at ~540 km altitude", icon: orbitIcon },
  { label: "Mission life", value: "5 years", icon: missionLifeIcon },
  {
    label: "Imaging Performance",
    value: "Panchromatic (~4.6m GSD) and Multispectral (~8m GSD)",
    icon: imagingIcon,
  },
];

/** Figma: 3 (3002:1689). */
export default function FlightRecord() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="flight-record-heading"
      className={styles.section}
    >
      <div className="container">
        <div className={styles.header}>
          <h2
            id="flight-record-heading"
            className={`heading-2 heading-2-md text-trim-cap ${styles.title}`}
          >
            India’s longest-serving private satellite.
          </h2>
          <p className={`text-1 text-1-md text-trim-cap ${styles.intro}`}>
            Built by the private sector, successfully launched on June 13, 2023,
            via a SpaceX Falcon 9 rocket. It serves as a flight-proven platform
            supporting critical civilian and defense applications.
          </p>
        </div>
        <div className={styles.body}>
          <div className={styles.media}>
            <div aria-hidden="true" className={styles.glow}>
              <Image src={glow} alt="" className={styles.glowImage} />
            </div>
            <div className={styles.crop}>
              <Image
                src="/assets/missions/first-runner.png"
                alt="The Azista First Runner satellite"
                width={1402}
                height={1122}
                sizes="(min-width: 768px) 617px, 100vw"
                className={styles.satellite}
              />
            </div>
          </div>
          <dl className={styles.record}>
            {RECORD.map((item) => (
              <div key={item.label} className={styles.row}>
                <dt className={`text-5 text-4-md ${styles.label}`}>
                  <Image src={bullet} alt="" />
                  <SplitText>{item.label}</SplitText>
                </dt>
                <dd className={`${styles?.value} text-5 text-4-md `}>
                  <SplitText delay={splitTextDuration(item.label)}>
                    {item.value}
                  </SplitText>
                </dd>
              </div>
            ))}
          </dl>
          <Button
            variant="link-light"
            href="/contact"
            className={styles.button}
          >
            Load more
          </Button>
        </div>
        <dl className={styles.specs}>
          {SPECS.map((spec) => (
            <div key={spec.label} className={styles.spec}>
              <Image src={spec.icon} alt="" />
              <dt className={`text-5 text-4-md ${styles.specLabel}`}>
                {spec.label}
              </dt>
              <dd
                className={`text-1 text-1-md text-trim-cap ${styles.specValue}`}
              >
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
