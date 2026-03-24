import Link from "next/link";
import { articles } from "@/lib/content/articles";

const topicClusters = [
  {
    title: "Rehberler",
    description: "Temeller, kasa çerçevesi ve dürüst beklenti yönetimi.",
    slugs: [
      "how-to-play-online-slots-beginners-guide",
      "european-roulette-strategy-basics",
    ],
  },
  {
    title: "Slotlar",
    description: "Ödeme tabloları ve özellikler için mekaniğe odaklı anlatımlar.",
    slugs: ["understanding-slot-features-wilds-scatters-and-bonus-rounds"],
  },
  {
    title: "İnceleme ve karşılaştırma",
    description: "İşletme araştırması ve düşük yatırım kontrol listeleri.",
    slugs: ["best-platforms-for-low-deposit-play"],
  },
] as const;

export function InternalLinkCluster() {
  return (
    <section className="mt-16" aria-labelledby="clusters-heading">
      <h2
        id="clusters-heading"
        className="text-2xl font-semibold tracking-tight"
      >
        Konu kümeleri
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-zinc-600 sm:text-base">
        İçerik, okuyucuların (ve arama motorlarının) temellerden karşılaştırmaya
        doğru mantıksal bir yol izlemesi için gruplandı—anahtar kelime
        doldurma olmadan.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {topicClusters.map((cluster) => (
          <div
            key={cluster.title}
            className="rounded-2xl border border-zinc-200/80 bg-white p-5"
          >
            <h3 className="text-base font-semibold">{cluster.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{cluster.description}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {cluster.slugs.map((slug) => {
                const article = articles.find((a) => a.slug === slug);
                if (!article) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/articles/${slug}`}
                      className="font-medium text-blue-900 underline-offset-4 hover:underline"
                    >
                      {article.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
