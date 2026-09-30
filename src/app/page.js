import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <section className="container">
      <h1 className="heading-1">{siteConfig.name}</h1>
      <p className="text-2">{siteConfig.description}</p>
    </section>
  );
}
