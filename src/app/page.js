import About from "@/components/home/components/About";
import Hero from "@/components/home/components/Hero";
import Missions from "@/components/home/components/Missions";
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
    </>
  );
}
