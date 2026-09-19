import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/efficientamento-energetico`;

export const metadata: Metadata = {
  title: "Efficientamento energetico | Ingegneri & Co",
  description: "Analisi e progettazione di interventi di efficientamento energetico per edifici e imprese, dall'involucro agli impianti e ai sistemi di controllo.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Efficientamento energetico | Ingegneri & Co", description: "Interventi integrati per ridurre consumi e migliorare le prestazioni energetiche.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="Efficientamento energetico"
      intro="Valutiamo consumi, involucro, impianti e modalità di utilizzo per individuare interventi tecnicamente coerenti e misurabili, con priorità alle soluzioni che migliorano prestazioni, controllo e affidabilità."
      bullets={["Analisi dei consumi", "Interventi sull'involucro", "Riqualificazione degli impianti", "Regolazione e controllo", "Integrazione con fotovoltaico", "Valutazione tecnico-economica degli interventi"]}
      outcomes={["Ridurre consumi e sprechi", "Migliorare comfort e prestazioni", "Definire priorità di investimento tecnicamente motivate"]}
      context={["Quando consumi, comfort o prestazioni dell'edificio suggeriscono di valutare interventi sull'involucro, sugli impianti o sui sistemi di regolazione.", "Dopo una diagnosi energetica o un'analisi preliminare, per trasformare le criticità individuate in scenari di intervento coordinati."]}
      process={[
        { title: "Definizione delle priorità", text: "Partiamo dai dati disponibili, dalla diagnosi o dalle criticità note per identificare gli interventi più rilevanti." },
        { title: "Progetto degli interventi", text: "Coordiniamo involucro, impianti, regolazione e produzione energetica in scenari tecnicamente coerenti." },
        { title: "Valutazione e attuazione", text: "Confrontiamo costi, benefici e vincoli tecnici e supportiamo il passaggio dalla scelta alla realizzazione." },
      ]}
      relatedServices={[{label:"Diagnosi energetiche",href:"/servizi/diagnosi-energetiche"},{label:"Impianti termici e climatizzazione",href:"/servizi/impianti-termici-climatizzazione"},{label:"Fotovoltaico",href:"/servizi/fotovoltaico"},{label:"Relazione Legge 10",href:"/servizi/legge-10"}]}
      faqs={[
        { question: "Serve sempre una diagnosi energetica prima di un intervento di efficientamento?", answer: "Non sempre. Nei casi più semplici può essere sufficiente un'analisi mirata dei dati e degli impianti; per edifici o processi più complessi la diagnosi energetica consente di definire priorità e scenari di intervento con maggiore approfondimento." },
        { question: "L'efficientamento energetico riguarda solo gli impianti?", answer: "No. Può coinvolgere involucro, impianti, regolazione, sistemi di controllo, produzione da fonti rinnovabili e modalità di utilizzo, valutando le interazioni tra i diversi elementi." },
      ]}
      ecosystemHref="/servizi/ingegneria-edilizia-energia"
      ecosystemLabel="Ingegneria, Edilizia & Energia"
    />
  );
}
