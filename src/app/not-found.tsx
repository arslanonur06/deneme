import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-lg flex-1 flex-col justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold text-forest-900">404</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight">
        Sayfa bulunamadı
      </h1>
      <p className="mt-3 text-sm text-zinc-600">
        Sayfa taşınmış olabilir. Ana sayfayı veya karşılaştırma merkezini
        deneyin.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="inline-flex justify-center rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-forest-950 hover:bg-gold-400"
        >
          Ana sayfaya dön
        </Link>
        <Link
          href="/compare/platforms"
          className="inline-flex justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold hover:border-zinc-300"
        >
          Platformları karşılaştır
        </Link>
      </div>
    </main>
  );
}
