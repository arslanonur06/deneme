import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article/article-body";
import { FaqSection } from "@/components/article/faq-section";
import { RecommendedPlatforms } from "@/components/article/recommended-platforms";
import { TableOfContents } from "@/components/article/table-of-contents";
import { ArticleJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import {
  articles,
  getAllArticleSlugs,
  getArticleBySlug,
  getArticleRecommendedPlatforms,
} from "@/lib/content/articles";
import {
  RobinbetActionButtons,
  RobinbetActionButtonsFallback,
} from "@/components/layout/robinbet-action-buttons";
import { kategoriEtiketi } from "@/lib/content/category-labels";
import { siteConfig } from "@/lib/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = `/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url: new URL(url, siteConfig.url).toString(),
      title: article.title,
      description: article.description,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = article.relatedSlugs
    .map((s) => articles.find((a) => a.slug === s))
    .filter((a): a is (typeof articles)[number] => Boolean(a));

  const recommended = getArticleRecommendedPlatforms(article);
  const kategori = kategoriEtiketi[article.category];

  return (
    <>
      <ArticleJsonLd
        headline={article.title}
        description={article.description}
        datePublished={article.publishedAt}
        dateModified={article.updatedAt}
        urlPath={`/articles/${article.slug}`}
        keywords={article.keywords}
      />
      <FaqJsonLd items={article.faq} />

      <article>
        <header className="border-b border-blue-200/60 bg-white/90 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <nav className="text-sm text-zinc-500" aria-label="Yer imleri">
              <ol className="flex flex-wrap gap-2">
                <li>
                  <Link className="hover:text-foreground" href="/">
                    Ana sayfa
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    className="hover:text-foreground"
                    href={`/category/${article.category}`}
                  >
                    {kategori}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-zinc-800">Yazı</li>
              </ol>
            </nav>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {kategori} · {article.readMinutes} dk okuma
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl sm:leading-tight">
              {article.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
              {article.description}
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              Yayımlandı {article.publishedAt} · Son güncelleme{" "}
              {article.updatedAt}
            </p>
            <div className="mt-6 max-w-2xl rounded-2xl border border-blue-200 bg-sky-50/90 p-4">
              <Suspense
                fallback={<RobinbetActionButtonsFallback variant="compact" />}
              >
                <RobinbetActionButtons variant="compact" />
              </Suspense>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <TableOfContents sections={article.sections} />
            {related.length ? (
              <div className="mt-6 rounded-xl border border-zinc-200/80 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  İlgili okumalar
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  {related.map((a) =>
                    a ? (
                      <li key={a.slug}>
                        <Link
                          href={`/articles/${a.slug}`}
                          className="font-medium text-blue-900 underline-offset-4 hover:underline"
                        >
                          {a.title}
                        </Link>
                      </li>
                    ) : null,
                  )}
                </ul>
              </div>
            ) : null}
            <div className="mt-6 rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-4 text-sm text-zinc-600">
              <p className="font-semibold text-foreground">
                Sırada karşılaştırma
              </p>
              <p className="mt-2">
                Bonusları, minimum yatırımları ve notları yan yana görmek için
                karşılaştırma merkezini kullanın.
              </p>
              <Link
                href="/compare/platforms"
                className="mt-3 inline-flex font-semibold text-blue-900 underline-offset-4 hover:underline"
              >
                Karşılaştırma tablosunu aç
              </Link>
            </div>
          </aside>

          <div>
            <RecommendedPlatforms platforms={recommended} />
            <ArticleBody sections={article.sections} />
            <FaqSection items={article.faq} />
          </div>
        </div>
      </article>
    </>
  );
}
