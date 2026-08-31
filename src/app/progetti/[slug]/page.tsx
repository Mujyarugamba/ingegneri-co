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
      type: "article",
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

  return <ProjectDetail project={project} />;
}
