import Link from "next/link";
import { Suspense } from "react";
import {
  RobinbetActionButtons,
  RobinbetActionButtonsFallback,
} from "@/components/layout/robinbet-action-buttons";
import { siteConfig } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-emerald-200/70 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/90 p-4 sm:p-5">
          <p className="text-sm font-semibold text-emerald-950">
            {siteConfig.partner.name} (@{siteConfig.partner.telegramHandle}) — kanal
          </p>
          <Suspense
            fallback={<RobinbetActionButtonsFallback className="mt-3" variant="default" />}
          >
            <RobinbetActionButtons className="mt-3" variant="default" />
          </Suspense>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Keşfet</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <Link className="hover:text-foreground" href="/blog">
                  Blog (kısa yazılar)
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground" href="/markalar">
                  Popüler markalar
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground" href="/compare/platforms">
                  Platform karşılaştırması
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground" href="/category/guides">
                  Rehberler
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground" href="/#categories">
                  İçerik kümeleri
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 rounded-lg border border-amber-200/80 bg-amber-50/80 p-4 text-sm text-amber-950">
          <strong className="font-semibold">Sorumlu oyun:</strong> Kontrolsüz
          kumar zararlı olabilir. Mevcutsa yatırım limitleri, gerçeklik
          kontrolleri ve kendini dışlama araçlarını kullanın. Desteğe ihtiyaç
          duyarsanız ülkenizde tanınan sorumlu oyun kuruluşlarına başvurun.
        </div>
        <p className="mt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
