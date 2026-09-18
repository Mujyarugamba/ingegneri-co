import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProjectsSection from "@/components/projects/ProjectsSection";
import { portfolioPageIntro, projects } from "@/lib/projects-data";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/progetti`;

export const metadata: Metadata = {
  title: "Progetti e casi applicativi | Ingegneri & Co",
  description: portfolioPageIntro,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Progetti e casi applicativi | Ingegneri & Co",
    description: portfolioPageIntro,
    type: "website",
    locale: "it_IT",
    url: canonicalUrl,
  },
};

export default function ProgettiPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Progetti", item: canonicalUrl },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Progetti Ingegneri & Co",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: project.cta.href ? `${siteConfig.url}${project.cta.href}` : canonicalUrl,
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <PageHero
        eyebrow="Portfolio"
        title="Progetti e casi applicativi"
        intro={portfolioPageIntro}
        current="Progetti"
      />

      <ProjectsSection
        id="portfolio"
        title="Progetti"
        className="section-padding bg-gray-light"
        showHeader={false}
      />

      <section className="border-t border-gray-border bg-white">
        <div className="page-container py-12 text-center md:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-anthracite">Hai un progetto da sviluppare?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-gray-muted">
            Possiamo valutare insieme requisiti, vincoli tecnici, integrazioni e percorso di sviluppo.
          </p>
          <Link href="/contatti" className="btn-primary mt-6">Parliamone</Link>
        </div>
      </section>
    </main>
  );
}
