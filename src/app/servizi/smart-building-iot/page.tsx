import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/smart-building-iot`;

export const metadata: Metadata = {
  title: "Smart Building, Building Automation e IoT | Ingegneri & Co",
  description: "Building Automation, IoT, monitoraggio energetico, supervisione e acquisizione dati per integrare impianti e informazioni tecniche negli edifici.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Smart Building, Building Automation e IoT | Ingegneri & Co",
    description: "Automazione, sensori, monitoraggio e integrazione dei dati per edifici e impianti.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Competenza trasversale: impianti, energia e digitale"
      title="Smart Building, Building Automation e IoT"
      intro="Progettiamo sistemi per raccogliere, integrare e utilizzare dati provenienti da impianti, sensori e dispositivi, con l'obiettivo di migliorare controllo, visibilità e gestione tecnica degli edifici."
      bullets={["Building Automation", "Sensori e dispositivi IoT", "Monitoraggio energetico", "Acquisizione e storicizzazione dati", "Dashboard e supervisione", "Integrazione hardware e software"]}
      outcomes={["Aumentare la visibilità sui consumi e sul funzionamento degli impianti", "Centralizzare informazioni tecniche oggi disperse", "Creare basi dati utili per analisi, automazione e manutenzione"]}
      context={["Edifici nei quali impianti, sensori e contatori producono dati che oggi non vengono raccolti o utilizzati in modo coordinato.", "Quando monitoraggio energetico, Building Automation e supervisione devono dialogare con impianti e strumenti digitali."]}
      process={[
        { title: "Impianti e punti dati", text: "Individuiamo sistemi tecnici, sensori, contatori, protocolli e informazioni utili alla gestione dell'edificio." },
        { title: "Architettura di supervisione", text: "Definiamo raccolta dati, logiche di controllo, dashboard e modalità di interazione tra impianti e piattaforme." },
        { title: "Monitoraggio e utilizzo", text: "Organizziamo i dati per controllo operativo, analisi energetica, manutenzione e successive automazioni." },
      ]}
      relatedServices={[{label:"Automazione industriale e sistemi di controllo",href:"/servizi/automazione-industriale"},{label:"Impianti elettrici",href:"/servizi/impianti-elettrici"},{label:"Diagnosi energetiche",href:"/servizi/diagnosi-energetiche"},{label:"Integrazione software, API e dati",href:"/servizi/integrazione-software-dati"}]}
      relatedArticles={[{label:"Smart Building: cosa monitorare e automatizzare",href:"/approfondimenti/automazione-smart-building"},{label:"Come migliorare l’efficienza energetica di un edificio",href:"/approfondimenti/efficientamento-energetico-edifici"}]}
      faqs={[
        { question: "Smart Building e automazione industriale sono la stessa cosa?", answer: "No. Lo Smart Building riguarda l'edificio e i suoi impianti; l'automazione industriale riguarda macchine, linee e processi produttivi. Tecnologie e competenze possono sovrapporsi, ma il contesto applicativo è diverso." },
      ]}
      ecosystemHref="/servizi/digitalizzazione-automazione-ai"
      ecosystemLabel="Digitalizzazione, Automazione & AI"
    />
  );
}
