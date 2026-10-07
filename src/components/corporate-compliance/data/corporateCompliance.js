export const title = "Corporate & Compliance Information";
export const lastUpdated = "October 06, 2026";

// Placeholder copy from the design. Replace with the final content.
const LOREM =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna";
const LOREM_SHORT = `${LOREM} Lorem ipsum dolor sit amet consect`;
const LOREM_MEDIUM = `${LOREM} Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna`;
const LOREM_LONG = `${LOREM_MEDIUM} Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna`;

export const intro = [LOREM_MEDIUM];

/**
 * Block types:
 *  - "p"  : paragraph        { text }
 *  - "ol" : numbered list    { items: [{ label, text }] }
 */
export const sections = [
  {
    id: "heading-1",
    title: "Heading 1",
    blocks: [
      { type: "p", text: LOREM_MEDIUM },
      {
        type: "ol",
        items: [
          { label: "Sit amet consectetur adipiscing elit", text: LOREM_SHORT },
          { label: "Sit amet consectetur adipiscing elit", text: LOREM_SHORT },
        ],
      },
    ],
  },
  {
    id: "heading-2",
    title: "Heading 2",
    blocks: [
      { type: "p", text: LOREM_LONG },
      { type: "p", text: LOREM_LONG },
    ],
  },
  {
    id: "heading-2-list",
    title: "Heading 3",
    blocks: [
      {
        type: "ol",
        items: [
          { label: "Sit amet consectetur adipiscing elit", text: LOREM_SHORT },
          {
            label: "Sit amet consectetur adipiscing elit",
            text: `${LOREM_SHORT} ${LOREM_LONG}`,
          },
          { label: "Sit amet consectetur adipiscing elit", text: LOREM_LONG },
        ],
      },
    ],
  },
];
