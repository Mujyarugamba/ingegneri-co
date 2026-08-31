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
  headingLevel?: "h1" | "h2";
};

export default function ProjectsSection({
  id = "progetti",
  title = "Progetti e Innovazione",
  label = "Portfolio",
  intro = projectsIntro,
  items = projects,
  className = "section-padding bg-gray-light",
  headingLevel = "h2",
}: ProjectsSectionProps) {
  const Heading = headingLevel;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={className}
    >
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="section-label">{label}</p>
          <Heading id={`${id}-title`} className="section-title">
            {title}
          </Heading>
          <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
            {intro}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:gap-8 lg:grid-cols-3">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
