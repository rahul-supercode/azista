import Image from "next/image";

import styles from "../css/AitCapabilities.module.css";

// TODO: replace this placeholder line with real EMI/EMC copy.
const EMI_PLACEHOLDER = "lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum";

const CAPABILITIES = [
  {
    id: "emi-emc",
    title: "EMI/EMC Testing",
    description:
      "Checks electronics for electromagnetic interference and compatibility",
    extra: EMI_PLACEHOLDER,
    image: "/assets/emi-testing.jpg",
    imageAlt:
      "An anechoic chamber lined with RF-absorbing foam, used for EMI/EMC testing",
  },
  {
    id: "thermal-vacuum",
    title: "Thermal-Vacuum Testing",
    description: "Tests systems in extreme temperature and vacuum conditions.",
  },
  {
    id: "vibration",
    title: "Vibration Testing",
    description: "Tests spacecraft strength against launch vibrations.",
  },
  {
    id: "adcs",
    title: "ADCS Test Setup",
    description: "Tests spacecraft pointing, control, stability, and accuracy.",
  },
];

/** Figma: Frame 1410156749 (3002:3). */
export default function AitCapabilities() {
  return (
    <section aria-labelledby="ait-heading" className={styles.section}>
      <div className={`container ${styles.layout}`}>
        <h2
          id="ait-heading"
          className={`heading-2 heading-2-md text-trim-cap ${styles.title}`}
        >
          Assembly, Integration &amp; Testing (AIT)
        </h2>
        <div className={styles.accordion}>
          {CAPABILITIES.map((item, index) => (
            <details
              key={item.id}
              name="ait-capabilities"
              open={index === 0}
              className={styles.item}
            >
              <summary className={styles.summary}>
                <h3 className={`text-6 text-5-md text-trim-cap ${styles.name}`}>
                  {item.title}
                </h3>
                <span aria-hidden="true" className={styles.icon}>
                  <Image
                    src="/assets/down-arrow.svg"
                    alt=""
                    width={42}
                    height={24}
                    className={styles.down}
                  />
                  <Image
                    src="/assets/up-arrow.svg"
                    alt=""
                    width={42}
                    height={24}
                    className={styles.up}
                  />
                </span>
              </summary>
              <div className={styles.content}>
                {item.image && (
                  <div className={styles.media}>
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 666px, 100vw"
                      className={styles.mediaImage}
                    />
                  </div>
                )}
                <p
                  className={`text-1 text-1-md text-trim-cap ${styles.description}`}
                >
                  {item.description}
                  {item.extra && (
                    <>
                      <br />
                      {item.extra}
                    </>
                  )}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
