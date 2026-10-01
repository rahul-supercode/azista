import MissionBuilder from "@/components/build-your-mission/components/MissionBuilder";

const description =
  "Configure your satellite mission with Azista Space: choose your payload, subsystems, orbit and mission life, and see the satellite take shape.";

export const metadata = {
  title: "Build Your Mission",
  description,
  alternates: { canonical: "/build-your-mission" },
  openGraph: { url: "/build-your-mission", description },
  twitter: { card: "summary_large_image", description },
};

export default function BuildYourMissionPage() {
  return <MissionBuilder />;
}
