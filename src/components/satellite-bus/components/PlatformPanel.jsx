import Image from "next/image";

import bulletTriangle from "@/assets/icons/bullet-triangle.svg";
import ringDashed from "@/assets/icons/platform-ring-dashed.png";
import ringInner from "@/assets/icons/platform-ring-inner.svg";
import ringMiddle from "@/assets/icons/platform-ring-middle.svg";
import Button from "@/components/ui/Button";

import styles from "../css/PlatformPanel.module.css";

/** One platform tab: image over orbit rings, description, specs and CTA. */
export default function PlatformPanel({ platform }) {
  const { name, description, image, specs } = platform;

  return (
    <div className={styles.panel}>
      {image && (
        <div className={styles.media}>
          <div aria-hidden="true" className={styles.rings}>
            <Image src={ringDashed} alt="" className={styles.ringDashed} />
            <Image src={ringMiddle} alt="" className={styles.ringMiddle} />
            <Image src={ringInner} alt="" className={styles.ringInner} />
          </div>
          <div className={styles.imageSlot}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 430px, 85vw"
              className={styles.image}
            />
          </div>
        </div>
      )}
      <div className={styles.content}>
        <h3 className="sr-only">{name}</h3>
        <p className={`text-1 text-trim-cap ${styles.description}`}>
          {description ?? `Details for ${name} are coming soon.`}
        </p>
        {specs && (
          <dl className={styles.specs}>
            {specs.map((spec) => (
              <div key={spec.label} className={styles.spec}>
                <dt className={`text-5 ${styles.label}`}>
                  <Image src={bulletTriangle} alt="" />
                  <span>{spec.label}</span>
                </dt>
                <dd className={`text-5 ${styles.value}`}>{spec.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <Button variant="framed" href="/contact" className={styles.cta}>
          Contact our team
        </Button>
      </div>
    </div>
  );
}
