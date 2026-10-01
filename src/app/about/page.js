import Banner from "@/components/about/components/Banner";
import Careers from "@/components/about/components/Careers";
import Facilities from "@/components/about/components/Facilities";
import Story from "@/components/about/components/Story";

const description =
  "The Azista story: from precision manufacturing to 80% vertically integrated space hardware, built under one roof in India.";

export const metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", description },
  twitter: { card: "summary_large_image", description },
};

export default function AboutPage() {
  return (
    <>
      <Banner />
      <Story />
      <Facilities />
      <Careers />
    </>
  );
}
