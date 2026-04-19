import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import {
  RobinbetActionButtons,
  RobinbetActionButtonsFallback,
} from "@/components/layout/robinbet-action-buttons";
import { operatorSpotlights } from "@/lib/content/operator-spotlights";
import { siteConfig } from "@/lib/content/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Popüler işletmeler — bilgi sayfaları",
  description:
    "Türkiye’de sık aranan çevrim içi bahis ve casino markaları hakkında kısa bilgilendirici sayfalar. Dış CTA yalnızca Robinbet ortaklık bağlantısıdır.",
  alternates: { canonical: "/markalar" },
  openGraph: {
    url: new URL("/markalar", siteConfig.url).toString(),
    title: `Markalar — ${siteConfig.name}`,
    description:
      "Marka bilgi sayfaları; ortaklık yönlendirmesi yalnızca Robinbet içindir.",
  },
};

export default function MarkalarIndexPage() {
  const sorted = [...operatorSpotlights].sort((a, b) =>
    a.brandName.localeCompare(b.brandName, "tr"),
  );

  return (
    <main>
      <header className="border-b border-blue-200/60 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            Bilgi arşivi
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Popüler iGaming markaları
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600">
            Aşağıdaki sayfalar Türkiye’de sık aranan işletme adları hakkında
            genel, tarafsız bilgi sunar. Bu site bu markaların resmi ortağı
            değildir; güncel kampanya ve lisans için ilgili markanın resmi
            kaynaklarına bakın.{" "}
            <strong className="font-medium text-foreground">
              Tüm dış yönlendirmelerimiz yalnızca ortağımız Robinbet (
              {siteConfig.partner.affiliateUrl}) adresine gider.
            </strong>
          </p>
          <div className="mt-6 max-w-3xl rounded-2xl border border-blue-200 bg-sky-50/90 p-4">
            <Suspense
              fallback={<RobinbetActionButtonsFallback variant="compact" />}
            >
              <RobinbetActionButtons variant="compact" />
            </Suspense>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((op) => (
            <li key={op.slug}>
              <Link
                href={`/markalar/${op.slug}`}
                className="block rounded-xl border border-zinc-200/80 bg-white p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30"
              >
                <span className="font-semibold text-foreground">
                  {op.brandName}
                </span>
                <span className="mt-1 block text-xs text-zinc-500 line-clamp-2">
                  {op.metaDescription}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-zinc-600">
          <Link
            href="/blog"
            className="font-medium text-blue-900 underline-offset-4 hover:underline"
          >
            Bonus blog yazılarına
          </Link>{" "}
          veya{" "}
          <Link
            href="/"
            className="font-medium text-blue-900 underline-offset-4 hover:underline"
          >
            ana sayfaya
          </Link>{" "}
          dönün.
        </p>
      </div>
    </main>
  );
}
