/**
 * Subsystem cards (Figma: Section-3). Images are the Figma tiles (product and
 * shadow on transparent, background in CSS) exported at 2×.
 * TODO: add `datasheet` URLs; the request form downloads it once submitted.
 * TODO: Payload Power & Data Handling reuses the PCDU photo, as in Figma.
 */
export const subsystems = [
  {
    name: "Battery",
    description:
      "A modular Li-FePO4 battery block built for a 5-year LEO life.",
    image: "/assets/subsystems/battery.webp",
    alt: "Azista battery module: a blue circuit board with a header connector along the top",
  },
  {
    name: "Power Control Unit",
    description: "Flight-proven power regulation and distribution.",
    image: "/assets/subsystems/pcu.webp",
    alt: "Azista power control unit: a black stacked enclosure lined with D-sub connectors",
  },
  {
    name: "Power Control & Distribution Unit",
    description:
      "The high-power evolution of the PCU-110 line, sized for 1.5 kW-class buses.",
    image: "/assets/subsystems/pcdu.webp",
    alt: "Azista power control and distribution unit: a tall black modular stack",
  },
  {
    name: "Payload Power & Data Handling",
    description: "A sophisticated payload power and data handling unit",
    image: "/assets/subsystems/ppdh.webp",
    alt: "Azista payload power and data handling unit: a tall black modular stack",
  },
  {
    name: "Baseband Data Handling Unit",
    description:
      "End-to-end payload data management unit delivering high-capacity storage",
    image: "/assets/subsystems/bdhu.webp",
    alt: "Azista baseband data handling unit: a flat black enclosure with a green interface board",
  },
  {
    name: "Command & Data Handling System",
    description:
      "The satellite's central processing system, pairing two integrated computers",
    image: "/assets/subsystems/cdhs.webp",
    alt: "Azista command and data handling system: a black layered enclosure with connectors",
  },
  {
    name: "Reaction Wheel Assembly",
    description:
      "RWA05 is Azista's reaction wheel assembly for satellite attitude control,",
    image: "/assets/subsystems/rwa.webp",
    alt: "Azista RWA05 reaction wheel with a spoked flywheel on a black mounting ring",
  },
  {
    name: "X-Band Transmitter",
    description:
      "Module designed for missions that need very high data throughput.",
    image: "/assets/subsystems/xtx.webp",
    alt: "Azista X-band transmitter: a gold-plated module with an RF connector",
  },
  {
    name: "S-Band TT&C",
    description:
      "The telemetry, tracking, and command link built into Azista's LEOS-class buses",
    image: "/assets/subsystems/sttc.webp",
    alt: "Azista S-band TT&C board: a green circuit board with a shielded RF section",
  },
  {
    name: "X-Band Patch Antenna",
    description:
      "Azista's X-Band Transmitter, radiating the high-rate downlink signal",
    image: "/assets/subsystems/xpatch.webp",
    alt: "Azista X-band patch antenna: a flat aluminium module with a D-sub connector",
  },
  {
    name: "S-Band Patch Antenna",
    description:
      "An S-band patch antenna typically pairs with the bus's S-band TT&C radio,",
    image: "/assets/subsystems/spatch.webp",
    alt: "Azista S-band patch antenna board: a green circuit board with a shielded section",
  },
];
