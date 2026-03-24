import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SuratbetPartnerCta } from "@/components/markalar/suratbet-partner-cta";
import { ArticleJsonLd } from "@/components/seo/json-ld";
import {
  getAllOperatorSlugs,
  getOperatorBySlug,
} from "@/lib/content/operator-spotlights";
import { siteConfig } from "@/lib/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllOperatorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const op = getOperatorBySlug(slug);
  if (!op) return {};

  const path = `/markalar/${op.slug}`;
  return {
    title: op.title,
    description: op.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: new URL(path, siteConfig.url).toString(),
      title: op.title,
      description: op.metaDescription,
      publishedTime: op.publishedAt,
      modifiedTime: op.updatedAt,
    },
  };
}

export default async function MarkaPage({ params }: PageProps) {
  const { slug } = await params;
  const op = getOperatorBySlug(slug);
  if (!op) notFound();

  const keywords = [
    op.brandName,
    "online bahis",
    "casino",
    "Türkiye",
    "Suratbet",
  ];

  return (
    <>
      <ArticleJsonLd
        headline={op.title}
        description={op.metaDescription}
        datePublished={op.publishedAt}
        dateModified={op.updatedAt}
        urlPath={`/markalar/${op.slug}`}
        keywords={keywords}
      />

      <article>
        <header className="border-b border-zinc-200/80 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
            <nav className="text-sm text-zinc-500" aria-label="Yer imleri">
              <ol className="flex flex-wrap gap-2">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Ana sayfa
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/markalar" className="hover:text-foreground">
                    Markalar
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-zinc-800">{op.brandName}</li>
              </ol>
            </nav>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Bilgi sayfası · {op.readMinutes} dk okuma
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl sm:leading-tight">
              {op.title}
            </h1>
            <p className="mt-4 text-sm text-zinc-600">{op.metaDescription}</p>
            <p className="mt-3 text-xs text-zinc-500">
              Yayın {op.publishedAt} · Güncelleme {op.updatedAt}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="space-y-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
            {op.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10">
            <SuratbetPartnerCta />
          </div>

          <p className="mt-10 text-center">
            <Link
              href="/markalar"
              className="text-sm font-medium text-blue-900 underline-offset-4 hover:underline"
            >
              ← Tüm markalar
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
