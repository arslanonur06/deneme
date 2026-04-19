import { siteConfig } from "./site";

export type Platform = {
  slug: string;
  name: string;
  bonus: string;
  minDeposit: string;
  minDepositNumeric: number;
  rating: number;
  ctaUrl: string;
  ctaLabel: string;
  highlights: string[];
  isPartnerAffiliate: boolean;
};

export const platforms: Platform[] = [
  {
    slug: "robinbet",
    name: siteConfig.partner.name,
    bonus:
      "Kampanya metinleri sık değişir; güncel duyuru ve giriş notları için Telegram hattımızı kullanın.",
    minDeposit: "Değişken",
    minDepositNumeric: 10,
    rating: 4.7,
    ctaUrl: siteConfig.partner.affiliateUrl,
    ctaLabel: "Robinbet giriş",
    highlights: [
      "Bu sitede öne çıkan ortak",
      "Takip için ortaklık bağlantımızı kullanın",
    ],
    isPartnerAffiliate: true,
  },
  {
    slug: "matbet-tr",
    name: "Matbet",
    bonus: "Hoş geldin ve çevrim şartları dönemsel; tablo özetidir.",
    minDeposit: "10 ₺",
    minDepositNumeric: 10,
    rating: 4.2,
    ctaUrl: "https://example.com",
    ctaLabel: "Örnek satır",
    highlights: ["Karşılaştırma için örnek"],
    isPartnerAffiliate: false,
  },
  {
    slug: "restbet-tr",
    name: "Restbet",
    bonus: "Kampanya başlıkları cazip görünür; ayrıntı şartnamede.",
    minDeposit: "20 ₺",
    minDepositNumeric: 20,
    rating: 4.0,
    ctaUrl: "https://example.com",
    ctaLabel: "Örnek satır",
    highlights: ["Karşılaştırma için örnek"],
    isPartnerAffiliate: false,
  },
  {
    slug: "jetbahis-tr",
    name: "Jetbahis",
    bonus: "Ödeme kanalları ve limitler işletmeye göre değişir.",
    minDeposit: "10 ₺",
    minDepositNumeric: 10,
    rating: 3.9,
    ctaUrl: "https://example.com",
    ctaLabel: "Örnek satır",
    highlights: ["Karşılaştırma için örnek"],
    isPartnerAffiliate: false,
  },
];

export function getPlatformsSortedByRating(): Platform[] {
  return [...platforms].sort((a, b) => b.rating - a.rating);
}
