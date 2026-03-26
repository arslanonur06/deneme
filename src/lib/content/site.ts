export const siteConfig = {
  name: "Suratbet Rehberi",
  tagline:
    "Slot ve masa oyunları için tarafsız rehberler sunuyoruz; oynamaya karar verdiğinizde ortağımız Suratbet’i öne çıkarıyoruz.",
  description:
    "Slotlar, temel strateji ve platform karşılaştırması üzerine eğitici içerik. Suratbet’e ortaklık bağlantısıyla yönlendiriyoruz; güncel kampanyalar, kurallar ve lisans durumunu mutlaka kendi ülkeniz/bölgeniz için resmi siteden doğrulayın.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "tr_TR",
  twitterHandle: "",
  /** Google Search Console — HTML etiketi doğrulaması */
  googleSiteVerification: "5seRghl2xm4Tw4zCPd7CijJ9fc1y-8idrhehFcgqkTs",
  partner: {
    name: "Suratbet",
    affiliateUrl: "https://t2m.io/srtjlbn",
  },
  /** Markalar (özellikle arama ile gelenler) için PR / iş birliği iletişimi */
  brandPr: {
    line:
      "Google aramasıyla gelen markalar: PR anlaşması ve iş birliği için bize ulaşın.",
    ctaLabel: "Telegram",
    href: "https://t.me/jelibonmarketing",
  },
} as const;
