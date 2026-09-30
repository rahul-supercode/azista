import Image from "next/image";
import Link from "next/link";

import styles from "../css/Events.module.css";

// Where to find the team next (Figma: the dark card).
const NEXT_EVENT = {
  date: "April 13-16, 2026",
  place: "Colorado Springs, CO",
  booth: "Booth #542",
};

// Logo boxes are 54px tall; widths follow Figma.
const EVENTS = [
  {
    name: "National Space Symposium",
    logo: "/assets/events/space-symposium.png",
    width: 117,
  },
  {
    name: "SPIE: Defense Security & Sensing",
    logo: "/assets/events/spie.png",
    width: 117,
  },
  {
    name: "AUVSI Xponential",
    logo: "/assets/events/xponential.png",
    width: 142,
  },
  {
    name: "Small Satellite",
    logo: "/assets/events/smallsat.png",
    width: 117,
  },
];

/** Figma: Frame 1410156740 (2977:11708). */
export default function Events() {
  return (
    <section aria-labelledby="events-heading" className={styles.section}>
      <div className="container">
        <h2
          id="events-heading"
          className={`text-3 text-trim-cap ${styles.title}`}
        >
          Meet the Azista Space team; let’s build the hardware behind your
          mission.
        </h2>
        <ul className={styles.grid}>
          <li className={`${styles.card} ${styles.featured}`}>
            <p className={styles.details}>
              <span className={`text-trim-cap ${styles.meta}`}>
                {NEXT_EVENT.date}
              </span>
              <span className={`text-trim-cap ${styles.meta}`}>
                {NEXT_EVENT.place}
              </span>
              <span className={`text-1 text-trim-cap ${styles.booth}`}>
                {NEXT_EVENT.booth}
              </span>
            </p>
            <Link href="/contact" className={styles.connect}>
              <span className="text-trim-cap">Connect with us</span>
            </Link>
          </li>
          {EVENTS.map((event) => (
            <li key={event.name} className={styles.card}>
              <Image
                src={event.logo}
                alt={`${event.name} logo`}
                width={event.width}
                height={54}
                className={styles.logo}
              />
              <p className={`text-1 text-trim-cap ${styles.name}`}>
                {event.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
