// TODO: add content for Aluminium Honeycomb and Solar Panel – CFRP.
export const structures = [
  {
    id: "aluminium-honeycomb",
    name: "Aluminium Honeycomb",

    description:
      "Aluminium-honeycomb sandwich panels form the primary and secondary structure on Azista's satellite buses, lightweight, stiff platforms for the payload deck, side panels and solar-array substrates.",
  },
  {
    id: "solar-panel-cfrp",
    name: "Solar Panel – CFRP",
    title: "A CFRP-FR4 hybrid substrate for stiffer, lighter panels.",
    description:
      "The CFRP-FR4 hybrid variant swaps in a carbon-fibre substrate for missions that need a stiffer, lighter panel, with the same configurable layout, protection and qualification pedigree as the FR4 line, built for the same 1U–16U and custom platforms.",
    features: [
      "CFRP-FR4 hybrid substrate for higher stiffness-to-mass ratio",
      "Same customisation, diode protection and wiring options as the FR4 line",
      "Cut-outs available for temperature sensors or other custom hardware",
      "ECSS-E-ST-20-08C manufacturing compliance, ECSS-E-ST-10-03C qualification testing",
    ],
  },
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

export const defaultStructureId = "solar-panel-fr4";

export const structureImage = {
  src: "/assets/sb-structure-fr4.webp",
  alt: "Azista FR4-PCB CubeSat solar panel with two rows of solar cells",
};
