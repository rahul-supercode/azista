/**
 * Facility locations, in tab order. `sites` is listed row by row: two columns
 * on larger screens, one on mobile. `mapPoint` is the city's marker on
 * facilities-map.png, as fractions of the image width and height.
 */
export const facilities = [
  {
    id: "hyderabad",
    city: "Hyderabad",
    mapPoint: { x: 0.5422, y: 0.5886 },
    // TODO: add the Hyderabad sites (not in the design yet).
    sites: [],
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    mapPoint: { x: 0.4734, y: 0.4669 },
    sites: [
      "EO Payloads Design Office",
      "Electronics Mfg. Facility",
      "EO Payloads Mfg. Facility",
      "Satellite Mfg. facility (LEO Class)",
    ],
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    mapPoint: { x: 0.5253, y: 0.6894 },
    // TODO: add the Bengaluru sites (not in the design yet).
    sites: [],
  },
];

export const defaultFacilityId = "ahmedabad";
