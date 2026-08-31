import type { Metadata } from "next";
import ProjectsSection from "@/components/projects/ProjectsSection";
import { portfolioPageIntro } from "@/lib/projects-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Progetti | Ingegneri & Co",
  description: portfolioPageIntro,
  alternates: {
    canonical: `${siteConfig.url}/progetti`,
  },
  openGraph: {
    title: "Progetti | Ingegneri & Co",
    description: portfolioPageIntro,
    type: "website",
    locale: "it_IT",
    url: `${siteConfig.url}/progetti`,
  },
};

export default function ProgettiPage() {
  return (
    <ProjectsSection
      id="portfolio"
      title="Progetti"
      label="Portfolio"
      intro={portfolioPageIntro}
      className="section-padding bg-gray-light"
      headingLevel="h1"
    />
  );
}
