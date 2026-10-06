import Image from "next/image";
import Link from "next/link";

import chevron from "@/assets/icons/chevron-right.svg";
import divider from "@/assets/icons/divider-vertical.svg";

import styles from "../css/Banner.module.css";

const FEATURED = {
  image: "/assets/events-news/world-satellite.png",
  alt: "World Satellite Business Week (WSBW) — 9th Bengaluru Space Expo 2026",
  date: "Sep 7-9",
  place: "BIEC, Bengaluru",
  booth: "D7",
  title: "World Satellite Business Week (WSBW)",
  href: "/contact",
};

const NEWS = [
  {
    image: "/assets/events-news/afr-satellite.png",
    alt: "India's Longest Serving Private EO Satellite — AFR Turns 3!",
    headline: "AFR Satellite Completes 3 Years in Orbit and Counting!",
  },
  {
    image: "/assets/events-news/space-based.png",
    alt: "Space-Based Disaster Monitoring: Satellite Insights from AFR",
    headline: "Space-Based Disaster Monitoring: Satellite Insights from AFR!",
  },
];

/** Figma: Events & News — Featured Updates. */
export default function Banner() {
  return (
    <section
      aria-labelledby="featured-updates-heading"
      className={styles.section}
    >
      <div className="container">
        <h1
          id="featured-updates-heading"
          className={`heading-2 heading-2-md text-trim-cap ${styles.title}`}
        >
          Featured Updates
        </h1>
        <div className={styles.grid}>
          <article className={styles.featured}>
            <div className={styles.featuredMedia}>
              <Image
                src={FEATURED.image}
                alt={FEATURED.alt}
                fill
                sizes="(min-width: 1280px) 44vw, 100vw"
                className={styles.featuredImage}
              />
            </div>
            <div className={`text-1 text-1-md text-trim-cap ${styles.meta}`}>
              <span>
                <Image
                  src="/assets/calender.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                {FEATURED.date}
              </span>
              <Image src={divider} alt="" className={styles.metaDivider} />
              <span>
                <Image
                  src="/assets/location.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                {FEATURED.place}
              </span>
              <Image src={divider} alt="" className={styles.metaDivider} />
              <span>
                <Image
                  src="/assets/building.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                {FEATURED.booth}
              </span>
            </div>
            <div className={styles.featuredFooter}>
              <p
                className={`text-2 text-1-md text-trim-cap ${styles.featuredTitle}`}
              >
                {FEATURED.title}
              </p>
              <Link
                href={FEATURED.href}
                className={`text-1-md text-trim-cap ${styles.register}`}
              >
                Register now
                <Image src={chevron} alt="" />
              </Link>
            </div>
          </article>

          <ul className={styles.news}>
            {NEWS.map((item) => (
              <li key={item.headline} className={styles.newsItem}>
                <div className={styles.newsMedia}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1280px) 20vw, 45vw"
                    className={styles.newsImage}
                  />
                </div>
                <div className={styles.newsBody}>
                  <span
                    className={`text-5 text-4-md text-trim-cap ${styles.tag}`}
                  >
                    News
                  </span>
                  <p
                    className={`text-2 text-1-md text-trim-cap ${styles.headline}`}
                  >
                    {item.headline}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
