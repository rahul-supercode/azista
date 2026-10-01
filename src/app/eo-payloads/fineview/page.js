import Banner from "@/components/fineview/components/Banner";
import PayloadSupportUnit from "@/components/fineview/components/PayloadSupportUnit";
import Products from "@/components/fineview/components/Products";
import { products } from "@/components/fineview/data/products";
import { siteConfig } from "@/config/site";

const title = "Fineview Electro-Optical Payload";
const description =
  "Azista Fineview: panchromatic and multispectral Earth observation payloads for sub-meter resolution imaging over a 5+ year LEO lifetime.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/eo-payloads/fineview" },
  openGraph: { url: "/eo-payloads/fineview", title, description },
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Fineview series",
  url: `${siteConfig.url}/eo-payloads/fineview`,
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: `Fineview ${product.name}`,
      image: `${siteConfig.url}${product.media.src}`,
      brand: { "@type": "Brand", name: siteConfig.name },
      additionalProperty: product.specs.map(({ label, value }) => ({
        "@type": "PropertyValue",
        name: label,
        value,
      })),
    },
  })),
};

export default function FineviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Banner />
      <Products />
      <PayloadSupportUnit />
    </>
  );
}
