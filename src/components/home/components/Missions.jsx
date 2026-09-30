import CardSlider from "@/components/shared/components/CardSlider";
import SectionHeader from "@/components/shared/components/SectionHeader";

import styles from "../css/Missions.module.css";
import MissionCard from "./MissionCard";

const MISSIONS = [
  {
    title: "Azista First Runner",
    image: "/assets/hp-azista-first-runner.jpg",
    imageAlt: "The Azista First Runner satellite in orbit above Earth",
    specsAt: "top",
    specs: [
      { label: "Status", value: "In-Orbit" },
      { label: "Mass", value: "80KGs" },
      { label: "Resolution", value: "PAN: 4.6m, Mx: 8m" },
    ],
  },
  {
    title: "Focus",
    image: "/assets/hp-focus.jpg",
    imageAlt: "Wireframe render of the Focus satellite",
    theme: "dark",
    specs: [
      { label: "Status", value: "Under Development" },
      { label: "Launch Date", value: "September 2027" },
    ],
  },
  {
    title: "Panorama",
    image: "/assets/hp-panorama.jpg",
    imageAlt: "Wireframe render of the Panorama satellite structure",
    specs: [
      { label: "Status", value: "Under Development" },
      { label: "Launch Date", value: "August 2028" },
    ],
  },
];

/** Figma: Section3 (2938:6). */
export default function Missions() {
  return (
    <section aria-labelledby="missions-heading" className={styles.section}>
      <SectionHeader id="missions-heading" title="Missions">
        Complete mission development under one roof, integrating payloads,
        satellite platforms, testing, launch, and mission operations into a
        single programme.
      </SectionHeader>
      <CardSlider
        label="Missions"
        cursorLabel="Explore Missions"
        slideLabels={MISSIONS.map((mission) => mission.title)}
      >
        {MISSIONS.map((mission) => (
          <MissionCard key={mission.title} {...mission} />
        ))}
      </CardSlider>
    </section>
  );
}
