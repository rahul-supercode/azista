import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-4 px-4 py-16 text-center sm:px-6 lg:px-8">
      <h1 className="type-heading-1">{siteConfig.name}</h1>
      <p className="max-w-prose type-text-2">{siteConfig.description}</p>
    </section>
  );
}
