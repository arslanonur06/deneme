type FaqItem = { question: string; answer: string };

type FaqSectionProps = {
  items: FaqItem[];
};

export function FaqSection({ items }: FaqSectionProps) {
  if (!items.length) return null;

  return (
    <section
      className="mt-12 border-t border-zinc-200/80 pt-10"
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading" className="text-xl font-semibold tracking-tight">
        Sık sorulan sorular
      </h2>
      <dl className="mt-6 space-y-6">
        {items.map((item) => (
          <div key={item.question}>
            <dt className="text-base font-semibold text-foreground">
              {item.question}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-zinc-600">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
