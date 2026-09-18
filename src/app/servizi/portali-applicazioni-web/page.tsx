import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/portali-applicazioni-web`;

export const metadata: Metadata = {
  title: "Portali e applicazioni web per PMI | Ingegneri & Co",
  description: "Progettazione di portali e applicazioni web per PMI: aree riservate, raccolta dati, workflow, strumenti operativi e integrazioni con servizi esterni.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Portali e applicazioni web per PMI | Ingegneri & Co",
    description: "Portali e applicazioni web progettati intorno ai processi reali dell'impresa.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Digitalizzazione, Automazione & AI"
      title="Portali e applicazioni web"
      intro="Realizziamo strumenti web quando un sito tradizionale non basta: portali informativi, aree riservate, raccolta strutturata di dati e applicazioni operative collegate ai processi dell'impresa."
      bullets={["Portali aziendali", "Aree riservate", "Form e raccolta dati", "Workflow operativi", "Dashboard e strumenti gestionali", "Integrazione con servizi e API esterne"]}
      outcomes={["Trasformare procedure manuali in flussi digitali", "Centralizzare dati e operazioni", "Creare strumenti costruiti sulle esigenze reali dell'impresa"]}
      context={["Quando un sito vetrina non è sufficiente e servono utenti autenticati, raccolta dati, procedure guidate o strumenti operativi.", "Quando un processo aziendale deve essere reso accessibile via web e collegato a database, software o servizi esterni."]}
      process={[
        { title: "Requisiti e utenti", text: "Definiamo chi userà lo strumento, quali attività deve svolgere e quali dati devono essere gestiti." },
        { title: "Flussi e integrazioni", text: "Progettiamo schermate, workflow, ruoli, database e collegamenti con i sistemi aziendali." },
        { title: "Sviluppo e verifica", text: "Realizziamo l'applicazione per fasi, testando funzioni e percorsi reali prima dell'estensione." },
      ]}
      relatedServices={[{label:"Digitalizzazione delle PMI",href:"/servizi/servizi-digitali-pmi"},{label:"Automazione dei processi e workflow",href:"/servizi/automazione-processi"},{label:"Integrazione software, API e dati",href:"/servizi/integrazione-software-dati"}]}
      ecosystemHref="/servizi/digitalizzazione-automazione-ai"
      ecosystemLabel="Digitalizzazione, Automazione & AI"
    />
  );
}
