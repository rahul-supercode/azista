import { intro, lastUpdated, sections, title } from "../data/corporateCompliance";
import styles from "../css/CorporateComplianceContent.module.css";

function renderBlock(block, index) {
  if (block.type === "ol") {
    return (
      <ol key={index} className={styles.list}>
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex} className={`text-1 text-1-md ${styles.item}`}>
            <span>
              <strong className={styles.itemLabel}>{item.label}:</strong>{" "}
              {item.text}
            </span>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <p key={index} className={`text-1 text-1-md ${styles.paragraph}`}>
      {block.text}
    </p>
  );
}

/** Figma: Corporate & Compliance Information. */
export default function CorporateComplianceContent() {
  return (
    <section
      aria-labelledby="corporate-compliance-heading"
      className={styles.section}
    >
      <div className={`container ${styles.innerSection}`}>
        <div className={styles.header}>
          <h1
            id="corporate-compliance-heading"
            className={`heading-2 heading-2-md text-trim-cap ${styles.title}`}
          >
            {title}
          </h1>
          <p className="text-1 text-1-md text-trim-cap">
            <span className={styles.updated}>Last Updated: </span>
            <span className={styles.updatedDate}>{lastUpdated}</span>
          </p>
        </div>

        <span aria-hidden="true" className={styles.divider} />

        <div className={styles.intro}>
          {intro.map((paragraph, index) => (
            <p key={index} className="text-1 text-1-md">
              {paragraph}
            </p>
          ))}
        </div>

        {sections.map((section) => (
          <div key={section.id} className={styles.block}>
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