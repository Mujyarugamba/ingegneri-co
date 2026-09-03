import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/ProjectDetail";
import {
  getProjectBySlug,
  getProjectDetailSlugs,
} from "@/lib/projects-data";
import { siteConfig } from "@/lib/site-config";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.cta.comingSoon) {
    return { title: "Progetto non trovato | Ingegneri & Co", robots: { index: false } };
  }

  const canonicalUrl = `${siteConfig.url}/progetti/${slug}`;

  return {
    title: `${project.title} | Ingegneri & Co`,
    description: project.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Ingegneri & Co`,
      description: project.description,
      type: "website",
      locale: "it_IT",
      url: canonicalUrl,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.cta.comingSoon) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/progetti/${slug}`;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: canonicalUrl,
    inLanguage: "it-IT",
    creator: {
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
        name: "Progetti",
        item: `${siteConfig.url}/progetti`,
      },
      { "@type": "ListItem", position: 3, name: project.title, item: canonicalUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProjectDetail project={project} />
    </>
  );
}
