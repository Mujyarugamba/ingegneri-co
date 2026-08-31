import Link from "next/link";
import { serviceEcosystems } from "@/lib/site-config";

export default function HomeServiceEcosystems() {
  return (
    <section id="servizi" aria-labelledby="ecosistemi-title" className="section-padding bg-gray-light">
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="section-label">Due ecosistemi</p>
          <h2 id="ecosistemi-title" className="section-title">
            Competenze tecniche e digitali, organizzate in modo chiaro
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
            Ingegneri &amp; Co integra due ambiti distinti ma complementari: i servizi per edifici, impianti ed energia e le soluzioni per digitalizzazione, automazione e intelligenza artificiale applicata alle imprese.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {serviceEcosystems.map((ecosystem, index) => (
            <article key={ecosystem.href} className="rounded-2xl border border-gray-border bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tech-blue">Ecosistema {index + 1}</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-anthracite">{ecosystem.label}</h3>
              <p className="mt-4 leading-relaxed text-gray-muted">{ecosystem.description}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {ecosystem.services.slice(0, 6).map((service) => (
                  <li key={service.href}>
                    <Link href={service.href} className="text-sm font-medium text-anthracite-soft transition hover:text-tech-blue">
                      {service.label} →
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={ecosystem.href} className="btn-primary mt-8 inline-flex">Esplora l&apos;ecosistema</Link>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/servizi" className="btn-outline-dark inline-flex">Vedi tutti i servizi</Link>
        </div>
      </div>
    </section>
  );
}
