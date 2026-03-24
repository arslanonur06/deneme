import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PartnerOutboundLink } from "@/components/partner-outbound-link";
import { ArticleJsonLd } from "@/components/seo/json-ld";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "@/lib/content/blog-posts";
import { siteConfig } from "@/lib/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url: new URL(url, siteConfig.url).toString(),
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const keywords = [
    post.title,
    "deneme bonusu",
    "casino bonusu",
    "çevrim şartı",
  ];

  return (
    <>
      <ArticleJsonLd
        headline={post.title}
        description={post.excerpt}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        urlPath={`/blog/${post.slug}`}
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
                  <Link href="/blog" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-zinc-800 line-clamp-1">{post.title}</li>
              </ol>
            </nav>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Kısa blog · {post.readMinutes} dk okuma
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl sm:leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-zinc-600">{post.excerpt}</p>
            <p className="mt-3 text-xs text-zinc-500">
              Yayın {post.publishedAt} · Güncelleme {post.updatedAt}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="space-y-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
            {post.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <aside className="mt-10 rounded-2xl border border-blue-200/70 bg-blue-50/40 p-5 text-sm text-blue-950">
            <p className="font-semibold">Suratbet ve güncel teklifler</p>
            <p className="mt-2 text-blue-900/90">
              Kampanyalar sık değişir. Güncel deneme veya hoş geldin koşulları
              için resmi sayfayı kontrol edin; karşılaştırma tablomuz genel
              notlar içindir.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Suspense
                fallback={
                  <a
                    href={siteConfig.partner.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900"
                  >
                    {siteConfig.partner.name}’i ziyaret et
                  </a>
                }
              >
                <PartnerOutboundLink
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900"
                >
                  {siteConfig.partner.name}’i ziyaret et
                </PartnerOutboundLink>
              </Suspense>
              <Link
                href="/compare/platforms"
                className="inline-flex items-center rounded-lg border border-blue-300 bg-white px-4 py-2 text-sm font-semibold text-blue-950 hover:bg-blue-50"
              >
                Karşılaştırma tablosu
              </Link>
            </div>
          </aside>

          <p className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-sm font-medium text-blue-900 underline-offset-4 hover:underline"
            >
              ← Tüm blog yazıları
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
