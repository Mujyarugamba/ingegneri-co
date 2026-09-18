import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/ingegneria-edilizia-energia`;

export const metadata: Metadata = {
  title: "Ingegneria, Edilizia ed Energia | Ingegneri & Co",
  description: "Pratiche edilizie, due diligence, conformità urbanistica, APE, Legge 10, energia, fotovoltaico, impianti, direzione lavori e sicurezza cantieri.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Ingegneria, Edilizia ed Energia | Ingegneri & Co", description: "Servizi tecnici integrati per edifici, impianti, energia e adempimenti professionali.", type: "website", locale: "it_IT", url: canonicalUrl },
};

const services = [
  { title: "Pratiche edilizie", description: "CILA, SCIA, Permessi di Costruire, sanatorie, accesso agli atti e documentazione tecnica.", href: "/servizi/pratiche-edilizie" },
  { title: "Due diligence immobiliare", description: "Verifica tecnica e documentale dell'immobile prima di acquisti, vendite o investimenti.", href: "/servizi/due-diligence-immobiliare" },
  { title: "Conformità urbanistica e catastale", description: "Confronto tra titoli edilizi, documentazione catastale e stato dei luoghi.", href: "/servizi/conformita-urbanistica-catastale" },
  { title: "APE e certificazione energetica", description: "Attestato di Prestazione Energetica e valutazione della classe energetica dell'immobile.", href: "/servizi/ape-certificazione-energetica" },
  { title: "Legge 10", description: "Relazioni tecniche energetiche e verifiche previste per gli interventi nei casi applicabili.", href: "/servizi/legge-10" },
  { title: "Diagnosi energetiche", description: "Analisi dei consumi e individuazione delle opportunità di miglioramento energetico.", href: "/servizi/diagnosi-energetiche" },
  { title: "Efficientamento energetico", description: "Dalla diagnosi alla definizione di interventi coordinati su involucro, impianti e sistemi di controllo.", href: "/servizi/efficientamento-energetico" },
  { title: "Fotovoltaico e sistemi di accumulo", description: "Dimensionamento, progettazione e integrazione di produzione fotovoltaica, accumulo e autoconsumo.", href: "/servizi/fotovoltaico" },
  { title: "Progettazione e verifica impianti elettrici", description: "Progettazione, verifica, adeguamento e integrazione di impianti elettrici.", href: "/servizi/impianti-elettrici" },
  { title: "Impianti termici e climatizzazione", description: "Progettazione e riqualificazione di riscaldamento, raffrescamento, climatizzazione e pompe di calore.", href: "/servizi/impianti-termici-climatizzazione" },
  { title: "Direzione lavori e supporto tecnico", description: "Coordinamento tecnico e assistenza durante le fasi esecutive dell'intervento.", href: "/servizi/direzione-lavori" },
  { title: "Sicurezza cantieri", description: "Coordinamento della sicurezza CSP/CSE, PSC e supporto tecnico-documentale.", href: "/servizi/sicurezza-cantieri" },
  { title: "Smart Building, Building Automation e IoT", description: "Competenza trasversale tra impianti, sensori, automazione dell'edificio, dati e monitoraggio energetico.", href: "/servizi/smart-building-iot" },
] as const;

export default function EngineeringServicesPage() {
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Servizi", item: `${siteConfig.url}/servizi` },
    { "@type": "ListItem", position: 3, name: "Ingegneria, Edilizia & Energia", item: canonicalUrl },
  ]};
  const itemListJsonLd = { "@context": "https://schema.org", "@type": "ItemList", name: "Servizi Ingegneria, Edilizia & Energia", itemListElement: services.map((service,index)=>({ "@type":"ListItem", position:index+1, name:service.title, url:`${siteConfig.url}${service.href}` })) };
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbJsonLd)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(itemListJsonLd)}} />
    <section className="bg-anthracite py-14 md:py-20 lg:py-24"><div className="page-container">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60"><Link href="/" className="transition hover:text-white">Home</Link><span aria-hidden="true" className="mx-2">/</span><Link href="/servizi" className="transition hover:text-white">Servizi</Link><span aria-hidden="true" className="mx-2">/</span><span aria-current="page" className="text-white">Ingegneria, Edilizia &amp; Energia</span></nav>
      <p className="section-label text-white/80">Ecosistema 1</p><h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">Ingegneria, Edilizia &amp; Energia</h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-muted md:text-lg">Servizi tecnici per edifici, impianti e interventi energetici, con gestione integrata degli aspetti progettuali, normativi e operativi.</p>
    </div></section>
    <section className="section-padding bg-gray-light"><div className="page-container grid gap-5 md:grid-cols-2">{services.map(service=><Link key={service.title} href={service.href} className="group rounded-2xl border border-gray-border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><article><h2 className="text-xl font-bold text-anthracite group-hover:text-tech-blue">{service.title}</h2><p className="mt-3 leading-relaxed text-gray-muted">{service.description}</p><p className="mt-5 text-sm font-semibold text-tech-blue">Scopri il servizio →</p></article></Link>)}</div><div className="page-container mt-10"><Link href="/contatti" className="btn-primary inline-flex">Parliamo del tuo intervento</Link></div></section>
  </main>;
}
