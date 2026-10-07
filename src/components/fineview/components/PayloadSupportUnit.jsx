import OrbitRings from "@/components/shared/components/OrbitRings";
import SpecTable from "@/components/shared/components/SpecTable";

import styles from "../css/PayloadSupportUnit.module.css";
import CroppedImage from "./CroppedImage";

const SPECS = [
  {
    label: "Input from payload",
    value: "Up to 10 Gbit/s raw; FPGA-defined LVDS, Camera Link, GigE, USB",
  },
  {
    label: "Processing",
    value:
      "Radiometric/geometric correction, TDI image stacking, JPEG(LS/2000)/PNG/PNM/FELICS, H.265 video compression",
  },
  { label: "Storage", value: "1 TB, 850 MB/s write speed" },
  {
    label: "Encryption",
    value:
      "128-bit AES-GCM, Diffie-Hellman RSA 3072-bit (longer keys on request)",
  },
  {
    label: "CCSDS compliance",
    value: "133.1-B-2, 355.0-B-1, 732.0-B-3, 131.0-B-3",
  },
  { label: "Mass", value: "53.0 × 139.8 × 194.6 mm³ / 985 ± 30 g" },
  { label: "Power consumption", value: "< 8 W average" },
  {
    label: "Radiation hardness",
    value: "20 krad (Heat & FOCM), 30 krad (DPU)",
  },
  { label: "Design life", value: "5 years LEO" },
];

/** Figma: Payload Support Unit (3035:16581). */
export default function PayloadSupportUnit() {
  return (
    <section
      data-bg="dark"
      aria-labelledby="payload-support-unit-heading"
      className={styles.section}
    >
      <div className={`container ${styles.layout}`}>
        <h2
          id="payload-support-unit-heading"
          className={`heading-2 heading-2-md text-trim-cap ${styles.title}`}
        >
          Payload <br />
          Support Unit
        </h2>
        <div className={`text-1 text-1-md ${styles.intro}`}>
          <p className="text-trim-cap">
            The onboard compute, storage, and encryption stack behind every
            payload.
          </p>
          <p className="text-trim-cap">
            The Payload Support Unit is Azista’s onboard electronics for
            operating a payload and receiving, storing, processing, and
            compressing its data, including encryption, a CCSDS engine, payload
            thermal control, and focus-mechanism operation.
          </p>
        </div>
        <div className={styles.media}>
          <OrbitRings
            sizes="(min-width: 768px) 403px, 75vw"
            className={styles.rings}
          />
          <CroppedImage
            src="/assets/fineview/payload-support-unit.webp"
            alt="The Payload Support Unit: a black electronics enclosure with a green circuit board and D-sub connectors"
            width={1536}
            height={1024}
            frame={[429, 233]}
            crop={[-3.56, -17.24, 106.19, 130.6]}
            mobileCrop={[16.44, -8.24, 67.19, 113.6]}
            className={styles.unit}
          />
        </div>
        <SpecTable specs={SPECS} mobileLimit={4} className={styles.specs} />
      </div>
    </section>
  );
}
