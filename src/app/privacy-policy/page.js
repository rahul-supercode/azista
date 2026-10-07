import PrivacyContent from "@/components/privacy-policy/components/PrivacyContent";

const description = "Azista Space's privacy policy.";

export const metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { url: "/privacy-policy", description },
  twitter: { card: "summary_large_image", description },
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}