import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/content/blog-posts";
import { getAllArticleSlugs } from "@/lib/content/articles";
import { getAllOperatorSlugs } from "@/lib/content/operator-spotlights";
import { siteConfig } from "@/lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/compare/platforms`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${base}/markalar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
  ];

  const blogEntries: MetadataRoute.Sitemap = getAllBlogSlugs().map(
    (slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }),
  );

  const markaEntries: MetadataRoute.Sitemap = getAllOperatorSlugs().map(
    (slug) => ({
      url: `${base}/markalar/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.72,
    }),
  );

  const articleEntries: MetadataRoute.Sitemap = getAllArticleSlugs().map(
    (slug) => ({
      url: `${base}/articles/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const categoryEntries: MetadataRoute.Sitemap = [
    "slots",
    "guides",
    "reviews",
  ].map((category) => ({
    url: `${base}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...categoryEntries,
    ...blogEntries,
    ...markaEntries,
    ...articleEntries,
  ];
}
