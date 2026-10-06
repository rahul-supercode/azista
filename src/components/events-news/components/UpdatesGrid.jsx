"use client";

import Image from "next/image";
import { useState } from "react";

import chevronDown from "@/assets/icons/chevron-down.svg";
import Tabs from "@/components/ui/Tabs";

import styles from "../css/UpdatesGrid.module.css";
import { events, news } from "../data/updates";

function EventCard({ event }) {
  return (
    <li className={styles.card}>
      <div className={styles.media}>
        <Image
          src={event.image}
          alt={event.alt}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 45vw, 100vw"
          className={styles.cardImage}
        />
      </div>
      <div className={`text-1 text-1-md text-trim-cap ${styles.meta}`}>
        <span>
          <Image src="/assets/calender.svg" alt="" width={18} height={18} />
          {event.dateRange}
        </span>
        <span className={styles.metaDivider} aria-hidden="true" />
        <span>
          <Image src="/assets/location.svg" alt="" width={18} height={18} />
          {event.location}
        </span>
      </div>
      <p className={`text-1 text-1-md text-trim-cap ${styles.cardTitle}`}>
        {event.title}
      </p>
    </li>
  );
}

function NewsCard({ item }) {
  return (
    <li className={styles.card}>
      <div className={styles.media}>
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 45vw, 100vw"
          className={styles.cardImage}
        />
      </div>
      <p className={`text-1 text-1-md text-trim-cap ${styles.cardTitle}`}>
        {item.title}
      </p>
    </li>
  );
}

// Desktop's grid is a fixed 6-up (3 columns × 2 rows); "View more" only
// makes sense there once a panel actually has more than that.
const DESKTOP_PAGE_SIZE = 6;

// `mobileLimit`: on mobile only, cards past this index stay in the grid
// (so desktop's multi-column layout isn't split across two <ul>s) but are
// hidden via CSS until "View more" is clicked. Desktop ignores this and
// only caps (and shows its own "View more") past DESKTOP_PAGE_SIZE.
function Panel({ items, render, mobileLimit }) {
  const [expanded, setExpanded] = useState(false);
  const cappedMobile = mobileLimit != null && items.length > mobileLimit;
  const cappedDesktop = items.length > DESKTOP_PAGE_SIZE;
  const showMobileButton = cappedMobile && !expanded;

  return (
    <>
      <ul
        className={`${styles.grid} ${cappedMobile ? styles.capped : ""} ${expanded ? styles.expanded : ""}`}
      >
        {items.map((item) => render(item))}
      </ul>
      {(showMobileButton || cappedDesktop) && (
        <button
          type="button"
          onClick={cappedMobile ? () => setExpanded(true) : undefined}
          className={`text-5 text-2-md text-trim-cap ${styles.viewMore} ${showMobileButton ? styles.viewMoreMobile : ""} ${cappedDesktop ? styles.viewMoreDesktop : ""}`}
        >
          View more
        </button>
      )}
    </>
  );
}

/** Figma: Events & News — Events/News tabbed grid. */
export default function UpdatesGrid() {
  const [activeId, setActiveId] = useState("events");

  const tabs = [
    {
      id: "events",
      label: "Events",
      panel: (
        <Panel
          items={events}
          render={(event) => <EventCard key={event.id} event={event} />}
          mobileLimit={4}
        />
      ),
    },
    {
      id: "news",
      label: "News",
      panel: (
        <Panel
          items={news}
          render={(item) => <NewsCard key={item.id} item={item} />}
        />
      ),
    },
  ];

  return (
    <section aria-label="Events and news" className={styles.section}>
      <div className="container">
        <Tabs
          label="Events or news"
          tabs={tabs}
          activeId={activeId}
          onChange={setActiveId}
          variant="toggle"
          toolbarExtra={
            activeId === "events" && (
              <button type="button" className={styles.filter}>
                Filter by month
                <Image src={chevronDown} alt="" />
              </button>
            )
          }
        />
      </div>
    </section>
  );
}
