import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/digitalizzazione-automazione-ai`;

export const metadata: Metadata = {
  title: "Digitalizzazione, Automazione e AI per PMI | Ingegneri & Co",
  description:
    "Automazione dei processi, Transizione 5.0, portali web, integrazione software e dati, analisi documentale e intelligenza artificiale per PMI.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Digitalizzazione, Automazione e AI per PMI | Ingegneri & Co",
    description:
      "Soluzioni digitali, automazione e intelligenza artificiale applicata ai processi delle piccole e medie imprese.",
    type: "website",
    locale: "it_IT",
    url: canonicalUrl,
  },
};

const services = [
  ["Automazione dei processi", "Analisi dei flussi di lavoro e introduzione di automazioni per ridurre attività ripetitive, errori e tempi operativi."],
  ["Transizione 5.0", "Supporto tecnico nell'integrazione tra digitalizzazione, automazione ed efficientamento energetico nei progetti di investimento."],
  ["Servizi digitali per imprese", "Digitalizzazione di procedure, raccolta dati, workflow operativi e strumenti su misura per organizzare meglio le attività aziendali."],
  ["Portali e applicazioni web", "Progettazione e sviluppo di portali professionali, aree riservate, strumenti operativi e applicazioni web."],
  ["Integrazione software e dati", "Collegamento tra sistemi, database e applicazioni per evitare duplicazioni e rendere i dati più utilizzabili."],
  ["Intelligenza artificiale per PMI", "Introduzione dell'AI nei processi aziendali con casi d'uso concreti, sostenibili e misurabili."],
  ["Analisi documentale e assistenti AI", "Lettura e classificazione di documenti, estrazione dati, ricerca interna e assistenti dedicati a procedure e conoscenza aziendale."],
] as const;

export default function DigitalServicesPage() {
  return (
    <main>
      <section className="bg-anthracite py-14 md:py-20 lg:py-24">
        <div className="page-container">
          <p className="section-label text-tech-blue-light">Ecosistema 2</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Digitalizzazione, Automazione &amp; AI
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-muted md:text-lg">
            Soluzioni digitali pensate per piccole e medie imprese che vogliono semplificare processi, integrare dati e strumenti e utilizzare l'intelligenza artificiale in modo concreto.
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
          <Link href="/contatti" className="btn-primary inline-flex">Parliamo dei processi della tua impresa</Link>
        </div>
      </section>
    </main>
  );
}
