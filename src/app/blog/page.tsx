import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import {
  RobinbetActionButtons,
  RobinbetActionButtonsFallback,
} from "@/components/layout/robinbet-action-buttons";
import { blogPosts } from "@/lib/content/blog-posts";
import { siteConfig } from "@/lib/content/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — bonus, kampanya ve kısa notlar",
  description:
    "Deneme bonusları, çevrim şartları ve kampanyalar hakkında kısa, sık güncellenen blog yazıları.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: new URL("/blog", siteConfig.url).toString(),
    title: `Blog — ${siteConfig.name}`,
    description:
      "Bonus ve kampanyalarla ilgili kısa yazılar; uzun rehberler değil, pratik notlar.",
  },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );

  return (
    <main>
      <header className="border-b border-blue-200/60 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            Kısa blog
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Bonus ve kampanya notları
          </h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Deneme bonusları, çevrim, free spin ve benzeri konularda sürekli
            eklenen kısa yazılar. Uzun rehberler yerine hızlı okuma için
            tasarlandı; güncel teklifler için her zaman işletmenin resmi
            sayfasını kontrol edin.
          </p>
          <div className="mt-6 rounded-2xl border border-blue-200 bg-sky-50/90 p-4">
            <Suspense
              fallback={<RobinbetActionButtonsFallback variant="compact" />}
            >
              <RobinbetActionButtons variant="compact" />
            </Suspense>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <ul className="space-y-6">
          {sorted.map((post) => (
            <li key={post.slug}>
              <article className="rounded-2xl border border-zinc-200/80 bg-white p-5 transition-colors hover:border-blue-200">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-semibold text-foreground hover:text-blue-900"
                >
                  {post.title}
                </Link>
                <p className="mt-2 text-sm text-zinc-600">{post.excerpt}</p>
                <p className="mt-3 text-xs text-zinc-500">
                  Güncellendi {post.updatedAt} · {post.readMinutes} dk okuma
                </p>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Yeni kısa yazılar düzenli eklenir.{" "}
          <Link
            href="/markalar"
            className="font-medium text-blue-900 underline-offset-4 hover:underline"
          >
            Popüler marka bilgi sayfaları
          </Link>{" "}
          veya tam karşılaştırma için{" "}
          <Link
            href="/compare/platforms"
            className="font-medium text-blue-900 underline-offset-4 hover:underline"
          >
            platform tablosuna
          </Link>{" "}
          bakın.
        </p>
      </div>
    </main>
  );
}
