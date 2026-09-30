/**
 * Header navigation. An item is either a link (`href`) or a dropdown (`items`).
 */
export const mainNav = [
  { label: "Missions", href: "/missions" },
  {
    label: "EO payloads",
    items: [
      { label: "Fineview", href: "/eo-payloads/fineview" },
      { label: "Vista", href: "/eo-payloads/vista" },
    ],
  },
  {
    label: "Satellite Bus",
    items: [
      { label: "Overview", href: "/satellite-bus" },
      { label: "Subsystems", href: "/satellite-bus/subsystems" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const headerCta = {
  label: "Build Your Mission",
  href: "/build-your-mission",
};
