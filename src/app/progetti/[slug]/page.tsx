import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/ProjectDetail";
import {
  getProjectBySlug,
  getProjectDetailSlugs,
} from "@/lib/projects-data";

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
    return { title: "Progetto non trovato | Ingegneri & Co" };
  }

  return {
    title: `${project.title} | Ingegneri & Co`,
    description: project.description,
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
