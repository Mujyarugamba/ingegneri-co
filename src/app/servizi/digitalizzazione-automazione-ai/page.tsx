import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/digitalizzazione-automazione-ai`;

export const metadata: Metadata = {
  title: "Digitalizzazione, Automazione e AI per PMI | Ingegneri & Co",
  description:
    "Automazione dei processi, Transizione 5.0, portali web, integrazione software e dati, Smart Building, analisi documentale e AI per PMI.",
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
  {
    title: "Automazione dei processi",
    description: "Analisi dei flussi di lavoro e introduzione di automazioni per ridurre attività ripetitive, errori e tempi operativi.",
    href: "/servizi/automazione-processi",
  },
  {
    title: "Transizione 5.0",
    description: "Supporto tecnico nell'integrazione tra digitalizzazione, automazione ed efficientamento energetico nei progetti di investimento.",
    href: "/servizi/transizione-5-0",
  },
  {
    title: "Servizi digitali per imprese",
    description: "Digitalizzazione di procedure, raccolta dati, workflow operativi e strumenti su misura per organizzare meglio le attività aziendali.",
    href: "/servizi/servizi-digitali-pmi",
  },
  {
    title: "Portali e applicazioni web",
    description: "Progettazione e sviluppo di portali professionali, aree riservate, strumenti operativi e applicazioni web.",
    href: "/servizi/portali-applicazioni-web",
  },
  {
    title: "Integrazione software e dati",
    description: "Collegamento tra sistemi, database e applicazioni per evitare duplicazioni e rendere i dati più utilizzabili.",
    href: "/servizi/integrazione-software-dati",
  },
  {
    title: "Intelligenza artificiale per PMI",
    description: "Introduzione dell'AI nei processi aziendali con casi d'uso concreti, sostenibili e misurabili.",
    href: "/servizi/intelligenza-artificiale-pmi",
  },
  {
    title: "Analisi documentale e assistenti AI",
    description: "Classificazione, estrazione dati, ricerca interna e assistenti dedicati a procedure e conoscenza aziendale.",
    href: "/servizi/analisi-documentale-assistenti-ai",
  },
  {
    title: "Smart Building, IoT e monitoraggio",
    description: "Building Automation, sensori, acquisizione dati e monitoraggio energetico per edifici e attività.",
    href: "/servizi/smart-building-iot",
  },
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
            Soluzioni digitali pensate per piccole e medie imprese che vogliono semplificare processi, integrare dati e strumenti e utilizzare l&apos;intelligenza artificiale in modo concreto.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="page-container grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-gray-border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <article>
                <h2 className="text-xl font-bold text-anthracite group-hover:text-tech-blue">{service.title}</h2>
                <p className="mt-3 leading-relaxed text-gray-muted">{service.description}</p>
                <p className="mt-5 text-sm font-semibold text-tech-blue">Scopri il servizio →</p>
              </article>
            </Link>
          ))}
        </div>
        <div className="page-container mt-10">
          <Link href="/contatti" className="btn-primary inline-flex">Parliamo dei processi della tua impresa</Link>
        </div>
      </section>
    </main>
  );
}
