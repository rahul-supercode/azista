import Image from "next/image";

import Button from "@/components/ui/Button";

import styles from "../css/News.module.css";

// TODO: link each story to its article once the URLs are known.
const STORIES = [
  {
    title:
      "Why is an Indian satellite capturing photos of the ISS being seen as a technical milestone?",
    image: "/assets/news/indian-satellite-iss.jpg",
    imageAlt: "The Moon, half lit, against a black sky",
  },
  {
    title:
      "IN-SPACe selects Azista Space and two others for satellite bus plan",
    image: "/assets/news/in-space-satellite-bus.jpg",
    imageAlt: "Render of a gold-foiled satellite with solar arrays above Earth",
  },
  {
    title:
      "Indian firm Azista demonstrates in-orbit satellite imaging tech: All about it",
    image: "/assets/news/in-orbit-imaging.jpg",
    imageAlt: "Grid of in-orbit images of a satellite captured from space",
  },
];

/** Figma: Frame 1410156741 (2977:11709). */
export default function News() {
  return (
    <section aria-labelledby="news-heading" className={styles.section}>
      <div className={`container ${styles.wrap}`}>
        <div className={styles.header}>
          <h2
            id="news-heading"
            className={`heading-3 heading-3-md text-trim-cap ${styles.heading}`}
          >
            Azista in the news
          </h2>
          <Button variant="link" href="/events-news" className={styles.viewAll}>
            View all
          </Button>
        </div>
        <div className={styles.grid}>
          {STORIES.map((story) => (
            <article key={story.title} className={styles.story}>
              <div className={styles.media}>
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={styles.image}
                />
              </div>
              <h3 className={`text-1 text-1-md text-trim-cap ${styles.title}`}>
                {story.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
