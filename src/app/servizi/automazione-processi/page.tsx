import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/automazione-processi`;

export const metadata: Metadata = {
  title: "Automazione dei processi | Ingegneri & Co",
  description: "Automazione dei processi per PMI: integrazione di dati, workflow, strumenti digitali e sistemi per ridurre attività ripetitive e migliorare il controllo operativo.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Automazione dei processi | Ingegneri & Co", description: "Automazione operativa e integrazione digitale per le piccole e medie imprese.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return <ServiceLanding eyebrow="Digitalizzazione, Automazione & AI" title="Automazione dei processi" intro="Analizziamo attività ripetitive, passaggi manuali e flussi informativi per progettare automazioni semplici e sostenibili, integrando strumenti già presenti in azienda quando possibile." bullets={["Mappatura dei processi", "Workflow automatici", "Integrazione tra strumenti e dati", "Automazione di attività ripetitive", "Dashboard e notifiche", "Riduzione dei passaggi manuali"]} outcomes={["Ridurre tempi operativi", "Diminuire errori e duplicazioni", "Rendere i processi più tracciabili e controllabili"]} ecosystemHref="/servizi/digitalizzazione-automazione-ai" ecosystemLabel="Digitalizzazione, Automazione & AI" />;
}
