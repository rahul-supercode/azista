/**
 * Satellite structure accordion (Figma: Section-4). Only Solar Panel – FR4
 * has content in the design so far.
 * TODO: add content (and images, if they differ) for Aluminium Honeycomb and
 * Solar Panel – CFRP.
 */
export const structures = [
  { id: "aluminium-honeycomb", name: "Aluminium Honeycomb" },
  { id: "solar-panel-cfrp", name: "Solar Panel – CFRP" },
  {
    id: "solar-panel-fr4",
    name: "Solar Panel – FR4",
    title: "Configurable FR4-PCB solar panels for 1U–16U CubeSats.",
    description:
      "Azista's FR4-PCB solar panels are high-performance, configurable power-generation panels for CubeSat platforms from 1U to 16U, fully customisable in dimensions, shape and layout, with body-mounted or deployable options.",
    features: [
      "1U to 16U and fully custom platforms",
      "Body-mounted or deployable array configurations",
      "Built-in bypass diodes with reverse-bias protection",
      "Custom PV string wiring — series or parallel",
      "ECSS-E-ST-20-08C manufacturing compliance, ECSS-E-ST-10-03C qualification testing",
    ],
  },
];

// Open on load, as in the design.
export const defaultStructureId = "solar-panel-fr4";

export const structureImage = {
  src: "/assets/sb-structure-fr4.webp",
  alt: "Azista FR4-PCB CubeSat solar panel with two rows of solar cells",
};
