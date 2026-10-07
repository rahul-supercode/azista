// TODO: replace the placeholder descriptions and add `datasheet` URLs.
const PLACEHOLDER =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";

/**
 * `media` reproduces the Figma crop: `frame` is the slot's bounding box,
 * `box` the (optionally rotated) clipping box inside it, and `crop` the
 * image's left/top/width/height as percentages of that box. `mobileRotate`,
 * if set, replaces the box's rotation below 768px only.
 */
export const products = [
  {
    id: "crystal",
    name: "Crystal",
    description: PLACEHOLDER,
    specs: [
      { label: "PAN GSD", value: "0.5" },
      { label: "MS GSD", value: "1.0" },
      { label: "Swath", value: "6" },
      { label: "Type of Optics", value: "Modified RC" },
    ],
    media: {
      src: "/assets/fineview/crystal.png",
      alt: "The Crystal imager: a square aluminium mounting plate with the focal-plane electronics at its centre",
      width: 1536,
      height: 1024,
      frame: [489, 494],
      box: [489, 494, 0],
      crop: [-31.97, -3.72, 164.81, 108.7],
    },
  },
  {
    id: "crown-2",
    name: "Crown 2",
    description: PLACEHOLDER,
    specs: [
      { label: "PAN GSD", value: "0.47" },
      { label: "MS GSD", value: "0.94" },
      { label: "Swath", value: "11" },
      { label: "Type of Optics", value: "Korsch" },
    ],
    media: {
      src: "/assets/fineview/crown-2.png",
      alt: "The Crown 2 imager: a cylindrical aluminium telescope barrel on its electronics stack",
      width: 1672,
      height: 941,
      frame: [557.4, 585.88],
      box: [325.095, 489.463, 37.96],
      mobileRotate: 0,
      crop: [-83.36, 0, 267.52, 100],
    },
  },
  {
    id: "crown-3",
    name: "Crown 3",
    description: PLACEHOLDER,
    specs: [
      { label: "Swath", value: "16.5" },
      { label: "Type of Optics", value: "Korsch" },
      { label: "SNR", value: "150" },
      { label: "Material of Mirrors", value: "Silicon carbide" },
    ],
    media: {
      src: "/assets/fineview/crown-3.webp",
      alt: "The Crown 3 imager: a wide aluminium telescope barrel mounted on a frame above its electronics",
      width: 1024,
      height: 1536,
      frame: [565.503, 632.13],
      box: [383.18, 519.386, 24.76],
      mobileRotate: 0,
      crop: [-5.03, -14.3, 109.64, 121.33],
    },
  },
  {
    id: "crown-4",
    name: "Crown 4",
    description: PLACEHOLDER,
    specs: [
      { label: "Swath", value: "22" },
      { label: "Type of Optics", value: "Korsch" },
      { label: "SNR", value: "150" },
      { label: "Material of Mirrors", value: "Silicon carbide" },
    ],
    media: {
      src: "/assets/fineview/crown-4.png",
      alt: "The Crown 4 imager: a slim telescope barrel standing on a machined aluminium base",
      width: 1403,
      height: 1121,
      frame: [578, 490],
      box: [578, 490, 0],
      mobileRotate: 0,
      crop: [-19.9, -19.25, 139.6, 131.57],
    },
  },
];
