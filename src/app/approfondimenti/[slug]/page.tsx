import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetail from "@/components/articles/ArticleDetail";
import {
  getAllArticleSlugs,
  getArticleBySlug,
} from "@/lib/articles-data";
import { siteConfig } from "@/lib/site-config";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Approfondimento non trovato | Ingegneri & Co", robots: { index: false } };
  }

  const canonicalUrl = `${siteConfig.url}/approfondimenti/${slug}`;

  return {
    title: `${article.title} | Ingegneri & Co`,
    description: article.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} | Ingegneri & Co`,
      description: article.description,
      type: "article",
      locale: "it_IT",
      url: canonicalUrl,
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/approfondimenti/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
    inLanguage: "it-IT",
    mainEntityOfPage: canonicalUrl,
    author: {
      "@id": `${siteConfig.url}/#organization`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Approfondimenti",
        item: `${siteConfig.url}/approfondimenti`,
      },
      { "@type": "ListItem", position: 3, name: article.title, item: canonicalUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticleDetail article={article} />
    </>
  );
}
