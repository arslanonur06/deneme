"use client";

import { useMemo, useState } from "react";
import { usePartnerAffiliateHref } from "@/hooks/use-partner-affiliate-href";
import type { Platform } from "@/lib/content/platforms";

type SortKey = "rating" | "minDeposit" | "name";

const depositFilters = [
  { label: "Tümü", value: 0 },
  { label: "10 $ ve altı", value: 10 },
  { label: "15 $ ve altı", value: 15 },
] as const;

type PlatformComparisonInnerProps = {
  platforms: Platform[];
  partnerAffiliateHref: string;
};

export function PlatformComparisonInner({
  platforms,
  partnerAffiliateHref,
}: PlatformComparisonInnerProps) {
  const [sortKey, setSortKey] = useState<SortKey>("rating");
  const [maxDeposit, setMaxDeposit] = useState<number>(0);

  const rows = useMemo(() => {
    const filtered =
      maxDeposit === 0
        ? platforms
        : platforms.filter((p) => p.minDepositNumeric <= maxDeposit);
    const sorted = [...filtered];
    sorted.sort((a, b) => {
      if (sortKey === "rating") return b.rating - a.rating;
      if (sortKey === "minDeposit")
        return a.minDepositNumeric - b.minDepositNumeric;
      return a.name.localeCompare(b.name, "tr");
    });
    return sorted;
  }, [platforms, sortKey, maxDeposit]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <span className="sr-only" id="sort-label">
            Sıralama
          </span>
          <div
            role="group"
            aria-labelledby="sort-label"
            className="flex flex-wrap gap-2"
          >
            {(
              [
                ["rating", "En yüksek puan"],
                ["minDeposit", "En düşük yatırım"],
                ["name", "İsim A–Z"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setSortKey(key)}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                  sortKey === key
                    ? "border-blue-700 bg-blue-700 text-white"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="deposit-filter"
            className="text-xs font-semibold uppercase tracking-wide text-zinc-500"
          >
            Yatırım üst sınırına göre filtre
          </label>
          <select
            id="deposit-filter"
            value={maxDeposit}
            onChange={(e) => setMaxDeposit(Number(e.target.value))}
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-foreground"
          >
            {depositFilters.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-zinc-200/80">
        <table className="min-w-[720px] w-full border-collapse text-left text-sm">
          <thead className="bg-zinc-50 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            <tr>
              <th scope="col" className="px-4 py-3">
                Platform
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
              <th
                scope="col"
                className="sticky right-0 z-10 bg-zinc-50 px-4 py-3"
              >
                <span className="sr-only sm:not-sr-only">Eylem</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 bg-white">
            {rows.map((p) => (
              <tr key={p.slug} className="align-top">
                <td className="px-4 py-4 font-medium text-foreground">
                  {p.name}
                </td>
                <td className="px-4 py-4 text-zinc-600">{p.bonus}</td>
                <td className="px-4 py-4 tabular-nums text-zinc-600">
                  {p.minDeposit}
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold tabular-nums text-zinc-800">
                    {p.rating.toFixed(1)}
                    <span className="font-normal text-zinc-500">/5</span>
                  </span>
                </td>
                <td className="sticky right-0 bg-white px-4 py-4 shadow-[-8px_0_12px_-8px_rgba(0,0,0,0.08)]">
                  <a
                    href={
                      p.isPartnerAffiliate ? partnerAffiliateHref : p.ctaUrl
                    }
                    target="_blank"
                    rel={
                      p.isPartnerAffiliate
                        ? "noopener noreferrer sponsored"
                        : "noopener noreferrer nofollow"
                    }
                    className={
                      p.isPartnerAffiliate
                        ? "inline-flex min-w-[120px] items-center justify-center rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-900 sm:text-sm"
                        : "inline-flex min-w-[120px] items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold text-zinc-600 transition-colors hover:bg-zinc-100 sm:text-sm"
                    }
                  >
                    {p.ctaLabel}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {rows.length === 0 ? (
        <p className="text-sm text-zinc-600">
          Bu filtreye uyan platform yok—yatırım üst sınırını genişletmeyi deneyin.
        </p>
      ) : null}
    </div>
  );
}

type PlatformComparisonClientProps = {
  platforms: Platform[];
};

export function PlatformComparisonClient({
  platforms,
}: PlatformComparisonClientProps) {
  const partnerAffiliateHref = usePartnerAffiliateHref();
  return (
    <PlatformComparisonInner
      platforms={platforms}
      partnerAffiliateHref={partnerAffiliateHref}
    />
  );
}
