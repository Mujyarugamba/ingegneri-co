import Link from "next/link";
import ProjectIconDisplay from "@/components/projects/ProjectIcon";
import {
  getProjectCardHref,
  type Project,
} from "@/lib/projects-data";

type ProjectCardProps = {
  project: Project;
};

function ProjectCardContent({ project }: ProjectCardProps) {
  return (
    <>
      <div className="mb-6 inline-flex rounded-xl bg-tech-blue-pale p-3.5 text-tech-blue transition-all duration-300 group-hover:bg-tech-blue group-hover:text-white">
        <ProjectIconDisplay icon={project.icon} />
      </div>

      <h3 className="text-xl font-bold tracking-tight text-anthracite">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-semibold text-tech-blue">
        {project.subtitle}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-gray-muted">
        {project.description}
      </p>

      {project.skills.length > 0 && (
        <div className="mt-6 border-t border-gray-border pt-6">
          <p className="text-xs font-semibold tracking-widest text-gray-muted uppercase">
            Competenze
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {project.skills.map((skill) => (
              <li
                key={skill}
                className="flex items-start gap-2.5 text-sm text-anthracite-soft"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-tech-blue" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 pt-2">
        {project.cta.comingSoon ? (
          <span className="inline-flex cursor-default items-center justify-center rounded-lg border border-gray-border bg-gray-light px-5 py-2.5 text-sm font-medium text-gray-muted">
            {project.cta.label}
          </span>
        ) : (
          <span className="btn-outline-dark">{project.cta.label}</span>
        )}
      </div>
    </>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const href = getProjectCardHref(project);

  if (href) {
    return (
      <Link
        href={href}
        className="card-elegant group flex flex-col transition-all duration-300"
      >
        <ProjectCardContent project={project} />
      </Link>
    );
  }

  return (
    <article className="card-elegant group flex flex-col">
      <ProjectCardContent project={project} />
    </article>
  );
}
