import Link from "next/link";
import { getPlatformsSortedByRating } from "@/lib/content/platforms";
import { siteConfig } from "@/lib/content/site";

const relSponsored = "noopener noreferrer sponsored" as const;

export function BestPlatformsPreview() {
  const top = getPlatformsSortedByRating().slice(0, 4);

  return (
    <section className="mt-16" aria-labelledby="best-platforms-heading">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="best-platforms-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Kısa tablo — Türkiye pazarı
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 sm:text-base">
            Aşağıda yalnızca özet puan ve notlar var; bonus şartlarını her zaman
            ilgili markanın kendi sayfasından okuyun.
          </p>
        </div>
        <Link
          href="/compare/platforms"
          className="text-sm font-semibold text-forest-900 underline-offset-4 hover:underline"
        >
          Tam karşılaştırmayı aç
        </Link>
      </div>

      <div className="mt-6 overflow-x-auto rounded-xl border border-zinc-200/80">
        <table className="min-w-[640px] w-full border-collapse text-left text-sm">
          <thead className="bg-zinc-50 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            <tr>
              <th scope="col" className="px-4 py-3">
                Marka
              </th>
              <th scope="col" className="px-4 py-3">
                Bonus (özet)
              </th>
              <th scope="col" className="px-4 py-3">
                Min. yatırım
              </th>
              <th scope="col" className="px-4 py-3">
                Puan
              </th>
              <th scope="col" className="px-4 py-3">
                Sonraki adım
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 bg-white">
            {top.map((p) => (
              <tr key={p.slug}>
                <td className="px-4 py-3 font-medium">{p.name}</td>
                <td className="px-4 py-3 text-zinc-600">
                  {p.slug === "robinbet" ? (
                    <>
                      Kampanya metinleri sık değişir;{" "}
                      <a
                        href={siteConfig.partner.affiliateUrl}
                        target="_blank"
                        rel={relSponsored}
                        className="font-semibold text-forest-800 underline decoration-gold-400 underline-offset-2 hover:text-forest-950"
                      >
                        güncel giriş notu
                      </a>{" "}
                      ve duyuru için burayı kullanın.
                    </>
                  ) : (
                    p.bonus
                  )}
                </td>
                <td className="px-4 py-3 tabular-nums text-zinc-600">
                  {p.minDeposit}
                </td>
                <td className="px-4 py-3 tabular-nums text-zinc-600">
                  {p.rating.toFixed(1)} / 5
                </td>
                <td className="px-4 py-3">
                  <Link
                    href="/compare/platforms"
                    className="font-semibold text-forest-900 underline-offset-4 hover:underline"
                  >
                    Karşılaştır
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
