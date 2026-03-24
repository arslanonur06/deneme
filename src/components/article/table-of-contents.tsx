import type { ArticleSection } from "@/lib/content/articles";

type TableOfContentsProps = {
  sections: ArticleSection[];
};

export function TableOfContents({ sections }: TableOfContentsProps) {
  const items = sections.filter((s) => s.level === 2);

  if (!items.length) return null;

  return (
    <nav
      aria-label="İçindekiler"
      className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
        Bu sayfada
      </p>
      <ol className="mt-3 space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-zinc-700 underline-offset-4 hover:text-foreground hover:underline"
            >
              <span className="mr-2 tabular-nums text-zinc-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
