import { intro, lastUpdated, sections } from "../data/privacy";
import styles from "../css/PrivacyContent.module.css";

function renderBlock(block, index) {
  switch (block.type) {
    case "list":
      return (
        <ul key={index} className={styles.list}>
          {block.items.map((item) => (
            <li key={item.label} className={`text-1 text-1-md ${styles.item}`}>
              <strong className={styles.itemLabel}>{item.label}</strong>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      );

    case "sub":
      return (
        <div key={index} className={styles.sub}>
          <h3 className={`text-1 text-1-md ${styles.subTitle}`}>
            {block.title}
          </h3>
          <p className="text-1 text-1-md">{block.text}</p>
        </div>
      );

    default:
      return (
        <p key={index} className={`text-1 text-1-md ${styles.paragraph}`}>
          {block.text}
        </p>
      );
  }
}

/** Figma: Privacy Policy. */
export default function PrivacyContent() {
  return (
    <section aria-labelledby="privacy-heading" className={styles.section}>
      <div className={`container ${styles.innerSection}`}>
        <div className={styles.header}>
          <h1
            id="privacy-heading"
            className={`heading-2 heading-2-md text-trim-cap ${styles.title}`}
          >
            Privacy Policy
          </h1>
          <p className="text-1 text-1-md text-trim-cap">
            <span className={styles.updated}>Last Updated: </span>
            <span className={styles.updatedDate}>{lastUpdated}</span>
          </p>
        </div>

        <span aria-hidden="true" className={styles.divider} />

        <p className={`text-1 text-1-md ${styles.intro}`}>
          {intro.before}
          <a
            href={intro.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {intro.linkText}
          </a>
          {intro.after}
        </p>

        {sections.map((section) => (
          <div key={section.title} className={styles.block}>
            <h2 className={`text-2 text-1-md ${styles.blockTitle}`}>
              {section.title}
            </h2>
            <div className={styles.blockBody}>
              {section.blocks.map(renderBlock)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
