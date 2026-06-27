import Link from "next/link";
import type { Project, ProjectIcon } from "@/lib/projects-data";

function IconPlatform() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 7.5a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v.75M6.75 7.5h10.5M6.75 7.5v7.875A2.625 2.625 0 0 0 9.375 18h5.25A2.625 2.625 0 0 0 17.25 15.375V7.5m-10.5 0V6a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v1.5m-6 7.5h.008v.008H12v-.008Z"
      />
    </svg>
  );
}

function IconPortal() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.064.208-2.082.584-3m0 0A11.953 11.953 0 0 1 12 6.5c2.998 0 5.74 1.1 7.843 2.918"
      />
    </svg>
  );
}

function IconInnovation() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  );
}

const projectIcons: Record<ProjectIcon, () => React.JSX.Element> = {
  platform: IconPlatform,
  portal: IconPortal,
  innovation: IconInnovation,
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = projectIcons[project.icon];

  return (
    <article className="card-elegant group flex flex-col p-8">
      <div className="mb-6 inline-flex rounded-xl bg-tech-blue-pale p-3.5 text-tech-blue transition-all duration-300 group-hover:bg-tech-blue group-hover:text-white">
        <Icon />
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
          <Link href={project.cta.href ?? "#"} className="btn-outline-dark">
            {project.cta.label}
          </Link>
        )}
      </div>
    </article>
  );
}
