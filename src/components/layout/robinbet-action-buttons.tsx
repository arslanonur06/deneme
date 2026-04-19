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
      ? "rounded-lg bg-blue-700 px-2.5 py-1.5 text-xs font-semibold text-white shadow hover:bg-blue-800"
      : variant === "hero"
        ? "rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-800 sm:px-5 sm:py-3"
        : "rounded-lg bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-blue-800";

  const outline =
    variant === "compact"
      ? "rounded-lg border border-blue-600 bg-white/95 px-2.5 py-1.5 text-xs font-semibold text-blue-900 hover:bg-blue-50"
      : variant === "hero"
        ? "rounded-xl border-2 border-blue-600 bg-white/95 px-4 py-2.5 text-sm font-semibold text-blue-900 hover:bg-blue-50 sm:px-5 sm:py-3"
        : "rounded-lg border border-blue-600 bg-white/95 px-3 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-50";

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      role="group"
      aria-label="Robinbet ortak bağlantıları"
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
