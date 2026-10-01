import Image from "next/image";

import minus from "@/assets/icons/accordion-minus.svg";
import plus from "@/assets/icons/accordion-plus.svg";
import bulletTriangle from "@/assets/icons/bullet-triangle.svg";

import styles from "../css/SatelliteStructure.module.css";
import {
  defaultStructureId,
  structureImage,
  structures,
} from "../data/structures";

/** Figma: Section-4 (2977:16276). */
export default function SatelliteStructure() {
  return (
    <section
      id="structures"
      aria-labelledby="structures-heading"
      className={styles.section}
    >
      <div className="container">
        <h2
          id="structures-heading"
          className={`heading-2 heading-2-md text-trim-cap ${styles.title}`}
        >
          Satellite Structure
        </h2>
        <div className={styles.layout}>
          <div className={styles.media}>
            <Image
              src={structureImage.src}
              alt={structureImage.alt}
              fill
              sizes="(min-width: 1280px) 37vw, (min-width: 768px) 556px, 100vw"
              className={styles.image}
            />
          </div>
          <div className={styles.accordion}>
            {structures.map((item) => (
              <details
                key={item.id}
                name="satellite-structure"
                open={item.id === defaultStructureId}
                className={styles.item}
              >
                <summary className={styles.summary}>
                  <span
                    className={`text-2 text-1-md text-trim-cap ${styles.name}`}
                  >
                    {item.name}
                  </span>
                  <span aria-hidden="true" className={styles.icon}>
                    <Image src={plus} alt="" className={styles.plus} />
                    <Image src={minus} alt="" className={styles.minus} />
                  </span>
                </summary>
                <div className={styles.content}>
                  {item.title && (
                    <h3 className={`text-6 text-1-md ${styles.itemTitle}`}>
                      {item.title}
                    </h3>
                  )}
                  <p
                    className={`text-1 text-1-md text-trim-cap ${styles.description}`}
                  >
                    {item.description ??
                      `Details for ${item.name} are coming soon.`}
                  </p>
                  {item.features && (
                    <ul className={styles.features}>
                      {item.features.map((feature) => (
                        <li key={feature} className="text-1">
                          <Image src={bulletTriangle} alt="" />
                          <span className={"text-1-md text-trim-cap"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
