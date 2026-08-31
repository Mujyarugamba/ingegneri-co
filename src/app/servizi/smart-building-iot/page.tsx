import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/smart-building-iot`;

export const metadata: Metadata = {
  title: "Smart Building, IoT e monitoraggio | Ingegneri & Co",
  description:
    "Building Automation, IoT, monitoraggio energetico e acquisizione dati per edifici e imprese che vogliono integrare impianti e informazioni operative.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Smart Building, IoT e monitoraggio | Ingegneri & Co",
    description: "Automazione, sensori, monitoraggio e integrazione dei dati per edifici e processi tecnici.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Digitalizzazione, Automazione & AI"
      title="Smart Building, IoT e monitoraggio"
      intro="Progettiamo sistemi per raccogliere, integrare e utilizzare dati provenienti da impianti, sensori e dispositivi, con l'obiettivo di migliorare controllo, visibilità e gestione tecnica di edifici e attività."
      bullets={[
        "Building Automation",
        "Sensori e dispositivi IoT",
        "Monitoraggio energetico",
        "Acquisizione e storicizzazione dati",
        "Dashboard e supervisione",
        "Integrazione hardware e software",
      ]}
      outcomes={[
        "Aumentare la visibilità sui consumi e sul funzionamento degli impianti",
        "Centralizzare informazioni tecniche oggi disperse",
        "Creare basi dati utili per analisi, automazione e manutenzione",
      ]}
      ecosystemHref="/servizi/digitalizzazione-automazione-ai"
      ecosystemLabel="Digitalizzazione, Automazione & AI"
    />
  );
}
