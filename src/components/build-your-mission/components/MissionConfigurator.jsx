"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import SelectField from "@/components/ui/SelectField";
import TextField from "@/components/ui/TextField";

import styles from "../css/MissionConfigurator.module.css";
import {
  defaultMission,
  missionBrief,
  orbits,
  payloadTypes,
  payloadVolumes,
  subsystems,
} from "../data/mission";
import SatellitePreview from "./SatellitePreview";

gsap.registerPlugin(ScrollTrigger);

function readMission(form) {
  const data = new FormData(form);
  return {
    ...Object.fromEntries(data),
    subsystems: data.getAll("subsystems"),
  };
}

/**
 * Figma: Build your mission (3035:18444). The requirements form, with a
 * preview that redraws as it's filled in. On desktop the preview stays pinned
 * beside the form. Submitting hands a brief of the mission to Contact.
 */
export default function MissionConfigurator({ heading }) {
  const router = useRouter();
  const [mission, setMission] = useState(defaultMission);
  const layoutRef = useRef(null);
  const previewRef = useRef(null);

  // `position: sticky` can't work inside ScrollSmoother, so pin instead.
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 1280px)", () => {
      ScrollTrigger.create({
        trigger: previewRef.current,
        start: "top top",
        endTrigger: layoutRef.current,
        end: () => `bottom top+=${previewRef.current.offsetHeight}`,
        pin: true,
        pinSpacing: false,
      });
    });
    return () => media.revert();
  });

  function onSubmit(event) {
    event.preventDefault();
    const brief = missionBrief(readMission(event.currentTarget));
    router.push(`/contact?mission=${encodeURIComponent(brief)}`);
  }

  return (
    <div ref={layoutRef} className={styles.layout}>
      <div ref={previewRef} className={styles.preview}>
        <SatellitePreview
          mission={mission}
          animate={mission !== defaultMission}
        />
      </div>
      <div className={styles.heading}>{heading}</div>
      <form
        onSubmit={onSubmit}
        onChange={(event) => setMission(readMission(event.currentTarget))}
        aria-label="Mission requirements"
        className={styles.form}
      >
        <SelectField
          variant="stacked"
          label="Payload type"
          name="payloadType"
          placeholder="Your payload's type"
          options={payloadTypes}
          defaultValue={defaultMission.payloadType}
          required
        />
        <TextField
          variant="stacked"
          label="Payload mass"
          name="payloadMass"
          type="number"
          inputMode="decimal"
          min="0.1"
          step="0.1"
          unit="kg"
          defaultValue={defaultMission.payloadMass}
          required
        />
        <SelectField
          variant="stacked"
          label="Payload volume"
          name="payloadVolume"
          options={payloadVolumes}
          defaultValue={defaultMission.payloadVolume}
          required
        />
        <fieldset className={styles.subsystems}>
          <legend className={`text-1 text-trim-cap ${styles.legend}`}>
            Select your subsystems
          </legend>
          <div className={styles.checkboxes}>
            {subsystems.map(({ value, label }) => (
              <Checkbox
                key={value}
                label={label}
                name="subsystems"
                value={value}
              />
            ))}
          </div>
        </fieldset>
        <SelectField
          variant="stacked"
          label="Orbit"
          name="orbit"
          options={orbits}
          defaultValue={defaultMission.orbit}
          required
        />
        <TextField
          variant="stacked"
          label="Mission life"
          name="missionLife"
          type="number"
          inputMode="numeric"
          min="1"
          max="30"
          unit="years"
          defaultValue={defaultMission.missionLife}
          required
        />
        <Button type="submit" className={styles.submit}>
          Discuss this mission
        </Button>
      </form>
    </div>
  );
}
