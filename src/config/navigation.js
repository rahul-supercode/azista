const eoPayloadLinks = [
  { label: "Fineview Series", href: "/eo-payloads/fineview" },
  { label: "Vista Series", href: "/eo-payloads/vista" },
];

const satelliteBusLinks = [
  { label: "Platform", href: "/satellite-bus" },
  { label: "Subsystems", href: "/satellite-bus/subsystems" },
  { label: "Structures", href: "/satellite-bus/structures" },
];

/**
 * Header navigation. An item is a link (`href`), optionally with a dropdown
 * (`items`).
 */
export const mainNav = [
  { label: "Missions", href: "/missions" },
  { label: "EO payloads", href: "/eo-payloads", items: eoPayloadLinks },
  { label: "Satellite Bus", href: "/satellite-bus", items: satelliteBusLinks },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const headerCta = {
  label: "Build Your Mission",
  href: "/build-your-mission",
};

/** Footer link columns (Figma: Group 1000011438). */
export const footerNav = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "News & Events", href: "/events-news" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  { title: "EO Payloads", links: eoPayloadLinks },
  { title: "Satellite Bus", links: satelliteBusLinks },
  {
    title: "Missions",
    links: [
      { label: "Missions", href: "/missions" },
      { label: "Start your mission", href: "/build-your-mission" },
    ],
  },
];

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  {
    label: "Corporate & Compliance Information",
    href: "/corporate-compliance",
  },
];

// TODO: add the real profile URLs; until then the icons show but aren't links.
export const socialLinks = [
  { label: "LinkedIn", icon: "linkedin", href: null },
  { label: "YouTube", icon: "youtube", href: null },
];
