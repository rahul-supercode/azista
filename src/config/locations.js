/**
 * Office and facility addresses, in tab order on the Contact page. The first
 * entry is the headquarters (also shown in the footer). `addressLines` keeps
 * the footer's line breaks.
 */
export const locations = [
  {
    id: "hyderabad",
    city: "Hyderabad",
    addressLines: [
      "Sy.No 80–84, Melange Towers, 4th Floor,",
      "C Wing, Patrika Nagar, Madhapur, Hyderabad, Telangana, India – 500 081",
    ],
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad (Sanand)",
    addressLines: [
      "Plot No. 16, Sanand Land Industrial Estate Corporation (SLIEC), Sarkhej-Sanand Road, Ularia, Sanand, Ahmedabad, Gujarat, India – 382 210",
    ],
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    addressLines: [
      "Signet, Embassy TechSquare, A Wing, Ground Floor, Kadubeesanahalli, Bengaluru, Karnataka 560103",
    ],
  },
];

export const headquarters = locations[0];

export function mapUrl({ addressLines }) {
  const query = encodeURIComponent(addressLines.join(" "));
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
