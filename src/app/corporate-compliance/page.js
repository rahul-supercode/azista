import CorporateComplianceContent from "@/components/corporate-compliance/components/CorporateComplianceContent";

const description = "Azista Space's corporate and compliance information.";

export const metadata = {
  title: "Corporate & Compliance Information",
  description,
  alternates: { canonical: "/corporate-compliance" },
  openGraph: { url: "/corporate-compliance", description },
  twitter: { card: "summary_large_image", description },
};

export default function CorporateCompliancePage() {
  return <CorporateComplianceContent />;
}
