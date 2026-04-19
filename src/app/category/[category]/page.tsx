import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import {
  RobinbetActionButtons,
  RobinbetActionButtonsFallback,
} from "@/components/layout/robinbet-action-buttons";
import { getArticlesByCategory } from "@/lib/content/articles";
import { kategoriEtiketi } from "@/lib/content/category-labels";
import { siteConfig } from "@/lib/content/site";

const categories = ["slots", "guides", "reviews"] as const;

type Category = (typeof categories)[number];

type PageProps = { params: Promise<{ category: string }> };

export const revalidate = 3600;

function isCategory(value: string): value is Category {
  return (categories as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  if (!isCategory(category)) return {};

  const label = kategoriEtiketi[category];

  const title = `${label} — uzun kuyruklu makaleler ve açıklamalar`;
  const description = `${siteConfig.name} üzerinde ${label.toLowerCase()} yazıları: arama niyeti, iç bağlantılar ve okur güveni için yapılandırıldı.`;

  return {
    title,
    description,
    alternates: { canonical: `/category/${category}` },
    openGraph: {
      url: new URL(`/category/${category}`, siteConfig.url).toString(),
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  if (!isCategory(category)) notFound();

  const items = getArticlesByCategory(category);
  const label = kategoriEtiketi[category];

  return (
    <main>
      <header className="border-b border-blue-200/60 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            Kategori
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {label}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
            {label.toLowerCase()} odaklı sorgular için derlenmiş bir arşiv. Her
            metin karşılaştırmalarla uyumlu yazıldı; işletme desteğinin veya
            bölgesel kuralların yerine geçmez.
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

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {items.length === 0 ? (
          <p className="text-sm text-zinc-600">
            Henüz yazı yok—başka bir kategoriye bakın.
          </p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {items.map((article) => (
              <li key={article.slug}>
                <article className="h-full rounded-2xl border border-zinc-200/80 bg-white p-5">
                  <h2 className="text-lg font-semibold leading-snug">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="hover:text-blue-900"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-zinc-600">
                    {article.description}
                  </p>
                  <p className="mt-4 text-xs text-zinc-500">
                    Güncellendi {article.updatedAt}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        )}

        <section className="mt-14 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-6">
          <h2 className="text-base font-semibold">Diğer kümeleri keşfet</h2>
          <ul className="mt-3 flex flex-wrap gap-3 text-sm font-medium text-blue-900">
            {categories
              .filter((c) => c !== category)
              .map((c) => (
                <li key={c}>
                  <Link
                    className="underline-offset-4 hover:underline"
                    href={`/category/${c}`}
                  >
                    {kategoriEtiketi[c]}
                  </Link>
                </li>
              ))}
            <li>
              <Link
                className="underline-offset-4 hover:underline"
                href="/compare/platforms"
              >
                Karşılaştırma tablosu
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
