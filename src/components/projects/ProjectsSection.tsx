import ProjectCard from "@/components/projects/ProjectCard";
import {
  projects,
  projectsIntro,
  type Project,
} from "@/lib/projects-data";

export type ProjectsSectionProps = {
  id?: string;
  title?: string;
  label?: string;
  intro?: string;
  items?: Project[];
  className?: string;
};

export default function ProjectsSection({
  id = "progetti",
  title = "Progetti e Innovazione",
  label = "Portfolio",
  intro = projectsIntro,
  items = projects,
  className = "section-padding bg-gray-light",
}: ProjectsSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={className}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="section-label">{label}</p>
          <h2 id={`${id}-title`} className="section-title">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
            {intro}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
