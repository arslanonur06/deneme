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
    slug: "suratbet",
    name: siteConfig.partner.name,
    bonus:
      "Hoş geldin ve promosyonlar bölgeye göre değişir—güncel şartlar için resmi Suratbet sitesine bakın.",
    minDeposit: "Değişken",
    minDepositNumeric: 10,
    rating: 4.7,
    ctaUrl: siteConfig.partner.affiliateUrl,
    ctaLabel: "Suratbet’e git",
    highlights: [
      "Bu sitede öne çıkan ortak",
      "Takip için ortaklık bağlantımızı kullanın",
    ],
    isPartnerAffiliate: true,
  },
  {
    slug: "aurora-spin",
    name: "Aurora Spin",
    bonus: "Yalnızca örnek—ortak değilimiz (example.com)",
    minDeposit: "10 $",
    minDepositNumeric: 10,
    rating: 4.1,
    ctaUrl: "https://example.com",
    ctaLabel: "Yalnızca örnek",
    highlights: ["Tablo düzeni için yer tutucu"],
    isPartnerAffiliate: false,
  },
  {
    slug: "northline-casino",
    name: "Northline Casino",
    bonus: "Yalnızca örnek—ortak değilimiz (example.com)",
    minDeposit: "20 $",
    minDepositNumeric: 20,
    rating: 4.0,
    ctaUrl: "https://example.com",
    ctaLabel: "Yalnızca örnek",
    highlights: ["Tablo düzeni için yer tutucu"],
    isPartnerAffiliate: false,
  },
  {
    slug: "ledger-slots",
    name: "Ledger Slots",
    bonus: "Yalnızca örnek—ortak değilimiz (example.com)",
    minDeposit: "5 $",
    minDepositNumeric: 5,
    rating: 3.9,
    ctaUrl: "https://example.com",
    ctaLabel: "Yalnızca örnek",
    highlights: ["Tablo düzeni için yer tutucu"],
    isPartnerAffiliate: false,
  },
];

export function getPlatformsSortedByRating(): Platform[] {
  return [...platforms].sort((a, b) => b.rating - a.rating);
}
