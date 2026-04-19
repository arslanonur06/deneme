import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { BestPlatformsPreview } from "@/components/home/best-platforms-preview";
import { InternalLinkCluster } from "@/components/home/internal-link-cluster";
import { PartnerOutboundLink } from "@/components/partner-outbound-link";
import { kategoriEtiketi } from "@/lib/content/category-labels";
import { getLatestBlogPosts } from "@/lib/content/blog-posts";
import { operatorSpotlights } from "@/lib/content/operator-spotlights";
import { articles, getFeaturedArticles } from "@/lib/content/articles";
import {
  RobinbetActionButtons,
  RobinbetActionButtonsFallback,
} from "@/components/layout/robinbet-action-buttons";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Robinbet rehberleri, slot açıklamaları ve platform ipuçları",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

const categoryCards = [
  {
    href: "/category/slots",
    title: "Slotlar",
    copy: "Ödeme tabloları, özellikler, volatilite ve tetikleyiciler—sakin anlatımla.",
  },
  {
    href: "/category/guides",
    title: "Rehberler",
    copy: "Oturum planı, beklenti yönetimi ve strateji efsanelerinin sade açıklaması.",
  },
  {
    href: "/category/reviews",
    title: "İncelemeler",
    copy: "Dikkatli okuyucuya uygun, karşılaştırma odaklı yazılar.",
  },
] as const;

export default function HomePage() {
  const featured = getFeaturedArticles(3);
  const blogPreview = getLatestBlogPosts(4);
  const markaPreview = [...operatorSpotlights]
    .sort((a, b) => a.brandName.localeCompare(b.brandName, "tr"))
    .slice(0, 6);

  return (
    <main>
      <section className="border-b border-blue-200/60 bg-white/85 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            Eğitim • Karşılaştırmaya uygun • Şeffaf açıklamalar
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl sm:leading-tight">
            Şartları okuyan okuyucular için dürüst{" "}
            <span className="text-blue-900">iGaming rehberleri</span>; öne
            çıkan ortak{" "}
            <span className="text-blue-900">Robinbet</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            {siteConfig.tagline} İlk adım olarak rehberlere göz atın; platformları
            yan yana görmek için karşılaştırma sayfasına geçin. Kayıpları telafi
            etme beklentisi taşımadan, sorumlu oyun sınırlarınıza uyun.
          </p>
          <div className="mt-6 rounded-2xl border border-blue-200/80 bg-sky-50/80 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-800">
              Robinbet — güncel adres, giriş ve bonus
            </p>
            <Suspense
              fallback={
                <RobinbetActionButtonsFallback variant="hero" className="mt-3" />
              }
            >
              <RobinbetActionButtons variant="hero" className="mt-3" />
            </Suspense>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Suspense
              fallback={
                <a
                  href={siteConfig.partner.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                >
                  {siteConfig.partner.name}’i ziyaret et
                </a>
              }
            >
              <PartnerOutboundLink
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                {siteConfig.partner.name}’i ziyaret et
              </PartnerOutboundLink>
            </Suspense>
            <Link
              href="/compare/platforms"
              className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-blue-300"
            >
              Platformları karşılaştır
            </Link>
            <Link
              href="/articles/how-to-play-online-slots-beginners-guide"
              className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-blue-300"
            >
              Başlangıç rehberini oku
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl rounded-t-3xl bg-white/75 px-4 py-14 shadow-sm backdrop-blur-[2px] sm:px-6 sm:py-16">
        <BestPlatformsPreview />

        <section className="mt-16" aria-labelledby="blog-preview-heading">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="blog-preview-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                Kısa blog — bonus & kampanyalar
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-zinc-600">
                Deneme bonusu, çevrim, free spin gibi konularda sık eklenen kısa
                notlar. Hızlı okuma için; güncel teklif her zaman resmi sitede.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-blue-900 underline-offset-4 hover:underline"
            >
              Tümünü gör
            </Link>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {blogPreview.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/30"
                >
                  <span className="font-medium text-foreground">
                    {post.title}
                  </span>
                  <span className="mt-1 block text-xs text-zinc-500">
                    {post.readMinutes} dk · {post.updatedAt}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16" aria-labelledby="markalar-preview-heading">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="markalar-preview-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                Popüler markalar (bilgi sayfaları)
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-zinc-600">
                Türkiye’de sık aranan işletmeler hakkında kısa metinler. Dış
                yönlendirmeler yalnızca Robinbet ortaklık bağlantısıdır.
              </p>
            </div>
            <Link
              href="/markalar"
              className="text-sm font-semibold text-blue-900 underline-offset-4 hover:underline"
            >
              Tüm markalar
            </Link>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {markaPreview.map((op) => (
              <li key={op.slug}>
                <Link
                  href={`/markalar/${op.slug}`}
                  className="block rounded-xl border border-zinc-200/80 bg-white p-4 transition-colors hover:border-blue-200"
                >
                  <span className="font-medium text-foreground">
                    {op.brandName}
                  </span>
                  <span className="mt-1 block text-xs text-zinc-500 line-clamp-2">
                    {op.metaDescription}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16" aria-labelledby="featured-heading">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="featured-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              Öne çıkan yazılar
            </h2>
            <Link
              href="/category/guides"
              className="text-sm font-semibold text-blue-900 underline-offset-4 hover:underline"
            >
              Rehberlere göz at
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {featured.map((article) => (
              <li key={article.slug}>
                <article className="flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    {kategoriEtiketi[article.category]}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="hover:text-blue-900"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-zinc-600">
                    {article.description}
                  </p>
                  <p className="mt-4 text-xs text-zinc-500">
                    Güncellendi {article.updatedAt} · {article.readMinutes}{" "}
                    dk okuma
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="mt-16"
          aria-labelledby="categories-heading"
          id="categories"
        >
          <h2
            id="categories-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Kategoriler
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 sm:text-base">
            Basit bir sınıflandırma: oyun mekaniği, temel strateji ve işletme
            karşılaştırmaları.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {categoryCards.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="block h-full rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-5 transition-colors hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <p className="text-sm font-semibold text-blue-950">
                    {c.title}
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">{c.copy}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <InternalLinkCluster />

        <section
          className="mt-16 rounded-2xl border border-dashed border-zinc-300 bg-white p-6 sm:p-8"
          aria-label="Sponsorluklar"
        >
          <h2 className="text-lg font-semibold tracking-tight">
            Sponsor alanı (hazır)
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Bu blok bilinçli olarak sade tutuldu: marka hikâyesi, araştırma
            ortaklığı veya tek birincil sponsor için kullanın. Metni doğrulukla
            tutun, bölgesel kurallara uygun şekilde reklam etiketleyin ve okur
            güvenini önceliklendirin.
          </p>
          <p className="mt-4 text-sm font-medium text-zinc-500">
            İş birliği için kendi kontrolünüzde bir iletişim kanalı (e-posta veya
            hafif bir form) ekleyip buraya bağlayın.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-semibold">Son güncellemeler</h2>
          <ul className="mt-4 divide-y divide-zinc-100">
            {articles
              .slice()
              .sort(
                (a, b) =>
                  new Date(b.updatedAt).getTime() -
                  new Date(a.updatedAt).getTime(),
              )
              .map((a) => (
                <li
                  key={a.slug}
                  className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <Link
                    href={`/articles/${a.slug}`}
                    className="font-medium text-foreground hover:text-blue-900"
                  >
                    {a.title}
                  </Link>
                  <span className="text-xs text-zinc-500">
                    {kategoriEtiketi[a.category]} · {a.updatedAt}
                  </span>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
