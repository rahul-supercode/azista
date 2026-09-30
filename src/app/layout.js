import { Bebas_Neue, Schibsted_Grotesk } from "next/font/google";

import Header from "@/components/layout/Header";
import { siteConfig } from "@/config/site";

import "./globals.css";
import styles from "./layout.module.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: "/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${schibstedGrotesk.variable} ${bebasNeue.variable}`}
    >
      <body>
        <a href="#main-content" className={styles.skipLink}>
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}
