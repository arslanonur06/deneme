export const siteConfig = {
  name: "Robinbet Rehberi",
  tagline:
    "Slot ve masa oyunları için tarafsız rehberler sunuyoruz; güncel duyuru ve iletişim için Telegram kanalımızı öne çıkarıyoruz.",
  description:
    "Slotlar, temel strateji ve platform karşılaştırması üzerine eğitici içerik. Telegram (@kittyxeniaa) kanalına yönlendiriyoruz; güncel kampanyalar, kurallar ve risk bilgilendirmesini kendi araştırmanızla doğrulayın.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "tr_TR",
  twitterHandle: "",
  /** Google Search Console — HTML etiketi doğrulaması */
  googleSiteVerification: "5seRghl2xm4Tw4zCPd7CijJ9fc1y-8idrhehFcgqkTs",
  partner: {
    name: "Telegram",
    telegramHandle: "kittyxeniaa",
    affiliateUrl: "https://t.me/kittyxeniaa",
    /** Ana dış CTA metni (Türkçe). */
    visitCta: "Telegram'da kittyxeniaa",
  },
  /** Reklam, sponsorluk ve marka iş birliği iletişimi */
  brandPr: {
    line:
      "Reklam, sponsorluk veya marka iş birliği talepleriniz için Telegram üzerinden ulaşabilirsiniz.",
    ctaLabel: "İş birliği için yaz",
    href: "https://t.me/jelibonmarketing",
  },
} as const;
