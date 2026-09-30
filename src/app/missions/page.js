import April from "@/components/missions/components/April";
import Banner from "@/components/missions/components/Banner";
import FirstRunner from "@/components/missions/components/FirstRunner";
import FlightRecord from "@/components/missions/components/FlightRecord";
import UpcomingMissions from "@/components/missions/components/UpcomingMissions";
import MissionCta from "@/components/shared/components/MissionCta";

const description =
  "Explore Azista missions and how we are building the future of Earth observation.";

export const metadata = {
  title: "Missions",
  description,
  alternates: { canonical: "/missions" },
  openGraph: { url: "/missions", description },
  twitter: { card: "summary_large_image", description },
};

export default function MissionsPage() {
  return (
    <>
      <Banner />
      <FirstRunner />
      <FlightRecord />
      <UpcomingMissions />
      <April />
      <MissionCta />
    </>
  );
}
