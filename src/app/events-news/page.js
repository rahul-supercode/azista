import Banner from "@/components/events-news/components/Banner";
import UpdatesGrid from "@/components/events-news/components/UpdatesGrid";

const description =
  "The latest Azista Space news, press coverage and upcoming event appearances.";

export const metadata = {
  title: "News & Events",
  description,
  alternates: { canonical: "/events-news" },
  openGraph: { url: "/events-news", description },
  twitter: { card: "summary_large_image", description },
};

export default function EventsNewsPage() {
  return (
    <>
      <Banner />
      <UpdatesGrid />
    </>
  );
}
