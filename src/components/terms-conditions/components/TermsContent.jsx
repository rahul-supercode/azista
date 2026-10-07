import { intro, lastUpdated, termsOfUse } from "../data/terms";
import styles from "../css/TermsContent.module.css";

/** Figma: Terms & Conditions. */
export default function TermsContent() {
  return (
    <section aria-labelledby="terms-heading" className={styles.section}>
      <div className={`container ${styles.innerSection}`}>
        <div className={styles.header}>
          <h1
            id="terms-heading"
            className={`heading-2 heading-2-md text-trim-cap ${styles.title}`}
          >
            Terms &amp; Conditions
          </h1>
          <p className={`text-1 text-1-md text-trim-cap `}>
            <span className={styles.updated}>Last Updated: </span>
            <span className={styles.updatedDate}>{lastUpdated}</span>
          </p>
        </div>

        <span aria-hidden="true" className={styles.divider} />

        <div className={styles.intro}>
          {intro.map((paragraph, index) => (
            <p key={index} className="text-1 text-1-md text-trim-cap">
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.block}>
          <h2 className={`text-2 text-1-md text-trim-cap ${styles.blockTitle}`}>
            {termsOfUse.title}
          </h2>
          <p className={`text-1 text-1-md text-trim-cap ${styles.blockIntro}`}>
            {termsOfUse.intro}
          </p>
          <ol className={styles.list}>
            {termsOfUse.items.map((item, index) => (
              <li key={index} className={`text-1 text-1-md ${styles.item}`}>
                <span className="text-trim-cap">
                  <strong className={styles.itemLabel}>{item.label}:</strong>{" "}
                  {item.text}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
