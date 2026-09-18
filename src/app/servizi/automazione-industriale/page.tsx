import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/automazione-industriale`;

export const metadata: Metadata = {
  title: "Automazione industriale, PLC e supervisione | Ingegneri & Co",
  description: "Automazione industriale, PLC, supervisione, acquisizione dati, controllo remoto e integrazione hardware-software per impianti e processi tecnici.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Automazione industriale, PLC e supervisione | Ingegneri & Co", description: "Sistemi di controllo, supervisione e acquisizione dati per impianti e processi tecnici.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Digitalizzazione, Automazione & AI"
      title="Automazione industriale e sistemi di controllo"
      intro="Progettiamo soluzioni di automazione e controllo per impianti e processi tecnici, integrando logiche PLC, supervisione, acquisizione dati e collegamento tra componenti hardware e software."
      bullets={["PLC e logiche di controllo", "Sistemi di supervisione", "Acquisizione e storicizzazione dati", "Sensori e segnali di campo", "Controllo e monitoraggio remoto", "Integrazione hardware e software"]}
      outcomes={["Aumentare visibilità e controllo sui processi tecnici", "Ridurre passaggi manuali dove l'automazione è appropriata", "Integrare dati di impianto e sistemi digitali"]}
      context={["Impianti e processi tecnici che richiedono logiche di controllo, supervisione o acquisizione strutturata dei dati.", "Quando segnali di campo, PLC, sistemi di supervisione e software devono essere integrati in un'architettura coerente."]}
      process={[
        { title: "Analisi del processo", text: "Rileviamo logiche operative, segnali, dispositivi, vincoli e informazioni che devono essere controllate o acquisite." },
        { title: "Architettura di controllo", text: "Definiamo logiche PLC, supervisione, acquisizione dati e interfacce tra componenti hardware e software." },
        { title: "Integrazione e verifica", text: "Coordiniamo l'integrazione dei sistemi e le verifiche funzionali necessarie alla soluzione prevista." },
      ]}
      relatedServices={[{label:"Smart Building, IoT e monitoraggio",href:"/servizi/smart-building-iot"},{label:"Integrazione software e dati",href:"/servizi/integrazione-software-dati"},{label:"Automazione dei processi aziendali",href:"/servizi/automazione-processi"}]}
      ecosystemHref="/servizi/digitalizzazione-automazione-ai"
      ecosystemLabel="Digitalizzazione, Automazione & AI"
    />
  );
}

