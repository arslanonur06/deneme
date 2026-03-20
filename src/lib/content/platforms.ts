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
};

export const platforms: Platform[] = [
  {
    slug: "aurora-spin",
    name: "Aurora Spin",
    bonus: "100% up to $500 + 50 spins (T&Cs apply)",
    minDeposit: "$10",
    minDepositNumeric: 10,
    rating: 4.6,
    ctaUrl: "https://example.com/aff/aurora-spin",
    ctaLabel: "Visit site",
    highlights: ["Fast payouts", "Strong slots catalog"],
  },
  {
    slug: "northline-casino",
    name: "Northline Casino",
    bonus: "Deposit match + cashback on net losses (regional)",
    minDeposit: "$20",
    minDepositNumeric: 20,
    rating: 4.4,
    ctaUrl: "https://example.com/aff/northline",
    ctaLabel: "View offer",
    highlights: ["Clear bonus terms page", "Live dealer tables"],
  },
  {
    slug: "ledger-slots",
    name: "Ledger Slots",
    bonus: "Low-wagering welcome package",
    minDeposit: "$5",
    minDepositNumeric: 5,
    rating: 4.2,
    ctaUrl: "https://example.com/aff/ledger-slots",
    ctaLabel: "Compare",
    highlights: ["Great for low-stakes play", "Mobile-first UX"],
  },
  {
    slug: "summit-bet",
    name: "Summit Bet",
    bonus: "Tiered rewards + weekly missions",
    minDeposit: "$15",
    minDepositNumeric: 15,
    rating: 4.5,
    ctaUrl: "https://example.com/aff/summit-bet",
    ctaLabel: "Learn more",
    highlights: ["Loyalty clarity", "Responsible gaming tools"],
  },
];

export function getPlatformsSortedByRating(): Platform[] {
  return [...platforms].sort((a, b) => b.rating - a.rating);
}
