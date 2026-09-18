import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/ape-certificazione-energetica`;

export const metadata: Metadata = {
  title: "APE e certificazione energetica | Ingegneri & Co",
  description: "Attestato di Prestazione Energetica (APE) per edifici e unità immobiliari, con sopralluogo, raccolta dati e valutazione della prestazione energetica.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "APE e certificazione energetica | Ingegneri & Co", description: "Attestato di Prestazione Energetica e valutazione della classe energetica dell'immobile.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="APE – Attestato di Prestazione Energetica"
      intro="Predisponiamo l'Attestato di Prestazione Energetica dell'edificio o dell'unità immobiliare attraverso raccolta dei dati, sopralluogo e valutazione delle caratteristiche dell'involucro e degli impianti."
      bullets={["Sopralluogo dell'immobile", "Raccolta dei dati geometrici e costruttivi", "Analisi dell'involucro edilizio", "Analisi dei sistemi impiantistici", "Valutazione della prestazione e della classe energetica", "Predisposizione dell'Attestato di Prestazione Energetica"]}
      outcomes={["Disporre della certificazione energetica dell'immobile", "Conoscere la classe e le principali caratteristiche energetiche", "Avere un quadro utile anche per successivi interventi di miglioramento"]}
      context={["Per conoscere e documentare la prestazione energetica di un edificio o di una singola unità immobiliare.", "Quando occorre un quadro sintetico della classe energetica e delle principali caratteristiche di involucro e impianti."]}
      process={[
        { title: "Sopralluogo e dati", text: "Raccogliamo le informazioni geometriche, costruttive e impiantistiche necessarie alla valutazione." },
        { title: "Valutazione energetica", text: "Elaboriamo i dati secondo la procedura applicabile e determiniamo gli indicatori di prestazione e la classe energetica." },
        { title: "Attestato", text: "Predisponiamo l'APE e completiamo gli adempimenti previsti dalla procedura applicabile." },
      ]}
      relatedServices={[{label:"Relazione Legge 10",href:"/servizi/legge-10"},{label:"Diagnosi energetiche",href:"/servizi/diagnosi-energetiche"},{label:"Efficientamento energetico",href:"/servizi/efficientamento-energetico"}]}
      faqs={[
        { question: "APE e diagnosi energetica sono la stessa cosa?", answer: "No. L'APE sintetizza la prestazione energetica e la classe dell'immobile; la diagnosi energetica approfondisce consumi, usi e possibili interventi di miglioramento." },
      ]}
      ecosystemHref="/servizi/ingegneria-edilizia-energia"
      ecosystemLabel="Ingegneria, Edilizia & Energia"
    />
  );
}

