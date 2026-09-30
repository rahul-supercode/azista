/**
 * Satellite platforms shown as tabs (Figma: Section-2). Only Azista 100 has
 * content in the design so far.
 * TODO: add description, specs and image for LEOS-50, 100HP Agile and
 * 100HP Heavy.
 */
export const platforms = [
  { id: "leos-50", name: "LEOS-50" },
  {
    id: "azista-100",
    name: "Azista 100",
    description:
      "Azista 100 is a modular, cost-effective micro-satellite bus engineered for rapid deployment and optimised for mass manufacturing. It's built on flight-proven subsystems and architecture. Configurable, modular design adapts to mission-specific payload needs",
    image: {
      src: "/assets/sb-satellite-platforms.png",
      alt: "The Azista 100 micro-satellite bus with a side-mounted solar panel and gold-foiled payload deck",
    },
    specs: [
      {
        label: "Core volume",
        value: "570 × 570 × 200 mm³ (+100 mm/side expandable)",
      },
      { label: "Mass", value: "50 kg" },
      {
        label: "Payload mass / volume",
        value: "15–30 kg / 570 × 570 × 400 mm³",
      },
      { label: "Pointing agility", value: "5°/s" },
      {
        label: "Comms",
        value: "S-band TT&C @ 2 Mbps; X-band downlink up to 1 Gbps (encrypted)",
      },
      {
        label: "Propulsion",
        value: "Electric propulsion option for extended missions",
      },
      { label: "Design life", value: "5 years LEO" },
    ],
  },
  { id: "100hp-agile", name: "100HP Agile" },
  { id: "100hp-heavy", name: "100HP Heavy" },
];

// The tab selected on load, as in the design.
export const defaultPlatformId = "azista-100";
