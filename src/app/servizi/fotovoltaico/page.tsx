import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/fotovoltaico`;

export const metadata: Metadata = {
  title: "Fotovoltaico e sistemi di accumulo | Ingegneri & Co",
  description: "Valutazione e progettazione di impianti fotovoltaici con accumulo per edifici e imprese, integrate con consumi, impianti elettrici e obiettivi energetici.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Fotovoltaico e sistemi di accumulo | Ingegneri & Co", description: "Impianti fotovoltaici integrati con i reali fabbisogni energetici di edifici e imprese.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="Fotovoltaico e sistemi di accumulo"
      intro="Studiamo il dimensionamento dell'impianto in relazione ai consumi, alle superfici disponibili, agli impianti esistenti e agli obiettivi del cliente, valutando quando utile anche sistemi di accumulo e strategie di autoconsumo."
      bullets={["Analisi dei consumi", "Dimensionamento preliminare", "Valutazione delle superfici disponibili", "Accumulo e autoconsumo", "Integrazione con impianti elettrici", "Supporto tecnico alla realizzazione"]}
      outcomes={["Dimensionare l'impianto sui fabbisogni stimati e sui dati disponibili", "Favorire l'autoconsumo quando tecnicamente ed economicamente utile", "Integrare produzione, accumulo e impianti in modo coerente"]}
      context={["Quando si vuole valutare un impianto fotovoltaico sulla base dei consumi e delle superfici effettivamente disponibili.", "Quando produzione, accumulo, impianto elettrico e nuovi carichi come pompe di calore richiedono una valutazione integrata."]}
      process={[
        { title: "Consumi e sito", text: "Analizziamo profilo dei consumi, superfici disponibili, orientamenti, vincoli tecnici e impianto elettrico esistente." },
        { title: "Dimensionamento", text: "Definiamo potenza, configurazione e ruolo dell'eventuale accumulo in funzione degli obiettivi e dei dati disponibili." },
        { title: "Integrazione", text: "Coordiniamo il fotovoltaico con distribuzione elettrica, accumulo e nuovi carichi previsti." },
      ]}
      relatedServices={[{label:"Impianti elettrici",href:"/servizi/impianti-elettrici"},{label:"Efficientamento energetico",href:"/servizi/efficientamento-energetico"},{label:"Impianti termici e climatizzazione",href:"/servizi/impianti-termici-climatizzazione"},{label:"Nuovo Piano Transizione 5.0",href:"/servizi/transizione-5-0"}]}
      faqs={[
        { question: "Un impianto più grande è sempre migliore?", answer: "Non necessariamente. Il dimensionamento va valutato rispetto a consumi, superfici, profili di utilizzo, impianto elettrico e obiettivi del cliente." },
        { question: "L'accumulo è sempre necessario?", answer: "No. Va valutato caso per caso in funzione del profilo di consumo, della produzione attesa e degli obiettivi di autoconsumo e gestione energetica." },
      ]}
      ecosystemHref="/servizi/ingegneria-edilizia-energia"
      ecosystemLabel="Ingegneria, Edilizia & Energia"
    />
  );
}
