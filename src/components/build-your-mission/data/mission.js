// TODO: confirm the option lists with Azista.
export const payloadTypes = [
  { value: "eo-optical", label: "EO optical imaging", short: "EO" },
  {
    value: "hyperspectral",
    label: "Hyperspectral imaging",
    short: "hyperspectral",
  },
  { value: "sar", label: "Synthetic aperture radar (SAR)", short: "SAR" },
  { value: "communications", label: "Communications", short: "communications" },
  { value: "iot-ais", label: "IoT / AIS", short: "IoT" },
  {
    value: "technology-demo",
    label: "Technology demonstration",
    short: "tech demo",
  },
];

export const payloadVolumes = ["1U", "1.5U", "2U", "3U", "6U", "12U"].map(
  (volume) => ({ value: volume, label: volume }),
);

export const orbits = [
  { value: "sso", label: "SSO" },
  { value: "leo", label: "LEO" },
  { value: "polar", label: "Polar" },
  { value: "equatorial", label: "Equatorial LEO" },
];

/** In the order the Figma grid lays them out (three per row). */
export const subsystems = [
  { value: "cdh", label: "CDH", image: "/assets/subsystems/cdhs.webp" },
  {
    value: "x-band-transmitter",
    label: "X-Band Transmitter",
    image: "/assets/subsystems/xtx.webp",
  },
  {
    value: "battery",
    label: "Battery",
    image: "/assets/subsystems/battery.webp",
  },
  { value: "rwa", label: "RWA", image: "/assets/subsystems/rwa.webp" },
  { value: "pcu", label: "PCU", image: "/assets/subsystems/pcu.webp" },
];

export const defaultMission = {
  payloadType: "",
  payloadMass: "80",
  payloadVolume: "1.5U",
  subsystems: [],
  orbit: "sso",
  missionLife: "5",
};

/**
 * Buses the preview picks from, smallest first: the first one that carries
 * the payload's mass and volume. `scale` sizes the render against the panel.
 * TODO: replace the placeholder limits with Azista's figures, and give each
 * bus its own render (they all reuse the Figma one for now).
 */
const buses = [
  { name: "LEOS-50", maxMass: 15, maxVolume: 2, scale: 0.72 },
  { name: "Azista 100", maxMass: 30, maxVolume: 3, scale: 0.86 },
  { name: "100HP Agile", maxMass: 100, maxVolume: 6, scale: 1 },
  { name: "100HP Heavy", maxMass: Infinity, maxVolume: Infinity, scale: 1.1 },
].map((bus) => ({
  ...bus,
  image: "/assets/build-your-mission/custom-satellite.png",
}));

const labelOf = (options, value) =>
  options.find((option) => option.value === value)?.label;

export function pickBus({ payloadMass, payloadVolume }) {
  const mass = Number(payloadMass) || 0;
  const volume = parseFloat(payloadVolume) || 0;
  return buses.find((bus) => mass <= bus.maxMass && volume <= bus.maxVolume);
}

/** "Custom EO satellite", or "Custom satellite" before a payload is chosen. */
export function missionTitle({ payloadType }) {
  const type = payloadTypes.find((option) => option.value === payloadType);
  return type ? `Custom ${type.short} satellite` : "Custom satellite";
}

/** "100HP Agile bus · 1.5U · SSO · 5-year life" */
export function missionSummary(mission) {
  return [
    `${pickBus(mission).name} bus`,
    mission.payloadVolume,
    labelOf(orbits, mission.orbit),
    mission.missionLife && `${mission.missionLife}-year life`,
  ]
    .filter(Boolean)
    .join(" · ");
}

/** Plain-text brief handed to the Contact form. */
export function missionBrief(mission) {
  const chosen = subsystems
    .filter(({ value }) => mission.subsystems.includes(value))
    .map(({ label }) => label);

  return [
    "Mission requirements",
    `Payload type: ${labelOf(payloadTypes, mission.payloadType) ?? "Not set"}`,
    `Payload mass: ${mission.payloadMass || "Not set"} kg`,
    `Payload volume: ${mission.payloadVolume}`,
    `Subsystems: ${chosen.join(", ") || "None selected"}`,
    `Orbit: ${labelOf(orbits, mission.orbit)}`,
    `Mission life: ${mission.missionLife || "Not set"} years`,
    `Suggested bus: ${pickBus(mission).name}`,
  ].join("\n");
}
