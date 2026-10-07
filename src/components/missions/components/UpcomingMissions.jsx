import Image from "next/image";

import gridLines from "@/assets/icons/grid-lines-upcoming.svg";

import styles from "../css/UpcomingMissions.module.css";
import UpcomingMission from "./UpcomingMission";

const MISSIONS = [
  {
    id: "focus",
    name: "Focus",
    description:
      "Advanced upcoming high-resolution imaging mission optimized for sharp structural detail and target reconnaissance.",
    image: "/assets/missions/focus.webp",
    imageAlt: "Render of the Focus satellite with its side panels open",
    imageCrop: true,
    specs: [
      { label: "Resolution", value: "30 cm GSD" },
      { label: "Swath Width", value: "17 km" },
      { label: "Launch Timeline", value: "Scheduled for launch in 2028." },
    ],
  },
  {
    id: "panorama",
    name: "Panorama",
    description:
      "Wide-area surveillance and global monitoring mission built for large-scale geographical intelligence and rapid macro-imaging.",
    image: "/assets/missions/panorama.png",
    imageAlt: "Render of the Panorama satellite with its panels unfolded",
    reverse: true,
    specs: [
      { label: "Resolution", value: "3.4 m GSD" },
      { label: "Swath Width", value: "600 km" },
      { label: "Launch Timeline", value: "Scheduled for launch in 2028." },
    ],
  },
];

/** Figma: 4 (3002:1608). */
export default function UpcomingMissions() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="upcoming-missions-heading"
      className={styles.section}
    >
      <Image src={gridLines} alt="" fill className={styles.lines} />
      <div className="container">
        <h2
          id="upcoming-missions-heading"
          className={`heading-2 heading-2-md text-trim-cap ${styles.heading}`}
        >
          Upcoming Missions
        </h2>
        <div className={styles.list}>
          {MISSIONS.map((mission) => (
            <UpcomingMission key={mission.id} {...mission} />
          ))}
        </div>
      </div>
    </section>
  );
}
