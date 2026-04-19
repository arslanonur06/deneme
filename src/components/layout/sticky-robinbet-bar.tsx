"use client";

import { siteConfig } from "@/lib/content/site";
import { usePartnerAffiliateHref } from "@/hooks/use-partner-affiliate-href";

const rel = "noopener noreferrer sponsored" as const;

const quick = [
  { label: "Güncel adres", id: "q1" },
  { label: "Giriş", id: "q2" },
  { label: "Kayıt", id: "q3" },
] as const;

function StickyRobinbetBarInner({ href }: { href: string }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 border-t border-forest-200/80 bg-white/90 backdrop-blur-md supports-[padding:max(0px)]:pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="pointer-events-auto mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-3 py-2 sm:justify-between sm:px-6">
        <p className="hidden text-xs font-medium text-forest-900 sm:block">
          {siteConfig.partner.name} — hızlı erişim
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {quick.map((q, i) => (
            <a
              key={q.id}
              href={href}
              target="_blank"
              rel={rel}
              className={
                i === 0
                  ? "rounded-full bg-gold-500 px-3 py-1.5 text-xs font-semibold text-forest-950 shadow hover:bg-gold-400 sm:text-sm"
                  : "rounded-full border border-gold-400 bg-white px-3 py-1.5 text-xs font-semibold text-forest-900 hover:bg-gold-50/80 sm:text-sm"
              }
            >
              {q.label}
            </a>
          ))}
          <a
            href={href}
            target="_blank"
            rel={rel}
            className="rounded-full border border-gold-400 bg-gold-50 px-3 py-1.5 text-xs font-semibold text-forest-950 hover:bg-gold-100 sm:text-sm"
          >
            Bonus
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Mobil ve masaüstünde sürekli erişim için alt sabit çubuk (tümü Telegram ortak URL).
 */
export function StickyRobinbetBar() {
  const href = usePartnerAffiliateHref();
  return <StickyRobinbetBarInner href={href} />;
}

export function StickyRobinbetBarFallback() {
  return <StickyRobinbetBarInner href={siteConfig.partner.affiliateUrl} />;
}
