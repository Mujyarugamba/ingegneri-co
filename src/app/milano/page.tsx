import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/milano`;

export const metadata: Metadata = {
  title: "Studio di ingegneria a Milano | Ingegneri & Co",
  description:
    "Studio e rete tecnica multidisciplinare a Milano per pratiche edilizie, energia, impianti, direzione lavori, sicurezza, Smart Building e innovazione digitale.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Studio di ingegneria a Milano | Ingegneri & Co",
    description:
      "Servizi tecnici integrati a Milano per edilizia, energia, impianti, automazione e innovazione.",
    url: canonicalUrl,
    type: "website",
    locale: "it_IT",
    siteName: siteConfig.name,
  },
};

const services = [
  {
    title: "Pratiche edilizie e conformità",
    text: "CILA, SCIA, verifiche urbanistiche e catastali, due diligence e supporto tecnico per interventi su immobili.",
    href: "/servizi/pratiche-edilizie",
  },
  {
    title: "APE, Legge 10 ed energia",
    text: "Certificazione energetica, relazioni tecniche, diagnosi ed efficientamento energetico degli edifici.",
    href: "/servizi/ape-certificazione-energetica",
  },
  {
    title: "Impianti elettrici e fotovoltaico",
    text: "Progettazione e verifica degli impianti, fotovoltaico, accumulo e integrazione con i sistemi dell'edificio.",
    href: "/servizi/impianti-elettrici",
  },
  {
    title: "Direzione lavori e sicurezza",
    text: "Supporto tecnico in cantiere, direzione lavori e coordinamento della sicurezza nelle fasi previste dall'incarico.",
    href: "/servizi/direzione-lavori",
  },
  {
    title: "Smart Building e IoT",
    text: "Building Automation, monitoraggio energetico, sensori, acquisizione dati e supervisione degli impianti.",
    href: "/servizi/smart-building-iot",
  },
  {
    title: "Digitalizzazione e AI",
    text: "Automazione dei processi, integrazione software e applicazioni di intelligenza artificiale per PMI e studi professionali.",
    href: "/servizi/digitalizzazione-automazione-ai",
  },
] as const;

const faqs = [
  {
    question: "Quali servizi tecnici seguite a Milano?",
    answer:
      "Seguiamo incarichi in edilizia, energia, impianti, direzione lavori, sicurezza, automazione, Smart Building e digitalizzazione, coinvolgendo le competenze professionali necessarie al singolo progetto.",
  },
  {
    question: "La sede è a Milano?",
    answer: `Sì. La sede indicata sul sito è ${siteConfig.address.formatted}.`,
  },
  {
    question: "Operate anche fuori dal Comune di Milano?",
    answer:
      "Sì. L'operatività si estende anche all'area metropolitana e, in funzione dell'incarico, a Pavia, Verbania, Lombardia e Piemonte.",
  },
] as const;

export default function MilanoPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Milano", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Studio di ingegneria a Milano | Ingegneri & Co",
    description:
      "Servizi tecnici multidisciplinari a Milano per edilizia, energia, impianti, automazione e innovazione.",
    inLanguage: "it-IT",
    about: { "@id": `${siteConfig.url}/#organization` },
    spatialCoverage: {
      "@type": "City",
      name: "Milano",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        eyebrow="Milano"
        title="Studio di ingegneria a Milano"
        intro="Ingegneri & Co è una rete tecnica multidisciplinare con sede a Milano. Coordiniamo competenze di ingegneri, architetti e geometri per affrontare in modo integrato edilizia, energia, impianti, automazione e innovazione digitale."
        current="Milano"
      />

      <section className="section-padding bg-white">
        <div className="page-container">
          <p className="section-label">Servizi a Milano</p>
          <h2 className="section-title">Competenze tecniche per edifici, imprese e professionisti</h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-anthracite-soft">
            Il punto di partenza è l&apos;esigenza concreta: una pratica edilizia, una verifica prima dell&apos;acquisto, un intervento energetico o impiantistico, un cantiere da coordinare oppure un progetto di automazione e digitalizzazione. Organizziamo il lavoro coinvolgendo le competenze utili al caso specifico.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.href} className="rounded-2xl border border-gray-border bg-gray-light p-6">
                <h3 className="text-xl font-bold text-anthracite">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-anthracite-soft">{service.text}</p>
                <Link href={service.href} className="mt-5 inline-block font-semibold text-tech-blue">
                  Scopri il servizio →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-border bg-gray-light">
        <div className="page-container grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start md:py-16">
          <div>
            <p className="section-label">Presenza locale</p>
            <h2 className="section-title">Sede a Milano e operatività sul territorio</h2>
            <p className="mt-5 leading-relaxed text-anthracite-soft">
              La sede indicata per Ingegneri & Co è <strong>{siteConfig.address.formatted}</strong>. Per gli incarichi che richiedono verifica diretta organizziamo sopralluoghi e attività sul posto; per analisi documentali, progettazione e coordinamento utilizziamo anche strumenti digitali per rendere più fluido lo scambio di informazioni.
            </p>
            <p className="mt-4 leading-relaxed text-anthracite-soft">
              Operiamo principalmente a Milano e nell&apos;area metropolitana e, in funzione del tipo di incarico, anche a Pavia, Verbania, in Lombardia e Piemonte.
            </p>
          </div>

          <aside className="rounded-2xl bg-anthracite p-7 text-white shadow-lg">
            <p className="section-label text-white/80">Contatto diretto</p>
            <h2 className="mt-3 text-2xl font-bold">Parliamo del tuo progetto a Milano</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Indica località, tipo di immobile o attività, obiettivo e documentazione già disponibile: possiamo inquadrare più rapidamente il percorso tecnico.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <Link href="/contatti" className="btn-primary">
                Contatti
              </Link>
              <a
                href={siteConfig.whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                WhatsApp
                <span className="sr-only"> (si apre in una nuova scheda)</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-gray-border bg-white section-padding">
        <div className="page-container">
          <p className="section-label">Domande frequenti</p>
          <h2 className="section-title">FAQ sui servizi a Milano</h2>
          <div className="mt-7 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-gray-border bg-gray-light p-5">
                <summary className="cursor-pointer font-semibold text-anthracite">{faq.question}</summary>
                <p className="mt-3 leading-relaxed text-anthracite-soft">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
