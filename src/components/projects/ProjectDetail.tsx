import Link from "next/link";
import ProjectIconDisplay from "@/components/projects/ProjectIcon";
import type { Project } from "@/lib/projects-data";

type ProjectDetailProps = {
  project: Project;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const bodyText = project.fullDescription ?? project.description;

  return (
    <main>
      <section className="relative overflow-hidden bg-anthracite">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #2563a8 0%, transparent 45%), radial-gradient(circle at 80% 20%, #1a4d7c 0%, transparent 35%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[3.5rem_3.5rem]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <Link
            href="/progetti"
            className="inline-flex items-center gap-2 text-sm font-medium text-tech-blue-light transition-colors hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Torna ai progetti
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="mb-6 inline-flex rounded-xl border border-white/10 bg-white/5 p-4 text-tech-blue-light">
              <ProjectIconDisplay icon={project.icon} className="h-7 w-7" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg font-medium text-tech-blue-light">
              {project.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="section-label">Il progetto</p>
              <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
                {bodyText}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="mt-10">
                  <p className="text-xs font-semibold tracking-widest text-gray-muted uppercase">
                    Funzionalità
                  </p>
                  <ul className="mt-4 flex flex-col gap-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 rounded-xl border border-gray-border bg-gray-light/50 px-5 py-4 text-sm leading-relaxed text-anthracite-soft"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tech-blue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              {project.skills.length > 0 && (
                <div className="card-elegant p-8">
                  <p className="text-xs font-semibold tracking-widest text-gray-muted uppercase">
                    Competenze utilizzate
                  </p>
                  <ul className="mt-5 flex flex-col gap-3">
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

              {project.detail && (
                <div className="mt-6">
                  <Link
                    href={project.detail.visitHref}
                    className="btn-primary w-full sm:w-auto"
                  >
                    {project.detail.visitLabel}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
