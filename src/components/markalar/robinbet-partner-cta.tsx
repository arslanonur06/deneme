import Link from "next/link";
import { Suspense } from "react";
import { PartnerOutboundLink } from "@/components/partner-outbound-link";
import { siteConfig } from "@/lib/content/site";

/**
 * Dış ortaklık yönlendirmesi Robinbet Telegram (yapılandırılmış ortak URL) üzerinden yapılır.
 */
export function RobinbetPartnerCta() {
  return (
    <div className="rounded-2xl border border-forest-200 bg-forest-50/60 p-5 sm:p-6">
      <p className="text-sm font-semibold text-forest-950">
        Ortaklık bağlantımız: {siteConfig.partner.name}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-forest-900/85">
        Yukarıdaki marka hakkındaki metin genel bilgilendirme amaçlıdır; bu
        site o markanın resmi temsilcisi değildir. Dışarı giden tek izlenen
        ortaklık bağlantımız aşağıdaki düğmede; Robinbet Telegram hattına
        gider.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Suspense
          fallback={
            <a
              href={siteConfig.partner.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
            >
              Robinbet Telegram’a git
            </a>
          }
        >
          <PartnerOutboundLink
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
          >
            Robinbet Telegram’a git
          </PartnerOutboundLink>
        </Suspense>
        <Link
          href="/compare/platforms"
          className="inline-flex items-center justify-center rounded-xl border border-gold-300 bg-white px-5 py-3 text-sm font-semibold text-forest-950 hover:bg-gold-50/90"
        >
          Karşılaştırma tablosu
        </Link>
      </div>
    </div>
  );
}
