import CornerFrame from "@/components/shared/components/CornerFrame";

import styles from "../css/ContactDetails.module.css";
import { inquiryContacts } from "../data/contact";

/** Figma: Corporate / Partnership inquiries (3035:20792–3035:20820). */
export default function ContactDetails() {
  return (
    <CornerFrame tone="small" className={styles.frame}>
      {inquiryContacts.map(({ title, email, phone }) => (
        <address key={title} className={styles.item}>
          <h2 className={`text-6 ${styles.title}`}>{title}</h2>
          <dl className={`text-1 ${styles.rows}`}>
            <div className={styles.row}>
              <dt className={`text-trim-cap ${styles.term}`}>Mail :</dt>
              <dd className="text-trim-cap">
                <a href={`mailto:${email}`} className={styles.link}>
                  {/* Wrap a long address before the @, not mid-word. */}
                  {email.split("@")[0]}
                  <wbr />@{email.split("@")[1]}
                </a>
              </dd>
            </div>
            <div className={styles.row}>
              <dt className={`text-trim-cap ${styles.term}`}>Phone :</dt>
              <dd className="text-trim-cap">
                <a
                  href={`tel:${phone.replaceAll(" ", "")}`}
                  className={styles.link}
                >
                  {phone}
                </a>
              </dd>
            </div>
          </dl>
        </address>
      ))}
    </CornerFrame>
  );
}
