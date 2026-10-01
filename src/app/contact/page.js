import ContactIntro from "@/components/contact/components/ContactIntro";
import Locations from "@/components/contact/components/Locations";
import { inquiryContacts } from "@/components/contact/data/contact";
import { headquarters } from "@/config/locations";
import { siteConfig } from "@/config/site";

const description =
  "Contact Azista Space about missions, EO payloads, satellite buses or partnerships. Tell us what you’re building and we’ll help you build it.";

export const metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", description },
  twitter: { card: "summary_large_image", description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${siteConfig.url}/contact`,
  description,
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    address: headquarters.addressLines.join(" "),
    contactPoint: inquiryContacts.map(({ title, email, phone }) => ({
      "@type": "ContactPoint",
      contactType: title,
      email,
      telephone: phone,
    })),
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ContactIntro />
      <Locations />
    </>
  );
}
