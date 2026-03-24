import Link from "next/link";
import { Suspense } from "react";
import { PartnerOutboundLink } from "@/components/partner-outbound-link";
import { siteConfig } from "@/lib/content/site";

/**
 * Bu projede dış ortaklık yönlendirmesi yalnızca Suratbet (t2m.io) adresine yapılır.
 */
export function SuratbetPartnerCta() {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5 sm:p-6">
      <p className="text-sm font-semibold text-blue-950">
        Ortaklık bağlantımız: {siteConfig.partner.name}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-blue-900/85">
        Yukarıdaki marka hakkındaki metin genel bilgilendirme amaçlıdır; bu
        site o markanın resmi temsilcisi değildir. Dışarı giden tek izlenen
        ortaklık bağlantımız aşağıdadır ve{" "}
        <strong className="font-medium text-blue-950">
          {siteConfig.partner.affiliateUrl}
        </strong>{" "}
        adresine yönlendirir.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Suspense
          fallback={
            <a
              href={siteConfig.partner.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
            >
              Suratbet’e git — ortak bağlantı
            </a>
          }
        >
          <PartnerOutboundLink
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
          >
            Suratbet’e git — ortak bağlantı
          </PartnerOutboundLink>
        </Suspense>
        <Link
          href="/compare/platforms"
          className="inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 text-sm font-semibold text-blue-950 hover:bg-blue-100/80"
        >
          Karşılaştırma tablosu
        </Link>
      </div>
    </div>
  );
}
