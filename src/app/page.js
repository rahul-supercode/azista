import About from "@/components/home/components/About";
import Events from "@/components/home/components/Events";
import Experience from "@/components/home/components/Experience";
import Hero from "@/components/home/components/Hero";
import HostedPayloads from "@/components/home/components/HostedPayloads";
import MissionCta from "@/components/home/components/MissionCta";
import Missions from "@/components/home/components/Missions";
import News from "@/components/home/components/News";
import OpticalPayloads from "@/components/home/components/OpticalPayloads";
import SatelliteBus from "@/components/home/components/SatelliteBus";
import { siteConfig } from "@/config/site";

const description =
  "Azista engineers and manufactures space hardware at scale: EO payloads, satellite buses and complete missions.";

export const metadata = {
  title: { absolute: `${siteConfig.name} | Space Hardware at Scale` },
  description,
  alternates: { canonical: "/" },
  openGraph: { url: "/", description },
  twitter: { card: "summary_large_image", description },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Missions />
      <OpticalPayloads />
      <SatelliteBus />
      <HostedPayloads />
      <Experience />
      <Events />
      <News />
      <MissionCta />
    </>
  );
}
