import Image from "next/image";
import Link from "next/link";

import styles from "../css/Events.module.css";

// TODO: replace the "TBA" placeholders with each event's confirmed details.
const EVENTS = [
  {
    name: "National Space Symposium",
    logo: "/assets/events/space-symposium.png",
    width: 117,
    date: "April 13-16, 2026",
    place: "Colorado Springs, CO",
    booth: "Booth #542",
  },
  {
    name: "SPIE: Defense Security & Sensing",
    logo: "/assets/events/spie.png",
    width: 117,
    date: "Date TBA",
    place: "Location TBA",
    booth: "Booth TBA",
  },
  {
    name: "AUVSI Xponential",
    logo: "/assets/events/xponential.png",
    width: 142,
    date: "Date TBA",
    place: "Location TBA",
    booth: "Booth TBA",
  },
  {
    name: "Small Satellite",
    logo: "/assets/events/smallsat.png",
    width: 117,
    date: "Date TBA",
    place: "Location TBA",
    booth: "Booth TBA",
  },
];

/** Back of an event card: when and where to find us, plus a contact link. */
function EventDetails({ event }) {
  return (
    <div className={`${styles.card} ${styles.back}`}>
      <p className={styles.details}>
        <span className={`text-trim-cap ${styles.meta}`}>{event.date}</span>
        <span className={`text-trim-cap ${styles.meta}`}>{event.place}</span>
        <span className={`text-1 text-1-md text-trim-cap ${styles.booth}`}>
          {event.booth}
        </span>
      </p>
      <Link href="/contact" className={styles.connect}>
        <span className="text-trim-cap">Connect with us</span>
      </Link>
    </div>
  );
}

/** Figma: Frame 1410156740 (2977:11708). */
export default function Events() {
  return (
    <section aria-labelledby="events-heading" className={styles.section}>
      <div className="container">
        <h2
          id="events-heading"
          className={`text-3 text-3-md text-trim-cap ${styles.title}`}
        >
          Meet the Azista Space team; let’s build the hardware behind your
          mission.
        </h2>
        <ul className={styles.grid}>
          {EVENTS.map((event) => (
            // Flips on hover, or when keyboard focus reaches the back's link.
            <li key={event.name} className={styles.flip}>
              <div className={styles.flipInner}>
                <div className={`${styles.card} ${styles.front}`}>
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
                </div>
                <EventDetails event={event} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
