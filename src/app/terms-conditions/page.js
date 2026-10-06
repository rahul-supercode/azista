import TermsContent from "@/components/terms-conditions/components/TermsContent";

const description = "Azista Space's terms and conditions of use.";

export const metadata = {
  title: "Terms & Conditions",
  description,
  alternates: { canonical: "/terms-conditions" },
  openGraph: { url: "/terms-conditions", description },
  twitter: { card: "summary_large_image", description },
};

export default function TermsConditionsPage() {
  return <TermsContent />;
}
