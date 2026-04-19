import Link from "next/link";
import { Suspense } from "react";
import { PartnerOutboundLink } from "@/components/partner-outbound-link";
import { siteConfig } from "@/lib/content/site";
import {
  RobinbetActionButtons,
  RobinbetActionButtonsFallback,
} from "./robinbet-action-buttons";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/markalar", label: "Markalar" },
  { href: "/compare/platforms", label: "Karşılaştır" },
  { href: "/category/guides", label: "Rehberler" },
  { href: "/category/slots", label: "Slotlar" },
  { href: "/category/reviews", label: "İncelemeler" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-blue-200/60 bg-linear-to-r from-sky-50 via-white to-sky-50">
        <p className="mx-auto max-w-6xl px-4 py-2 text-center text-[11px] leading-snug text-zinc-600 sm:px-6 sm:text-xs">
          <span className="hidden sm:inline">
            {siteConfig.brandPr.line}{" "}
          </span>
          <span className="sm:hidden">
            Markalar: PR / iş birliği →{" "}
          </span>
          <a
            href={siteConfig.brandPr.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-800 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
          >
            {siteConfig.brandPr.ctaLabel}
          </a>
        </p>
      </div>
      <div className="border-b border-blue-200/50 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-foreground"
          >
            {siteConfig.name}
            <span className="text-blue-600">.</span>
          </Link>
          <nav
            className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 text-sm font-medium text-zinc-600"
            aria-label="Ana menü"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-blue-800"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={siteConfig.brandPr.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-800"
            >
              {siteConfig.brandPr.ctaLabel}
            </a>
            <Suspense
              fallback={
                <a
                  href={siteConfig.partner.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="rounded-full bg-blue-700 px-3 py-1.5 text-white transition-colors hover:bg-blue-800"
                >
                  {siteConfig.partner.name}
                </a>
              }
            >
              <PartnerOutboundLink
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-full bg-blue-700 px-3 py-1.5 text-white transition-colors hover:bg-blue-800"
              >
                {siteConfig.partner.name}
              </PartnerOutboundLink>
            </Suspense>
          </nav>
        </div>
        <div className="border-t border-blue-100 pt-3">
          <Suspense fallback={<RobinbetActionButtonsFallback variant="compact" />}>
            <RobinbetActionButtons variant="compact" />
          </Suspense>
        </div>
        </div>
      </div>
    </header>
  );
}
