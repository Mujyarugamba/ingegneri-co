import type { Metadata } from "next";
import Link from "next/link";
import { serviceEcosystems, siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi`;

export const metadata: Metadata = {
  title: "Servizi | Ingegneri & Co",
  description:
    "Due ecosistemi di servizi: Ingegneria, Edilizia & Energia e Digitalizzazione, Automazione & AI per imprese e PMI.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Servizi | Ingegneri & Co",
    description:
      "Servizi tecnici per edilizia ed energia e soluzioni digitali, automazione e intelligenza artificiale per le imprese.",
    type: "website",
    locale: "it_IT",
    url: canonicalUrl,
  },
};

export default function ServiziPage() {
  return (
    <main>
      <section className="bg-anthracite py-14 md:py-20 lg:py-24">
        <div className="page-container">
          <p className="section-label text-tech-blue-light">Servizi</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Due ecosistemi, un unico approccio multidisciplinare
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-muted md:text-lg">
            Separiamo in modo chiaro i servizi legati a edifici, impianti ed energia dalle soluzioni dedicate a digitalizzazione, automazione e intelligenza artificiale per le imprese.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="page-container grid gap-6 lg:grid-cols-2">
          {serviceEcosystems.map((ecosystem) => (
            <article key={ecosystem.href} className="rounded-2xl border border-gray-border bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-anthracite">{ecosystem.label}</h2>
              <p className="mt-4 leading-relaxed text-gray-muted">{ecosystem.description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {ecosystem.services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group flex h-full items-start gap-3 rounded-xl border border-gray-border px-4 py-3 text-anthracite-soft transition hover:border-tech-blue/40 hover:bg-tech-blue-pale/40"
                    >
                      <span aria-hidden="true" className="mt-0.5 text-tech-blue">→</span>
                      <span className="font-medium group-hover:text-tech-blue">{service.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={ecosystem.href} className="btn-primary mt-8 inline-flex">
                Esplora l&apos;ecosistema
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
