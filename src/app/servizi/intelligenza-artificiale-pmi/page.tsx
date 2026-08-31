import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/intelligenza-artificiale-pmi`;

export const metadata: Metadata = {
  title: "Intelligenza artificiale per PMI | Ingegneri & Co",
  description: "Soluzioni di intelligenza artificiale per PMI: assistenti interni, analisi documentale, automazione, ricerca nelle informazioni aziendali e supporto ai processi.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Intelligenza artificiale per PMI | Ingegneri & Co", description: "AI applicata ai processi reali delle piccole e medie imprese.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return <ServiceLanding eyebrow="Digitalizzazione, Automazione & AI" title="Intelligenza artificiale per PMI" intro="Progettiamo applicazioni di intelligenza artificiale partendo da problemi concreti dell'impresa: leggere documenti, trovare informazioni, assistere gli operatori, classificare dati, preparare bozze e collegare l'AI ai flussi di lavoro esistenti." bullets={["Assistenti AI interni", "Analisi e classificazione documentale", "Ricerca nelle informazioni aziendali", "Supporto alla redazione di contenuti e documenti", "Automazioni con componenti AI", "Integrazione con software e workflow esistenti"]} outcomes={["Applicare l'AI dove genera utilità concreta", "Ridurre attività ripetitive e tempi di ricerca", "Mantenere supervisione umana sui processi importanti"]} ecosystemHref="/servizi/digitalizzazione-automazione-ai" ecosystemLabel="Digitalizzazione, Automazione & AI" />;
}
