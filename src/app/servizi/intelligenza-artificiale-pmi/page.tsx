import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/intelligenza-artificiale-pmi`;

export const metadata: Metadata = {
  title: "Intelligenza artificiale per PMI | Ingegneri & Co",
  description: "Soluzioni di intelligenza artificiale per PMI: assistenti interni, analisi documentale, ricerca aziendale, automazione e integrazione nei processi.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Intelligenza artificiale per PMI | Ingegneri & Co", description: "AI applicata ai processi reali delle piccole e medie imprese.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Digitalizzazione, Automazione & AI"
      title="Intelligenza artificiale per PMI"
      intro="Progettiamo applicazioni di intelligenza artificiale partendo da problemi concreti dell'impresa: leggere documenti, trovare informazioni, assistere gli operatori, classificare dati, preparare bozze e collegare l'AI ai flussi di lavoro esistenti."
      bullets={["Assistenti AI interni", "Analisi e classificazione documentale", "Ricerca nelle informazioni aziendali", "Supporto alla redazione di contenuti e documenti", "Automazioni con componenti AI", "Integrazione con software e workflow esistenti"]}
      outcomes={["Applicare l'AI dove genera utilità concreta", "Ridurre attività ripetitive e tempi di ricerca", "Mantenere supervisione umana sui processi importanti"]}
      context={["Quando l'impresa ha un problema concreto legato a documenti, ricerca di informazioni, classificazione o supporto operativo che può essere affrontato con componenti AI.", "Quando l'AI deve essere collegata a dati, software e workflow aziendali anziché utilizzata come strumento isolato."]}
      process={[
        { title: "Caso d'uso", text: "Definiamo il problema operativo, gli utenti coinvolti, i dati disponibili e i risultati che devono essere verificabili." },
        { title: "Prototipo controllato", text: "Costruiamo una soluzione circoscritta per verificare qualità, limiti e modalità di supervisione prima di estenderla." },
        { title: "Integrazione nel processo", text: "Colleghiamo l'AI a documenti, dati e workflow definendo controlli umani, gestione degli errori e responsabilità operative." },
      ]}
      relatedServices={[{label:"Analisi documentale e assistenti AI",href:"/servizi/analisi-documentale-assistenti-ai"},{label:"Automazione dei processi",href:"/servizi/automazione-processi"},{label:"Integrazione software, API e dati",href:"/servizi/integrazione-software-dati"}]}
      relatedArticles={[{label:"Intelligenza Artificiale applicata all’ingegneria",href:"/approfondimenti/intelligenza-artificiale-applicata-ingegneria"},{label:"Digitalizzazione PMI: da dove partire",href:"/approfondimenti/digitalizzazione-pmi-da-dove-partire"}]}
      faqs={[
        { question: "Da quale applicazione AI conviene partire?", answer: "Da un problema concreto e misurabile: ricerca di informazioni, classificazione di documenti, assistenza agli operatori o preparazione di bozze. La tecnologia viene scelta dopo aver definito il caso d'uso." },
        { question: "L'AI può lavorare sui dati aziendali già esistenti?", answer: "Sì, quando dati e permessi possono essere organizzati in modo coerente. In molti progetti la qualità dell'integrazione e delle fonti informative è importante quanto il modello AI utilizzato." },
      ]}
      ecosystemHref="/servizi/digitalizzazione-automazione-ai"
      ecosystemLabel="Digitalizzazione, Automazione & AI"
    />
  );
}
