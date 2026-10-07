const url = process.env.NEXT_PUBLIC_SITE_URL;

if (!url) {
  throw new Error("NEXT_PUBLIC_SITE_URL is not set. See .env.example.");
}

export const siteConfig = {
  name: "Azista",
  description: "Azista web application.",
  url,
};
