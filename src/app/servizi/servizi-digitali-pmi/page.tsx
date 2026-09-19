import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/servizi-digitali-pmi`;

export const metadata: Metadata = {
  title: "Digitalizzazione PMI e processi aziendali | Ingegneri & Co",
  description: "Analisi di processi, dati e strumenti per definire un percorso di digitalizzazione graduale e sostenibile per PMI e organizzazioni.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Digitalizzazione PMI e processi aziendali | Ingegneri & Co",
    description: "Consulenza e percorso di digitalizzazione per processi, dati e strumenti aziendali.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Digitalizzazione, Automazione & AI"
      title="Digitalizzazione delle PMI e dei processi aziendali"
      intro="Partiamo dall'organizzazione reale dell'impresa per individuare procedure frammentate, strumenti non collegati e informazioni difficili da utilizzare, definendo un percorso di digitalizzazione graduale e sostenibile."
      bullets={["Analisi dei processi e degli strumenti esistenti", "Mappatura dei flussi informativi", "Raccolta e organizzazione dei dati", "Individuazione delle priorità digitali", "Scelta di strumenti proporzionati alle esigenze", "Piano di evoluzione e integrazione"]}
      outcomes={["Definire priorità prima di introdurre nuovi strumenti", "Ridurre frammentazione e doppio lavoro", "Costruire un percorso digitale sostenibile nel tempo"]}
      context={["Quando procedure, file, email e strumenti diversi rendono difficile avere una visione unica delle attività.", "Quando l'impresa vuole digitalizzare gradualmente senza introdurre tecnologia non necessaria o scollegata dai processi reali."]}
      process={[
        { title: "Analisi dell'organizzazione", text: "Ricostruiamo processi, strumenti, dati e criticità operative senza partire da una tecnologia predefinita." },
        { title: "Priorità e architettura", text: "Definiamo quali problemi affrontare prima e quali strumenti o integrazioni possono produrre un beneficio concreto." },
        { title: "Percorso di evoluzione", text: "Costruiamo una sequenza di interventi sostenibile, collegando digitalizzazione, automazione, integrazione e AI quando servono davvero." },
      ]}
      relatedServices={[{label:"Automazione dei processi",href:"/servizi/automazione-processi"},{label:"Integrazione software, API e dati",href:"/servizi/integrazione-software-dati"},{label:"Intelligenza artificiale per PMI",href:"/servizi/intelligenza-artificiale-pmi"},{label:"Portali e applicazioni web",href:"/servizi/portali-applicazioni-web"}]}
      faqs={[
        { question: "Digitalizzare significa sostituire tutti i software già in uso?", answer: "No. Il punto di partenza è capire cosa funziona già e dove esistono frammentazioni o passaggi manuali. Spesso il percorso migliore consiste nel collegare e razionalizzare gli strumenti esistenti." },
        { question: "Da dove si parte se l'impresa usa molti file, email e applicazioni diverse?", answer: "Dalla mappatura dei processi e dei flussi informativi. Solo dopo si definiscono priorità, integrazioni e strumenti da introdurre." },
      ]}
      ecosystemHref="/servizi/digitalizzazione-automazione-ai"
      ecosystemLabel="Digitalizzazione, Automazione & AI"
    />
  );
}
