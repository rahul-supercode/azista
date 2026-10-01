import Image from "next/image";

import Button from "@/components/ui/Button";

import styles from "../css/April.module.css";

const IMAGES = [
  {
    src: "/assets/missions/april-1.jpg",
    alt: "Satellite image of green, forested islands and a coastal town",
  },
  {
    src: "/assets/missions/april-2.jpg",
    alt: "Satellite image of a harbour on a curved bay beside dry hills",
  },
  {
    src: "/assets/missions/april-3.jpg",
    alt: "Satellite image of a port with long breakwaters in deep blue water",
  },
  {
    src: "/assets/missions/april-4.jpg",
    alt: "Satellite image of a forested coastline and a sediment-filled bay",
  },
];

/** Figma: 5 (3002:1591). */
export default function April() {
  return (
    <section aria-labelledby="april-heading" className={styles.section}>
      <div className="container">
        <h2
          id="april-heading"
          className={`heading-2 heading-2-md text-trim-cap ${styles.heading}`}
        >
          Advanced Pixel Research &amp; Intelligence Lab (APRIL)
        </h2>
      </div>
      {/* The list runs twice so the strip loops seamlessly. */}
      <div className={styles.strip}>
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className={styles.track}
          >
            {IMAGES.map((image) => (
              <li key={image.src} className={styles.item}>
                <Image
                  src={image.src}
                  alt={copy === 0 ? image.alt : ""}
                  fill
                  sizes="(min-width: 1280px) 735px, 80vw"
                  className={styles.image}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className={`container ${styles.footer}`}>
        <p className={`text-2 text-1-md text-trim-cap ${styles.intro}`}>
          A research and intelligence lab focused on advancing Earth observation
          through advanced image processing, analytics, and data-driven
          intelligence.
        </p>
        <Button variant="framed" href="/april">
          Explore April
        </Button>
      </div>
    </section>
  );
}
