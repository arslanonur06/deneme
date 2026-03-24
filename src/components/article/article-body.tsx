import type { ArticleSection } from "@/lib/content/articles";

type ArticleBodyProps = {
  sections: ArticleSection[];
};

export function ArticleBody({ sections }: ArticleBodyProps) {
  return (
    <div className="article-body space-y-10">
      {sections.map((section) => {
        const HeadingTag = section.level === 2 ? "h2" : "h3";
        return (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <HeadingTag className="text-xl font-semibold tracking-tight sm:text-2xl">
              {section.heading}
            </HeadingTag>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              {section.paragraphs.map((p, i) => (
                <p key={`${section.id}-${i}`}>{p}</p>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
