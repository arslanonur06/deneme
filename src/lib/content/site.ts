export const siteConfig = {
  name: "Robinbet Rehberi",
  tagline:
    "Robinbet giriş ve robinbet adres konularında genel bilgilendirme; bonus ve kampanyaları yalnızca resmi kaynakta doğrulayın.",
  description:
    "Robinbet giriş, güncel adres ve mobil erişim hakkında sade anlatımlar. Robinbet adres değişiklikleri ve duyurular için Telegram hattımızı kullanabilirsiniz; içerik yatırım tavsiyesi değildir.",
  /** Arama motorları — layout metadata.keywords ile birlikte kullanılır */
  seoKeywords: [
    "robinbet giriş",
    "robinbet adres",
    "robinbet güncel giriş",
    "robinbet güncel adres",
    "robinbet telegram",
    "robinbet mobil giriş",
    "robinbet bonus",
  ] as const,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "tr_TR",
  twitterHandle: "",
  /** Google Search Console — HTML etiketi doğrulaması */
  googleSiteVerification: "5seRghl2xm4Tw4zCPd7CijJ9fc1y-8idrhehFcgqkTs",
  partner: {
    name: "Robinbet",
    telegramHandle: "kittyxeniaa",
    affiliateUrl: "https://t.me/kittyxeniaa",
    /** Ana dış CTA metni (Türkçe). */
    visitCta: "Güncel Robinbet Telegram hesabı",
  },
  /** Reklam, sponsorluk ve marka iş birliği iletişimi */
  brandPr: {
    line:
      "Reklam, sponsorluk veya marka iş birliği talepleriniz için Telegram üzerinden ulaşabilirsiniz.",
    ctaLabel: "İş birliği için yaz",
    href: "https://t.me/jelibonmarketing",
  },
} as const;
