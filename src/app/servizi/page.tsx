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
              <ul className="mt-6 space-y-3 text-gray-muted">
                {ecosystem.services.map((service) => (
                  <li key={service} className="flex gap-3">
                    <span aria-hidden="true">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <Link href={ecosystem.href} className="btn-primary mt-8 inline-flex">
                Scopri l&apos;area
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
