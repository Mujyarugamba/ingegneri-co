import type { Metadata } from "next";
import ProjectsSection from "@/components/projects/ProjectsSection";
import { portfolioPageIntro } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Progetti | Ingegneri & Co",
  description: portfolioPageIntro,
};

export default function ProgettiPage() {
  return (
    <ProjectsSection
      id="portfolio"
      title="Progetti"
      label="Portfolio"
      intro={portfolioPageIntro}
      className="section-padding bg-gray-light"
    />
  );
}
