// TODO: add description, specs and image for LEOS-50, 100HP Agile and 100HP Heavy.
export const platforms = [
  {
    id: "leos-50",
    name: "LEOS-50",
    description:
      "50 kg-class LEO bus built for Earth observation, communications, remote sensing and defense applications. Built to scale.",
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
  {
    id: "100hp-agile",
    name: "100HP Agile",
    description:
      "High-performance agile micro-satellite bus engineered for rapid maneuvering, high-resolution imaging payloads, and responsive space missions.",
    image: {
      src: "/assets/sb-satellite-platforms.png",
      alt: "The Azista 100 micro-satellite bus with a side-mounted solar panel and gold-foiled payload deck",
    },
    specs: [
      {
        label: "Core volume",
        value:
          "Modular configuration optimised for high-agility optical and sensor payloads.",
      },
      { label: "Mass", value: "100HP-class platform." },
      {
        label: "Payload mass / volume",
        value: "130 kg.",
      },
      {
        label: "Pointing agility",
        value:
          "High-torque agile control architecture for rapid target acquisition.",
      },
      {
        label: "Comms",
        value: "S-band TT&C; high-rate X-band downlink (encrypted).",
      },
      {
        label: "Power Generation:",
        value:
          "High-capacity solar generation to support demanding payload operations.",
      },
      { label: "Design life", value: "5+ years LEO." },
    ],
  },
  {
    id: "100hp-heavy",
    name: "100HP Heavy",
    description:
      "A high-capacity heavy-class satellite bus designed to carry large-scale instruments, multi-sensor payloads, and demanding power systems for strategic missions.",
    image: {
      src: "/assets/sb-satellite-platforms.png",
      alt: "The Azista 100 micro-satellite bus with a side-mounted solar panel and gold-foiled payload deck",
    },
    specs: [
      {
        label: "Core volume",
        value:
          "Expanded structural volume to accommodate large optical assemblies and heavy payloads.",
      },
      { label: "Mass", value: "Heavy-class platform architecture." },
      {
        label: "Payload mass / volume",
        value: " 250 kg.",
      },
      {
        label: "Pointing agility",
        value:
          "Precision attitude control optimized for heavy payload inertia.",
      },
      {
        label: "Comms",
        value:
          "Advanced S-band TT&C and multi-channel high-rate X-band downlinks.",
      },
      {
        label: "Power Generation:",
        value:
          "High-power generation array designed for heavy-load continuous operations.",
      },
      { label: "Design life", value: "5+ years LEO" },
    ],
  },
];

export const defaultPlatformId = "azista-100";
