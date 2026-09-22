import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/due-diligence-immobiliare`;

export const metadata: Metadata = {
  title: "Due diligence immobiliare | Ingegneri & Co",
  description: "Due diligence tecnica immobiliare con verifiche urbanistiche, catastali e documentali, sopralluogo e analisi delle criticità prima di acquisti e vendite.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Due diligence immobiliare | Ingegneri & Co",
    description: "Verifica tecnica e documentale dell'immobile per individuare conformità, difformità e criticità.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="Due diligence immobiliare"
      intro="Analizziamo lo stato tecnico e documentale dell'immobile per individuare eventuali difformità, criticità e aspetti da approfondire prima di un acquisto, una vendita, una ristrutturazione o un investimento."
      bullets={["Accesso agli atti e verifica dei titoli edilizi", "Verifica urbanistica e dello stato legittimo", "Verifica catastale e confronto con lo stato dei luoghi", "Sopralluogo e rilievo dell'immobile", "Verifica della documentazione tecnica disponibile", "Analisi di impianti, prestazioni energetiche e documenti disponibili", "Individuazione di difformità e criticità", "Valutazione delle possibili regolarizzazioni", "Relazione tecnica di due diligence", "Stima indicativa degli interventi, quando richiesta"]}
      outcomes={["Conoscere la situazione tecnica e documentale dell'immobile", "Individuare criticità prima di assumere decisioni o impegni", "Disporre di un quadro tecnico per acquisti, vendite, ristrutturazioni e investimenti"]}
      context={["Prima di un acquisto o di un investimento, per conoscere meglio lo stato tecnico e documentale dell'immobile.", "Prima di una vendita o di una ristrutturazione, quando è utile individuare in anticipo documenti mancanti, difformità o aspetti da approfondire."]}
      process={[
        { title: "Documenti e sopralluogo", text: "Raccogliamo la documentazione disponibile e verifichiamo direttamente lo stato dell'immobile." },
        { title: "Analisi delle criticità", text: "Confrontiamo gli elementi urbanistici, catastali, tecnici ed energetici pertinenti al perimetro dell'incarico." },
        { title: "Quadro decisionale", text: "Restituiamo una sintesi tecnica delle criticità e degli approfondimenti o interventi da valutare prima della decisione." },
      ]}
      relatedServices={[{label:"Conformità urbanistica e catastale",href:"/servizi/conformita-urbanistica-catastale"},{label:"Pratiche edilizie",href:"/servizi/pratiche-edilizie"},{label:"APE e certificazione energetica",href:"/servizi/ape-certificazione-energetica"}]}
      relatedArticles={[{label:"Due diligence immobiliare: cosa verificare prima di acquistare",href:"/approfondimenti/due-diligence-immobiliare-cosa-verificare"},{label:"Conformità urbanistica e catastale: le differenze",href:"/approfondimenti/conformita-urbanistica-catastale-differenze"}]}
      faqs={[
        { question: "La due diligence coincide con la sola verifica urbanistica?", answer: "No. La verifica urbanistica può essere una parte della due diligence, che può includere anche aspetti catastali, documentali, impiantistici, energetici e tecnici in funzione dell'immobile e dell'incarico." },
        { question: "Quando conviene svolgerla?", answer: "È particolarmente utile prima di assumere impegni economici rilevanti, quando conoscere in anticipo criticità e documenti mancanti può incidere sulle decisioni successive." },
      ]}
      ecosystemHref="/servizi/ingegneria-edilizia-energia"
      ecosystemLabel="Ingegneria, Edilizia & Energia"
    />
  );
}
