import Image from "next/image";

import styles from "../css/ContactIntro.module.css";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

/** Figma: Contact Us (3035:20758), heading, form and inquiry contacts. */
export default function ContactIntro() {
  return (
    <section aria-labelledby="contact-heading" className={styles.section}>
      <div className={`container ${styles.layout}`}>
        <h1
          id="contact-heading"
          className={`heading-2 text-trim-cap ${styles.heading}`}
        >
          Tell us what you’re building, <br className={styles.break} />
          and we’ll help you build it.
        </h1>
        <div className={styles.form}>
          <ContactForm />
        </div>
        <div className={styles.media}>
          <Image
            src="/assets/contact/contact-cleanroom.jpg"
            alt="Engineers in cleanroom suits assembling a satellite"
            fill
            preload
            sizes="(min-width: 1280px) 39vw, 100vw"
            className={styles.image}
          />
        </div>
        <div className={styles.details}>
          <ContactDetails />
        </div>
      </div>
    </section>
  );
}
