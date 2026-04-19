"use client";

import Link from "next/link";
import { Suspense } from "react";
import { usePartnerAffiliateHref } from "@/hooks/use-partner-affiliate-href";
import type { Platform } from "@/lib/content/platforms";
import { siteConfig } from "@/lib/content/site";

type RecommendedPlatformsProps = {
  platforms: Platform[];
};

function RecommendedPlatformsInner({
  platforms,
  partnerHref,
}: RecommendedPlatformsProps & { partnerHref: string }) {
  return (
    <aside
      className="my-10 rounded-2xl border border-forest-200/70 bg-forest-50/40 p-5 sm:p-6"
      aria-label="Önerilen platformlar"
    >
      <p className="text-sm font-semibold text-forest-950">
        Okuyucuların sıradaki adımda karşılaştırdığı platformlar
      </p>
      <p className="mt-1 text-sm text-forest-900/80">
        Şeffaflık ve yayımlanan politikalarda güçlü seçenekler. Kayıt olmadan
        önce bölgenizdeki uygunluğu mutlaka doğrulayın.
      </p>
      <ul className="mt-4 divide-y divide-forest-200/60 rounded-xl border border-forest-200/60 bg-white/80">
        {platforms.map((p) => (
          <li
            key={p.slug}
            className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-medium text-foreground">{p.name}</p>
              <p className="mt-0.5 text-sm text-zinc-600">{p.bonus}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/compare/platforms"
                className="text-sm font-medium text-forest-900 underline-offset-4 hover:underline"
              >
                Tam karşılaştırmayı gör
              </Link>
              <a
                href={p.isPartnerAffiliate ? partnerHref : p.ctaUrl}
                target="_blank"
                rel={
                  p.isPartnerAffiliate
                    ? "noopener noreferrer sponsored"
                    : "noopener noreferrer nofollow"
                }
                className="inline-flex items-center justify-center rounded-lg bg-gold-500 px-3 py-2 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
              >
                {p.ctaLabel}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function RecommendedPlatformsTracked({ platforms }: RecommendedPlatformsProps) {
  const partnerHref = usePartnerAffiliateHref();
  return (
    <RecommendedPlatformsInner platforms={platforms} partnerHref={partnerHref} />
  );
}

export function RecommendedPlatforms({ platforms }: RecommendedPlatformsProps) {
  if (!platforms.length) return null;

  return (
    <Suspense
      fallback={
        <RecommendedPlatformsInner
          platforms={platforms}
          partnerHref={siteConfig.partner.affiliateUrl}
        />
      }
    >
      <RecommendedPlatformsTracked platforms={platforms} />
    </Suspense>
  );
}
