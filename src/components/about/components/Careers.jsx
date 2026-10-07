import Image from "next/image";

import designIcon from "@/assets/icons/career-design.svg";
import manufactureIcon from "@/assets/icons/career-manufacture.svg";
import missionIcon from "@/assets/icons/career-mission.svg";
import gridLines from "@/assets/icons/grid-lines-careers.svg";
import Button from "@/components/ui/Button";

import styles from "../css/Careers.module.css";
import CareerCard from "./CareerCard";

const STAGES = [
  {
    title: "Design",
    icon: designIcon,
    text: "Every satellite, payload, and subsystem starts with a blank sheet and a complex challenge. We encourage open brainstorming, pushing engineering boundaries, and turning theoretical space concepts into practical blueprints.",
  },
  {
    title: "Manufacture",
    icon: manufactureIcon,
    text: "This is where our 80% vertical integration comes alive. Under one roof, our engineers, technicians, and designers machine, integrate, and rigorously test hardware to space-grade standards.",
  },
  {
    title: "Mission",
    icon: missionIcon,
    text: "Seeing hardware leave the cleanroom to a satellite in Low Earth Orbit. Your code, your design, or your manufactured component scales up to support global missions.",
  },
];

/** Figma: Frame 1410156143 (3035:14510); mobile 3035:13141. */
export default function Careers() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="careers-heading"
      className={styles.section}
    >
      <Image src={gridLines} alt="" className={styles.lines} />
      <div className="container">
        <div className={styles.header}>
          <h2
            id="careers-heading"
            className={`heading-2 heading-2-md text-trim-cap ${styles.title}`}
          >
            Build the future of space hardware
          </h2>
          <p className={`text-2 text-1-md text-trim-cap ${styles.intro}`}>
            Join the team designing, building, and launching India&apos;s
            satellite manufacturing future from the factory floor to orbit.
          </p>
        </div>
        <ul className={styles.cards}>
          {STAGES.map((stage) => (
            <li key={stage.title}>
              <CareerCard {...stage} />
            </li>
          ))}
        </ul>
        <div className={styles.cta}>
          <Button
            variant="linkedin"
            href="https://www.linkedin.com/company/azista-space/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Openings
          </Button>
        </div>
      </div>
    </section>
  );
}
