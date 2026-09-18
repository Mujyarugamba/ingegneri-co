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
  showHeader?: boolean;
};

export default function ProjectsSection({
  id = "progetti",
  title = "Progetti e Innovazione",
  label = "Portfolio",
  intro = projectsIntro,
  items = projects,
  className = "section-padding bg-gray-light",
  headingLevel = "h2",
  showHeader = true,
}: ProjectsSectionProps) {
  const Heading = headingLevel;
  const cardHeadingLevel = showHeader && headingLevel === "h2" ? "h3" : "h2";
  const gridCols = items.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <section
      id={id}
      {...(showHeader
        ? { "aria-labelledby": `${id}-title` }
        : { "aria-label": title })}
      className={className}
    >
      <div className="page-container">
        {showHeader && (
          <div className="max-w-3xl">
            <p className="section-label">{label}</p>
            <Heading id={`${id}-title`} className="section-title">
              {title}
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
              {intro}
            </p>
          </div>
        )}

        <div className={`grid grid-cols-1 gap-6 md:gap-8 ${showHeader ? "mt-12 md:mt-16" : ""} ${gridCols}`}>
          {items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              headingLevel={cardHeadingLevel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
