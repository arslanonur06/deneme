import type { Metadata } from "next";
import { Suspense } from "react";
import {
  PlatformComparisonClient,
  PlatformComparisonInner,
} from "@/components/compare/platform-comparison-client";
import {
  RobinbetActionButtons,
  RobinbetActionButtonsFallback,
} from "@/components/layout/robinbet-action-buttons";
import { platforms } from "@/lib/content/platforms";
import { siteConfig } from "@/lib/content/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Platform karşılaştırması — bonuslar, yatırımlar ve puanlar",
  description:
    "Bonus özeti, minimum yatırım ve puanları yan yana görün. Tabloda bir Telegram yönlendirmesi ve karşılaştırma için örnek satırlar yer alır.",
  alternates: { canonical: "/compare/platforms" },
  openGraph: {
    url: new URL("/compare/platforms", siteConfig.url).toString(),
    title: `Platform karşılaştırması — ${siteConfig.name}`,
    description:
      "Kampanya özetleri, minimum yatırımlar ve puanlara yan yana bir bakış.",
  },
};

export default function ComparePlatformsPage() {
  return (
    <main>
      <header className="border-b border-forest-200/60 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-wide text-forest-700">
            Karşılaştırma merkezi
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Platform karşılaştırma tablosu
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
            <strong className="font-medium text-foreground">Robinbet Telegram</strong>{" "}
            öne çıkan iletişim kanalımızdır; mavi ana düğmeler bu adrese gider.
            Diğer satırlar tabloyu tamamlamak için örnektir (example.com); güncel
            bilgi için ilgili markanın resmi sitesine bakın.
          </p>
          <div className="mt-6 max-w-3xl rounded-2xl border border-forest-200 bg-forest-50/90 p-4">
            <Suspense
              fallback={<RobinbetActionButtonsFallback variant="compact" />}
            >
              <RobinbetActionButtons variant="compact" />
            </Suspense>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Suspense
          fallback={
            <PlatformComparisonInner
              platforms={platforms}
              partnerAffiliateHref={siteConfig.partner.affiliateUrl}
            />
          }
        >
          <PlatformComparisonClient platforms={platforms} />
        </Suspense>

        <section className="mt-12 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-6 sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight">
            Dış bağlantılar ve şeffaflık
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            Bazı düğmeler ücretli yönlendirme içerebilir; ilgili bağlantılar{" "}
            <code className="rounded bg-white px-1 py-0.5 text-xs">
              rel=&quot;sponsored&quot;
            </code>{" "}
            ile işaretlenir. Teklif ve lisans bilgisini her zaman resmi kaynakta
            doğrulayın. Kumar kaybını telafi etmeye çalışmayın; sorumlu oyun
            sınırlarına uyun.
          </p>
        </section>
      </div>
    </main>
  );
}
