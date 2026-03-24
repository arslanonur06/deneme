import { siteConfig } from "@/lib/content/site";

type ArticleJsonLdProps = {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  urlPath: string;
  keywords?: string[];
};

export function ArticleJsonLd({
  headline,
  description,
  datePublished,
  dateModified,
  urlPath,
  keywords,
}: ArticleJsonLdProps) {
  const url = new URL(urlPath, siteConfig.url).toString();
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type FaqJsonLdProps = {
  items: { question: string; answer: string }[];
};

export function FaqJsonLd({ items }: FaqJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type OrganizationJsonLdProps = {
  name: string;
  url: string;
  description: string;
};

export function OrganizationJsonLd({
  name,
  url,
  description,
}: OrganizationJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    description,
    sameAs: [] as string[],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
