import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/ingegneria-edilizia-energia`;

export const metadata: Metadata = {
  title: "Ingegneria, Edilizia ed Energia | Ingegneri & Co",
  description:
    "Pratiche edilizie, Legge 10, efficientamento energetico, fotovoltaico, diagnosi energetiche, impianti e supporto tecnico per edifici e imprese.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Ingegneria, Edilizia ed Energia | Ingegneri & Co",
    description:
      "Servizi tecnici integrati per edifici, impianti, energia e adempimenti professionali.",
    type: "website",
    locale: "it_IT",
    url: canonicalUrl,
  },
};

const services = [
  ["Pratiche edilizie", "CILA, SCIA, Permessi di Costruire, sanatorie, conformità e documentazione tecnica."],
  ["Legge 10", "Relazioni tecniche energetiche e verifiche previste dalla normativa per nuovi edifici e interventi rilevanti."],
  ["Efficientamento energetico", "Analisi e interventi per ridurre consumi e migliorare le prestazioni di edifici e impianti."],
  ["Fotovoltaico", "Dimensionamento, progettazione e supporto tecnico per impianti fotovoltaici e sistemi di accumulo."],
  ["Diagnosi energetiche", "Analisi dei consumi e individuazione delle opportunità di miglioramento energetico."],
  ["Impianti", "Supporto tecnico per impianti elettrici, integrazione impiantistica e verifica delle prestazioni."],
  ["Direzione lavori e supporto tecnico", "Coordinamento tecnico, assistenza in cantiere e supporto lungo le fasi dell'intervento."],
] as const;

export default function EngineeringServicesPage() {
  return (
    <main>
      <section className="bg-anthracite py-14 md:py-20 lg:py-24">
        <div className="page-container">
          <p className="section-label text-tech-blue-light">Ecosistema 1</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Ingegneria, Edilizia &amp; Energia
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-muted md:text-lg">
            Servizi tecnici per edifici, impianti e interventi energetici, con gestione integrata degli aspetti progettuali, normativi e operativi.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="page-container grid gap-5 md:grid-cols-2">
          {services.map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-gray-border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-anthracite">{title}</h2>
              <p className="mt-3 leading-relaxed text-gray-muted">{description}</p>
            </article>
          ))}
        </div>
        <div className="page-container mt-10">
          <Link href="/contatti" className="btn-primary inline-flex">Parliamo del tuo intervento</Link>
        </div>
      </section>
    </main>
  );
}
