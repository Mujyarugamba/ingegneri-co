import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/servizi-digitali-pmi`;

export const metadata: Metadata = {
  title: "Servizi digitali per PMI | Ingegneri & Co",
  description: "Servizi digitali per piccole e medie imprese: analisi dei processi, strumenti operativi, integrazioni, dashboard, portali e soluzioni su misura.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Servizi digitali per PMI | Ingegneri & Co", description: "Digitalizzazione concreta dei processi aziendali, senza aggiungere complessità inutile.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return <ServiceLanding eyebrow="Digitalizzazione, Automazione & AI" title="Servizi digitali per PMI" intro="Aiutiamo le imprese a trasformare attività manuali e frammentate in processi digitali più semplici, collegati e tracciabili, scegliendo strumenti proporzionati alle reali esigenze operative." bullets={["Analisi dei processi digitali", "Dashboard operative", "Raccolta e organizzazione dati", "Integrazione tra applicazioni", "Strumenti interni su misura", "Supporto alla digitalizzazione graduale"]} outcomes={["Ridurre frammentazione e doppio lavoro", "Rendere i dati più accessibili", "Costruire soluzioni digitali sostenibili nel tempo"]} ecosystemHref="/servizi/digitalizzazione-automazione-ai" ecosystemLabel="Digitalizzazione, Automazione & AI" />;
}
