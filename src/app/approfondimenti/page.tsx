import type { Metadata } from "next";
import ArticlesSection from "@/components/articles/ArticlesSection";
import { approfondimentiIntro } from "@/lib/articles-data";

export const metadata: Metadata = {
  title: "Approfondimenti | Ingegneri & Co",
  description: approfondimentiIntro,
  openGraph: {
    title: "Approfondimenti | Ingegneri & Co",
    description: approfondimentiIntro,
    type: "website",
    locale: "it_IT",
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
