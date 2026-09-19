import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/digitalizzazione-automazione-ai`;

export const metadata: Metadata = {
  title: "Digitalizzazione, Automazione e AI per PMI | Ingegneri & Co",
  description: "Digitalizzazione dei processi, automazione aziendale e industriale, integrazione software e dati, applicazioni web e intelligenza artificiale per PMI.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Digitalizzazione, Automazione e AI per PMI | Ingegneri & Co", description: "Soluzioni digitali, automazione e intelligenza artificiale applicate ai processi delle piccole e medie imprese.", type: "website", locale: "it_IT", url: canonicalUrl },
};

const services = [
  { title: "Digitalizzazione delle PMI", description: "Consulenza e punto di ingresso per analizzare processi, strumenti e dati e definire un percorso di digitalizzazione sostenibile.", href: "/servizi/servizi-digitali-pmi" },
  { title: "Automazione dei processi e workflow", description: "Workflow, notifiche, approvazioni e automazioni per ridurre attività ripetitive e passaggi manuali.", href: "/servizi/automazione-processi" },
  { title: "Automazione industriale e sistemi di controllo", description: "PLC, supervisione, acquisizione dati e integrazione hardware-software per impianti e processi tecnici.", href: "/servizi/automazione-industriale" },
  { title: "Portali e applicazioni web", description: "Portali professionali, aree riservate e strumenti operativi collegati ai processi e ai dati dell&apos;impresa.", href: "/servizi/portali-applicazioni-web" },
  { title: "Integrazione software, API e dati", description: "Architettura tecnica per collegare applicazioni, database e sistemi e rendere le informazioni riutilizzabili.", href: "/servizi/integrazione-software-dati" },
  { title: "Intelligenza artificiale per PMI", description: "Applicazioni dell'AI a problemi e processi aziendali concreti, mantenendo il controllo umano dove necessario.", href: "/servizi/intelligenza-artificiale-pmi" },
  { title: "Analisi documentale e assistenti AI", description: "Classificazione, estrazione dati, ricerca interna e assistenti dedicati a procedure e conoscenza aziendale.", href: "/servizi/analisi-documentale-assistenti-ai" },
  { title: "Smart Building, Building Automation e IoT", description: "Servizio trasversale per edifici: impianti, sensori, supervisione, dati e monitoraggio energetico.", href: "/servizi/smart-building-iot" },
  { title: "Nuovo Piano Transizione 5.0", description: "Supporto tecnico per investimenti tecnologici, interconnessione, automazione e autoproduzione energetica.", href: "/servizi/transizione-5-0" },
] as const;

export default function DigitalServicesPage() {
  const breadcrumbJsonLd = { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
    { "@type":"ListItem", position:1, name:"Home", item:siteConfig.url },
    { "@type":"ListItem", position:2, name:"Servizi", item:`${siteConfig.url}/servizi` },
    { "@type":"ListItem", position:3, name:"Digitalizzazione, Automazione & AI", item:canonicalUrl },
  ]};
  const itemListJsonLd = { "@context":"https://schema.org", "@type":"ItemList", name:"Servizi Digitalizzazione, Automazione & AI", itemListElement:services.map((service,index)=>({ "@type":"ListItem", position:index+1, name:service.title, url:`${siteConfig.url}${service.href}` })) };
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbJsonLd)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(itemListJsonLd)}} />
    <section className="bg-anthracite py-14 md:py-20 lg:py-24"><div className="page-container">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60"><Link href="/" className="transition hover:text-white">Home</Link><span aria-hidden="true" className="mx-2">/</span><Link href="/servizi" className="transition hover:text-white">Servizi</Link><span aria-hidden="true" className="mx-2">/</span><span aria-current="page" className="text-white">Digitalizzazione, Automazione &amp; AI</span></nav>
      <p className="section-label text-white/80">Ecosistema 2</p><h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">Digitalizzazione, Automazione &amp; AI</h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-muted md:text-lg">Soluzioni per imprese che vogliono digitalizzare procedure, automatizzare processi aziendali o tecnici, integrare dati e sistemi e applicare l'intelligenza artificiale a esigenze concrete.</p>
    </div></section>
    <section className="section-padding bg-gray-light"><div className="page-container grid gap-5 md:grid-cols-2">{services.map(service=><Link key={service.title} href={service.href} className="group rounded-2xl border border-gray-border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><article><h2 className="text-xl font-bold text-anthracite group-hover:text-tech-blue">{service.title}</h2><p className="mt-3 leading-relaxed text-gray-muted">{service.description}</p><p className="mt-5 text-sm font-semibold text-tech-blue">Scopri il servizio →</p></article></Link>)}</div><div className="page-container mt-10"><Link href="/contatti" className="btn-primary inline-flex">Parliamo dei processi della tua impresa</Link></div></section>
  </main>;
}
