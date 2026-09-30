import AitCapabilities from "@/components/satellite-bus/components/AitCapabilities";
import Banner from "@/components/satellite-bus/components/Banner";
import SatellitePlatforms from "@/components/satellite-bus/components/SatellitePlatforms";
import SatelliteStructure from "@/components/satellite-bus/components/SatelliteStructure";
import Subsystems from "@/components/satellite-bus/components/Subsystems";

const description =
  "Modular satellite platforms up to 500 kg and flight-proven subsystems from Azista, built to ensure mission success across diverse missions.";

export const metadata = {
  title: "Satellite Bus",
  description,
  alternates: { canonical: "/satellite-bus" },
  openGraph: { url: "/satellite-bus", description },
  twitter: { card: "summary_large_image", description },
};

export default function SatelliteBusPage() {
  return (
    <>
      <Banner />
      <SatellitePlatforms />
      <Subsystems />
      <SatelliteStructure />
      <AitCapabilities />
    </>
  );
}
