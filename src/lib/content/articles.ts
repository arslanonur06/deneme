import type { Platform } from "./platforms";
import { platforms } from "./platforms";

export type ArticleFaqItem = {
  question: string;
  answer: string;
};

export type ArticleSection = {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: "slots" | "guides" | "reviews";
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  keywords: string[];
  relatedSlugs: string[];
  sections: ArticleSection[];
  faq: ArticleFaqItem[];
  recommendedPlatformSlugs: string[];
};

const pickPlatforms = (...slugs: string[]): Platform[] =>
  slugs
    .map((s) => platforms.find((p) => p.slug === s))
    .filter((p): p is Platform => Boolean(p));

export const articles: Article[] = [
  {
    slug: "how-to-play-online-slots-beginners-guide",
    title: "How to Play Online Slots: A Calm, Practical Beginner Guide",
    description:
      "Learn how online slots work, what RTP and volatility mean, and how to build habits that keep play enjoyable and budgeted.",
    category: "guides",
    publishedAt: "2026-01-12",
    updatedAt: "2026-03-01",
    readMinutes: 9,
    keywords: [
      "how to play online slots",
      "slots beginner guide",
      "slot volatility explained",
    ],
    relatedSlugs: [
      "european-roulette-strategy-basics",
      "best-platforms-for-low-deposit-play",
    ],
    recommendedPlatformSlugs: ["ledger-slots", "aurora-spin"],
    sections: [
      {
        id: "what-happens-on-each-spin",
        heading: "What actually happens on each spin",
        level: 2,
        paragraphs: [
          "Modern online slots are powered by certified random number generators (RNG). Each spin is independent, which means previous outcomes do not influence the next result.",
          "Your experience is shaped by math (return-to-player and volatility), game rules (paylines or cluster mechanics), and features such as free spins or multipliers.",
        ],
      },
      {
        id: "rtp-and-volatility",
        heading: "RTP and volatility in plain language",
        level: 2,
        paragraphs: [
          "RTP is a long-term statistical measure, not a guarantee for a session. A 96% RTP does not mean you will leave with 96% of your bankroll every time you play.",
          "Volatility describes how swingy results can feel. Higher volatility tends to produce rarer but larger hits; lower volatility often yields steadier, smaller outcomes.",
        ],
      },
      {
        id: "bankroll-and-session-plan",
        heading: "A simple session plan that respects your budget",
        level: 2,
        paragraphs: [
          "Decide a fixed entertainment budget before you play and track time. Small breaks help you notice fatigue and avoid impulsive decisions.",
          "If you use bonuses, read the wagering requirements and game eligibility. Promotions can be useful, but clarity matters more than headline numbers.",
        ],
      },
      {
        id: "choosing-where-to-play",
        heading: "Choosing where to play responsibly",
        level: 2,
        paragraphs: [
          "Prefer licensed operators with transparent terms, visible responsible gaming controls, and customer support you can reach quickly.",
          "Compare minimum deposits, withdrawal speeds, and verification steps. A platform that feels clear on day one usually saves friction later.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you influence slot outcomes with timing or patterns?",
        answer:
          "No. Licensed games are designed so outcomes cannot be predicted or manipulated by timing. Treat slots as entertainment with a fixed cost ceiling.",
      },
      {
        question: "Is a higher RTP always the better choice?",
        answer:
          "RTP is one factor alongside volatility, rules, and what you enjoy. Two games with similar RTP can feel very different depending on volatility and features.",
      },
      {
        question: "What should I check before accepting a welcome bonus?",
        answer:
          "Review wagering requirements, expiry windows, eligible games, and maximum bet rules while a bonus is active. If anything is unclear, ask support before depositing.",
      },
    ],
  },
  {
    slug: "european-roulette-strategy-basics",
    title: "European Roulette Strategy Basics (Expectation, Not Myths)",
    description:
      "Understand house edge, common bet types, and why ‘systems’ cannot erase the mathematical advantage of the game.",
    category: "guides",
    publishedAt: "2026-02-04",
    updatedAt: "2026-03-05",
    readMinutes: 8,
    keywords: [
      "european roulette strategy",
      "roulette house edge explained",
      "roulette bet types",
    ],
    relatedSlugs: [
      "how-to-play-online-slots-beginners-guide",
      "best-platforms-for-low-deposit-play",
    ],
    recommendedPlatformSlugs: ["northline-casino", "summit-bet"],
    sections: [
      {
        id: "single-zero-versus-double-zero",
        heading: "Why single-zero roulette matters",
        level: 2,
        paragraphs: [
          "European roulette uses one zero. American roulette adds a second zero pocket, which increases the house edge on most bets.",
          "This guide focuses on European-style wheels because they are the common baseline for discussing fair comparisons between operators.",
        ],
      },
      {
        id: "inside-versus-outside-bets",
        heading: "Inside bets vs outside bets",
        level: 2,
        paragraphs: [
          "Outside bets (like red/black or odd/even) win more often but pay less. Inside bets (like straight-up numbers) win less often but pay more.",
          "No combination of bets creates a long-term edge. Bankroll management only changes how variance feels; it does not change expectation.",
        ],
      },
      {
        id: "systems-and-discipline",
        heading: "Systems, discipline, and reality",
        level: 2,
        paragraphs: [
          "Progressive staking systems can create dramatic short-term swings. They do not overturn the house edge and can accelerate losses during cold runs.",
          "The most durable approach is disciplined limits: a stop-loss you respect, time limits, and a mindset that treats play as paid entertainment.",
        ],
      },
    ],
    faq: [
      {
        question: "Is roulette skill-based?",
        answer:
          "You choose bets and sizing, but outcomes are random on a fair wheel. Skill mainly appears in bankroll control and understanding odds—not predicting results.",
      },
      {
        question: "Does French roulette change the math?",
        answer:
          "Some French rules offer return mechanisms on certain even-money bets when zero hits. Always verify the exact rule set at your table—it affects effective house edge.",
      },
    ],
  },
  {
    slug: "best-platforms-for-low-deposit-play",
    title: "Best Platforms for Low-Deposit Play: What to Compare First",
    description:
      "A comparison-friendly checklist for players who want small minimum deposits without sacrificing clarity on fees, verification, and withdrawals.",
    category: "reviews",
    publishedAt: "2026-02-18",
    updatedAt: "2026-03-08",
    readMinutes: 7,
    keywords: [
      "low deposit online casino",
      "small deposit casino comparison",
      "minimum deposit platforms",
    ],
    relatedSlugs: ["how-to-play-online-slots-beginners-guide"],
    recommendedPlatformSlugs: ["ledger-slots", "summit-bet"],
    sections: [
      {
        id: "minimum-deposit-is-not-the-whole-story",
        heading: "Minimum deposit is not the whole story",
        level: 2,
        paragraphs: [
          "A low entry point helps you explore an interface, but withdrawal minimums, payment rails, and verification requirements matter just as much.",
          "Look for clear documentation on fees for your preferred method. Hidden friction often appears at cash-out time—not at deposit time.",
        ],
      },
      {
        id: "what-we-compare-on-our-hub",
        heading: "What we compare on our comparison hub",
        level: 2,
        paragraphs: [
          "Our public comparison table focuses on headline bonus language, published minimum deposits, and a conservative editorial rating based on policy transparency and UX signals.",
          "Ratings are not endorsements of outcomes or guarantees of service quality. Always confirm licensing in your jurisdiction before playing.",
        ],
      },
    ],
    faq: [
      {
        question: "Why do two platforms with the same minimum deposit feel different?",
        answer:
          "Bonus rules, game availability, identity checks, and payout speeds vary. Minimum deposit tells you the entry point—not the full operational experience.",
      },
      {
        question: "Do affiliate links change our rankings?",
        answer:
          "Commercial relationships may exist, but listings should still be usable for research. Prioritize operators you can verify as licensed and understandable for your region.",
      },
    ],
  },
  {
    slug: "understanding-slot-features-wilds-scatters-and-bonus-rounds",
    title:
      "Understanding Slot Features: Wilds, Scatters, and Bonus Rounds",
    description:
      "A slots-focused explainer on common symbols and features—so you can read paytables with confidence.",
    category: "slots",
    publishedAt: "2026-03-02",
    updatedAt: "2026-03-10",
    readMinutes: 6,
    keywords: [
      "slot wild symbols",
      "scatter symbols explained",
      "bonus round slots",
    ],
    relatedSlugs: ["how-to-play-online-slots-beginners-guide"],
    recommendedPlatformSlugs: ["aurora-spin", "ledger-slots"],
    sections: [
      {
        id: "wild-symbols",
        heading: "Wild symbols: substitution and limits",
        level: 2,
        paragraphs: [
          "Wilds typically substitute for standard symbols to complete winning combinations. Whether wilds pay on their own and appear on all reels varies by game.",
          "Always open the in-game paytable: it states which symbols wilds can replace and whether jackpots are excluded when wilds are involved.",
        ],
      },
      {
        id: "scatters-and-triggers",
        heading: "Scatters and feature triggers",
        level: 2,
        paragraphs: [
          "Scatters often pay anywhere on the grid and can unlock free spins or bonus rounds when enough land in a single spin.",
          "Some titles use alternate triggers (collection meters, random features). The real paytable is the source of truth—assumptions from other games are misleading.",
        ],
      },
      {
        id: "bonus-rounds-variance",
        heading: "Bonus rounds and volatility swings",
        level: 2,
        paragraphs: [
          "Feature rounds can concentrate much of a game’s payout potential in rare events. That can make base play feel calm and bonuses feel explosive.",
          "If you want calmer sessions, look for games marketed as low volatility—or try demo modes where permitted in your region.",
        ],
      },
    ],
    faq: [
      {
        question: "Does bonus buy change RTP?",
        answer:
          "In some jurisdictions bonus buy is restricted; where allowed, the paytable or help file should explain how buy works and whether RTP differs by mode. If unsure, ask support or avoid the feature.",
      },
      {
        question: "If features go missing for a long time, is it “due”?",
        answer:
          "No. Licensed slots do not use a queue model for outcomes. Streaks are random and can run long in either direction.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getArticlesByCategory(
  category: Article["category"],
): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(limit = 3): Article[] {
  return [...articles]
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    )
    .slice(0, limit);
}

export function getArticleRecommendedPlatforms(article: Article): Platform[] {
  return pickPlatforms(...article.recommendedPlatformSlugs);
}