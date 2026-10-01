import Image from "next/image";

import crosshair from "@/assets/icons/crosshair.svg";
import gridLines from "@/assets/icons/grid-lines-story.svg";

import styles from "../css/Story.module.css";

const PRINCIPLES = [
  {
    title: "Our Vision:",
    text: "Reliable, Affordable hardware that scales with every mission.",
  },
  {
    title: "Our Mission:",
    text: "To be the manufacturer organisations build with, from their first mission to large-scale satellite deployment.",
  },
];

/** Figma: Frame 1410156044 (3035:14336). */
export default function Story() {
  return (
    <section aria-label="Our story" className={styles.section}>
      <Image src={gridLines} alt="" className={styles.lines} />
      <div className={`container ${styles.content}`}>
        <div className={styles.statements}>
          <p className={`text-3 text-trim-cap ${styles.lead}`}>
            We didn&apos;t start in space. We started in manufacturing:
            precision engineering, at scale.
          </p>
          <p className="text-3 text-trim-cap">
            When we looked at the space ecosystem, the gap wasn&apos;t ambition.
            It was supply chain. It needed manufacturers who could build
            reliably, affordably, and at scale. So, we became one.
          </p>
          <p className="text-3 text-trim-cap">
            Today, we&apos;re 80% vertically integrated. We engineer,
            manufacture, integrate, and test under one roof, applying the same
            manufacturing discipline we started with to the space industry. From
            a single instrument to an entire satellite constellation, we build
            hardware organisations can rely on to scale with confidence.
          </p>
        </div>
        <ul className={styles.principles}>
          {PRINCIPLES.map(({ title, text }) => (
            <li key={title} className={styles.principle}>
              <h2 className={`heading-3 text-trim-cap ${styles.title}`}>
                <Image src={crosshair} alt="" />
                {title}
              </h2>
              <p className={`text-2 text-trim-cap ${styles.text}`}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
