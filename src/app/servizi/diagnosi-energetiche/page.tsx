import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/diagnosi-energetiche`;

export const metadata: Metadata = {
  title: "Diagnosi e audit energetici | Ingegneri & Co",
  description: "Diagnosi e audit energetici per edifici, imprese e processi: analisi dei consumi, usi significativi e scenari di miglioramento tecnico-economico.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Diagnosi e audit energetici | Ingegneri & Co", description: "Analisi dei consumi e individuazione degli interventi di miglioramento energetico.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="Diagnosi energetiche"
      intro="Svolgiamo diagnosi e audit energetici per capire come viene utilizzata l’energia in edifici, attività e processi, ricostruire i principali consumi e individuare interventi che possano ridurre sprechi, inefficienze e costi operativi."
      bullets={["Raccolta e analisi dei consumi", "Individuazione degli usi energetici significativi", "Analisi di impianti e profili di utilizzo", "Individuazione delle inefficienze", "Scenari di intervento", "Studi di fattibilità tecnico-economica"]}
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
