"use client";

import { siteConfig } from "@/lib/content/site";
import { usePartnerAffiliateHref } from "@/hooks/use-partner-affiliate-href";

const rel = "noopener noreferrer sponsored" as const;

const items = [
  { id: "guncel", label: "Güncel adres" },
  { id: "giris", label: "Giriş" },
  { id: "kayit", label: "Kayıt ol" },
  { id: "bonus", label: "Bonus" },
  { id: "mobil", label: "Mobil giriş" },
] as const;

type RobinbetActionButtonsProps = {
  /** inline: tek satır kaydırma; wrap: çok satır; compact: küçük padding */
  variant?: "default" | "compact" | "hero";
  className?: string;
};

function RobinbetActionButtonsInner({
  href,
  variant = "default",
  className = "",
}: RobinbetActionButtonsProps & { href: string }) {
  const solid =
    variant === "compact"
      ? "rounded-lg bg-emerald-700 px-2.5 py-1.5 text-xs font-semibold text-white shadow hover:bg-emerald-800"
      : variant === "hero"
        ? "rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-emerald-800 sm:px-5 sm:py-3"
        : "rounded-lg bg-emerald-700 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-800";

  const outline =
    variant === "compact"
      ? "rounded-lg border border-amber-500 bg-white/95 px-2.5 py-1.5 text-xs font-semibold text-emerald-900 hover:bg-amber-50/80"
      : variant === "hero"
        ? "rounded-xl border-2 border-amber-500 bg-white/95 px-4 py-2.5 text-sm font-semibold text-emerald-900 hover:bg-amber-50/80 sm:px-5 sm:py-3"
        : "rounded-lg border border-amber-500 bg-white/95 px-3 py-2 text-sm font-semibold text-emerald-900 hover:bg-amber-50/80";

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      role="group"
      aria-label="Telegram (kittyxeniaa) dış bağlantıları"
    >
      {items.map((item, index) => (
        <a
          key={item.id}
          href={href}
          target="_blank"
          rel={rel}
          className={index === 0 ? solid : outline}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export function RobinbetActionButtons(props: RobinbetActionButtonsProps) {
  const href = usePartnerAffiliateHref();
  return <RobinbetActionButtonsInner {...props} href={href} />;
}

/** `useSearchParams` yüklenene kadar kullanılan statik href (Suspense fallback). */
export function RobinbetActionButtonsFallback(props: RobinbetActionButtonsProps) {
  return (
    <RobinbetActionButtonsInner
      {...props}
      href={siteConfig.partner.affiliateUrl}
    />
  );
}
