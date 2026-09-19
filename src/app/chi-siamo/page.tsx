import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/chi-siamo`;

export const metadata: Metadata = {
  title: "Chi siamo | Ingegneri & Co",
  description:
    "Ingegneri & Co è una rete tecnica multidisciplinare di ingegneri, architetti e geometri che integra competenze in edilizia, energia, impianti e innovazione digitale.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Chi siamo | Ingegneri & Co",
    description:
      "Una rete tecnica multidisciplinare per progetti di edilizia, energia, impianti, automazione e innovazione digitale.",
    type: "website",
    locale: "it_IT",
    url: canonicalUrl,
  },
};

const areas = [
  {
    title: "Civile, Ambientale e Architettonica",
    text: "Pratiche edilizie, conformità urbanistica e catastale, due diligence, direzione lavori, sicurezza cantieri e prestazioni energetiche degli edifici.",
  },
  {
    title: "Industriale",
    text: "Impianti elettrici e termici, fotovoltaico, diagnosi ed efficientamento energetico, automazione industriale e supporto tecnico agli investimenti.",
  },
  {
    title: "Dell'Informazione",
    text: "Digitalizzazione, integrazione software e dati, applicazioni web, IoT, Smart Building, sistemi di supervisione e intelligenza artificiale applicata ai processi.",
  },
] as const;

const method = [
  {
    title: "Inquadramento dell'esigenza",
    text: "Partiamo dal problema reale, dai vincoli e dagli obiettivi prima di definire il servizio o la tecnologia da utilizzare.",
  },
  {
    title: "Competenze appropriate",
    text: "Coinvolgiamo le competenze professionali utili al progetto, evitando di trattare come separati aspetti che devono invece essere coordinati.",
  },
  {
    title: "Coordinamento tecnico",
    text: "Manteniamo coerenza tra documentazione, progettazione, impianti, processi digitali e soggetti coinvolti nell'incarico.",
  },
  {
    title: "Assistenza fino alla conclusione",
    text: "Seguiamo le attività previste dall'incarico fino alla consegna, alla verifica o alla conclusione della fase di competenza.",
  },
] as const;

export default function ChiSiamoPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Chi siamo", item: canonicalUrl },
    ],
  };

  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${canonicalUrl}#about`,
    url: canonicalUrl,
    name: "Chi siamo - Ingegneri & Co",
    description: siteConfig.description,
    mainEntity: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />

      <PageHero
        eyebrow="Studio e rete professionale"
        title="Competenze integrate per progetti tecnici e digitali"
        intro="Ingegneri & Co è una rete multidisciplinare che integra competenze di ingegneri, architetti e geometri per affrontare in modo coordinato esigenze legate a edifici, impianti, energia e innovazione."
        current="Chi siamo"
      />

      <section className="section-padding bg-white">
        <div className="page-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="section-label">Il modello</p>
            <h2 className="section-title">Una rete di professionisti, non una singola competenza</h2>
            <p className="mt-6 leading-relaxed text-anthracite-soft">
              Il valore di “&amp; Co.” sta nella possibilità di mettere in relazione competenze differenti quando il progetto lo richiede. Un intervento edilizio può coinvolgere aspetti energetici e impiantistici; un progetto industriale può richiedere automazione, dati e integrazione software; una trasformazione digitale può avere ricadute operative sugli impianti e sui processi.
            </p>
            <p className="mt-4 leading-relaxed text-anthracite-soft">
              Per questo organizziamo il lavoro per competenze e responsabilità, mantenendo un coordinamento tecnico coerente con il perimetro dell&apos;incarico.
            </p>
          </div>

          <aside className="rounded-2xl bg-anthracite p-7 text-white shadow-lg lg:p-8">
            <p className="section-label text-white/80">Rete professionale</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">Ingegneri • Architetti • Geometri</h2>
            <p className="mt-4 leading-relaxed text-white/75">
              Professionisti con competenze complementari, coinvolti in funzione delle caratteristiche del progetto e delle attività da svolgere.
            </p>
            <div className="mt-7">
              <Link href="/servizi" className="btn-primary">
                Esplora i servizi
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-gray-border bg-gray-light section-padding">
        <div className="page-container">
          <p className="section-label">Competenze</p>
          <h2 className="section-title">Tre aree tecniche integrate</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {areas.map((area) => (
              <article key={area.title} className="rounded-2xl border border-gray-border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-anthracite">{area.title}</h3>
                <p className="mt-4 leading-relaxed text-gray-muted">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-border bg-white section-padding">
        <div className="page-container">
          <p className="section-label">Metodo</p>
          <h2 className="section-title">Come coordiniamo il lavoro</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {method.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-gray-border bg-gray-light p-5">
                <span className="text-sm font-bold text-tech-blue">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-bold text-anthracite">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-anthracite-soft">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-border bg-gray-light">
        <div className="page-container grid gap-8 py-12 md:grid-cols-[1fr_auto] md:items-center md:py-16">
          <div>
            <p className="section-label">Territorio</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-anthracite">Area operativa</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-gray-muted">
              Operiamo principalmente tra Milano, Pavia e Verbania, con attività in Lombardia e Piemonte in funzione del tipo di incarico e delle competenze necessarie.
            </p>
          </div>
          <Link href="/contatti" className="btn-primary">
            Parliamo del tuo progetto
          </Link>
        </div>
      </section>
    </main>
  );
}
