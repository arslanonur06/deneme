export const siteConfig = {
  name: "PlayWise Insights",
  tagline: "Research-backed guides for informed iGaming decisions.",
  description:
    "Independent educational content about casino games, strategy fundamentals, and how to compare licensed platforms responsibly.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  twitterHandle: "@playwiseinsights",
} as const;
