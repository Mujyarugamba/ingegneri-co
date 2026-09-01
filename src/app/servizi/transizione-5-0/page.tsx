import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/transizione-5-0`;

export const metadata: Metadata = {
  title: "Transizione 5.0 | Ingegneri & Co",
  description: "Supporto tecnico per progetti Transizione 5.0: analisi energetica, digitalizzazione, automazione, integrazione impianti e documentazione tecnica.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Transizione 5.0 | Ingegneri & Co", description: "Progetti integrati di efficienza energetica, digitalizzazione e automazione.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return <ServiceLanding eyebrow="Ponte tra i due ecosistemi" title="Transizione 5.0" intro="La Transizione 5.0 è il punto di incontro tra energia e digitalizzazione: richiede di leggere insieme consumi, processo produttivo, beni tecnologici, automazione e risultati energetici. Per questo la affrontiamo con un approccio integrato." bullets={["Analisi dei consumi e del processo", "Individuazione degli interventi", "Automazione e digitalizzazione", "Integrazione di beni e sistemi", "Supporto alla documentazione tecnica", "Coordinamento tra parte energetica e tecnologica"]} outcomes={["Collegare investimento digitale e risultato energetico", "Evitare progetti frammentati", "Costruire un quadro tecnico coerente e verificabile"]} ecosystemHref="/servizi/digitalizzazione-automazione-ai" ecosystemLabel="Digitalizzazione, Automazione & AI" />;
}
