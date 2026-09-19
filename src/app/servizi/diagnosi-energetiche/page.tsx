import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/diagnosi-energetiche`;

export const metadata: Metadata = {
  title: "Diagnosi energetiche | Ingegneri & Co",
  description: "Diagnosi energetiche per edifici e imprese: analisi dei consumi, individuazione degli usi significativi e definizione degli interventi di miglioramento.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Diagnosi energetiche | Ingegneri & Co", description: "Analisi dei consumi e individuazione degli interventi di miglioramento energetico.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="Diagnosi energetiche"
      intro="Analizziamo come viene utilizzata l'energia in un edificio o in un'attività, ricostruiamo i principali consumi e individuiamo gli interventi che possono ridurre sprechi, inefficienze e costi operativi."
      bullets={["Raccolta e analisi dei consumi", "Individuazione degli usi energetici significativi", "Analisi di impianti e profili di utilizzo", "Individuazione delle inefficienze", "Scenari di intervento", "Priorità tecnico-economiche"]}
      outcomes={["Capire dove e come si consuma energia", "Individuare inefficienze concrete", "Costruire una roadmap di miglioramento"]}
      context={["Quando è necessario capire quali usi e impianti incidono maggiormente sui consumi di un edificio o di un'attività.", "Prima di definire un programma di efficientamento, per confrontare le priorità di intervento su basi tecniche e dati disponibili."]}
      process={[
        { title: "Dati e profili di consumo", text: "Raccogliamo bollette, misure, orari di funzionamento e informazioni sugli impianti e sulle modalità di utilizzo." },
        { title: "Analisi energetica", text: "Ricostruiamo gli usi significativi e individuiamo inefficienze, anomalie e opportunità di intervento." },
        { title: "Scenari e priorità", text: "Confrontiamo gli interventi possibili e definiamo una sequenza di azioni tecnicamente motivata." },
      ]}
      relatedServices={[{label:"Efficientamento energetico",href:"/servizi/efficientamento-energetico"},{label:"Fotovoltaico",href:"/servizi/fotovoltaico"},{label:"Impianti termici e climatizzazione",href:"/servizi/impianti-termici-climatizzazione"},{label:"Nuovo Piano Transizione 5.0",href:"/servizi/transizione-5-0"}]}
      faqs={[
        { question: "Diagnosi energetica ed efficientamento sono la stessa attività?", answer: "No. La diagnosi serve a capire dove e perché si consuma energia e a individuare le priorità; l'efficientamento sviluppa e coordina gli interventi scelti." },
      ]}
      ecosystemHref="/servizi/ingegneria-edilizia-energia"
      ecosystemLabel="Ingegneria, Edilizia & Energia"
    />
  );
}
