import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ArticlesSection from "@/components/articles/ArticlesSection";
import { approfondimentiIntro, articles } from "@/lib/articles-data";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/approfondimenti`;

export const metadata: Metadata = {
  title: "Approfondimenti tecnici | Ingegneri & Co",
  description: approfondimentiIntro,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Approfondimenti tecnici | Ingegneri & Co",
    description: approfondimentiIntro,
    type: "website",
    locale: "it_IT",
    url: canonicalUrl,
  },
};

export default function ApprofondimentiPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Approfondimenti", item: canonicalUrl },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Approfondimenti Ingegneri & Co",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.title,
      url: `${siteConfig.url}/approfondimenti/${article.slug}`,
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <PageHero
        eyebrow="Editoriale"
        title="Approfondimenti tecnici"
        intro={approfondimentiIntro}
        current="Approfondimenti"
      />

      <ArticlesSection
        id="approfondimenti-index"
        title="Approfondimenti"
        className="section-padding bg-gray-light"
        columns={3}
        showHeader={false}
      />
    </main>
  );
}
