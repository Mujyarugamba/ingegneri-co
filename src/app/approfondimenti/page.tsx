import type { Metadata } from "next";
import ArticlesSection from "@/components/articles/ArticlesSection";
import { approfondimentiIntro } from "@/lib/articles-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Approfondimenti | Ingegneri & Co",
  description: approfondimentiIntro,
  alternates: {
    canonical: `${siteConfig.url}/approfondimenti`,
  },
  openGraph: {
    title: "Approfondimenti | Ingegneri & Co",
    description: approfondimentiIntro,
    type: "website",
    locale: "it_IT",
    url: `${siteConfig.url}/approfondimenti`,
  },
};

export default function ApprofondimentiPage() {
  return (
    <ArticlesSection
      id="approfondimenti-index"
      title="Approfondimenti"
      label="Editoriale"
      intro={approfondimentiIntro}
      className="section-padding bg-gray-light"
      columns={3}
    />
  );
}
