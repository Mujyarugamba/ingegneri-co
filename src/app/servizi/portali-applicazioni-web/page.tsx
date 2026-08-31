import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/portali-applicazioni-web`;

export const metadata: Metadata = {
  title: "Portali e applicazioni web | Ingegneri & Co",
  description: "Progettazione di portali e applicazioni web per PMI: aree riservate, raccolta dati, workflow, strumenti operativi e integrazioni con servizi esterni.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Portali e applicazioni web | Ingegneri & Co", description: "Portali e applicazioni web progettati intorno ai processi reali dell'impresa.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return <ServiceLanding eyebrow="Digitalizzazione, Automazione & AI" title="Portali e applicazioni web" intro="Realizziamo strumenti web quando un sito tradizionale non basta: portali informativi, aree riservate, raccolta strutturata di dati e applicazioni operative collegate ai processi dell'impresa." bullets={["Portali aziendali", "Aree riservate", "Form e raccolta dati", "Workflow operativi", "Dashboard e strumenti gestionali", "Integrazione con servizi e API esterne"]} outcomes={["Trasformare procedure manuali in flussi digitali", "Centralizzare dati e operazioni", "Creare strumenti costruiti sulle esigenze reali dell'impresa"]} ecosystemHref="/servizi/digitalizzazione-automazione-ai" ecosystemLabel="Digitalizzazione, Automazione & AI" />;
}
