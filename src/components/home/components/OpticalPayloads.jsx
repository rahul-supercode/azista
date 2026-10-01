import SectionHeader from "@/components/shared/components/SectionHeader";
import ShowcaseCarousel from "@/components/shared/components/ShowcaseCarousel";

import styles from "../css/OpticalPayloads.module.css";

// TODO: Vista's title and alt text are placeholders until its copy is final.
const PAYLOADS = [
  {
    label: "Fineview",
    title:
      "High-quality panchromatic and multispectral Earth observation payload",
    href: "/eo-payloads/fineview",
    image: "/assets/hp-optical-payloads.jpg",
    mobileImage: "/assets/fineview-md.png",
    imageAlt: "The gold-foiled Fineview optical payload on a test stand",
  },
  {
    label: "Vista",
    title: "Wide-swath optical payload for Earth observation",
    href: "/eo-payloads/vista",
    image: "/assets/hp-panorama.jpg",
    mobileImage: "/assets/mission-3-md.png",
    imageAlt: "Wireframe render of an Azista satellite structure",
    dark: true,
  },
];

/** Figma: section-4 (2938:7). */
export default function OpticalPayloads() {
  return (
    <section
      aria-labelledby="optical-payloads-heading"
      className={styles.section}
    >
      <SectionHeader id="optical-payloads-heading" title="Optical Payloads">
        High-resolution optical payloads engineered for Earth observation,
        delivering precise imagery and data from orbit.
      </SectionHeader>
      <ShowcaseCarousel label="Optical payloads" slides={PAYLOADS} />
    </section>
  );
}
