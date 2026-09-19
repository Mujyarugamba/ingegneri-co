import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/integrazione-software-dati`;

export const metadata: Metadata = {
  title: "Integrazione software, API e dati aziendali | Ingegneri & Co",
  description: "Integrazione tra applicazioni, API, database e fonti dati per ridurre duplicazioni e creare una base tecnica per workflow, dashboard e AI.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Integrazione software, API e dati aziendali | Ingegneri & Co",
    description: "Architettura tecnica per collegare applicazioni, database, API e sistemi aziendali.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Digitalizzazione, Automazione & AI"
      title="Integrazione software, API e dati aziendali"
      intro="Colleghiamo applicazioni, database e sistemi affinché possano scambiarsi informazioni in modo coerente, riducendo duplicazioni e creando una base tecnica più ordinata per automazioni, dashboard e applicazioni AI."
      bullets={["Analisi dei sistemi e delle fonti dati", "Integrazione tra applicazioni e database", "API e scambio strutturato di dati", "Normalizzazione e organizzazione delle informazioni", "Supporto alla migrazione dei dati", "Base dati per dashboard, automazioni e AI"]}
      outcomes={["Rendere i dati più accessibili e affidabili", "Ridurre duplicazioni tra sistemi", "Creare una base tecnica per automazioni e AI"]}
      context={["Quando le stesse informazioni vengono copiate manualmente tra software diversi o archiviate in più punti.", "Quando applicazioni e database devono comunicare per alimentare processi, dashboard, portali o soluzioni AI."]}
      process={[
        { title: "Mappa dei sistemi", text: "Identifichiamo applicazioni, database, file, API e responsabilità dei dati nei diversi strumenti." },
        { title: "Disegno dell'integrazione", text: "Definiamo come devono viaggiare le informazioni, quali dati sono master e quali controlli servono sugli scambi." },
        { title: "Collegamento e verifica", text: "Implementiamo o coordiniamo le integrazioni e verifichiamo coerenza, tracciabilità e gestione degli errori." },
      ]}
      relatedServices={[{label:"Digitalizzazione delle PMI",href:"/servizi/servizi-digitali-pmi"},{label:"Automazione dei processi",href:"/servizi/automazione-processi"},{label:"Analisi documentale e assistenti AI",href:"/servizi/analisi-documentale-assistenti-ai"},{label:"Portali e applicazioni web",href:"/servizi/portali-applicazioni-web"}]}
      faqs={[
        { question: "Serve sostituire i gestionali esistenti per integrarli?", answer: "Non necessariamente. Quando i sistemi dispongono di API, esportazioni strutturate o altri meccanismi compatibili, è spesso possibile collegarli mantenendo gli strumenti già utilizzati." },
        { question: "Perché l'integrazione dei dati viene prima di molte applicazioni AI?", answer: "Perché automazioni e AI diventano più affidabili quando lavorano su informazioni accessibili, coerenti e ben organizzate invece che su dati dispersi tra sistemi non collegati." },
      ]}
      ecosystemHref="/servizi/digitalizzazione-automazione-ai"
      ecosystemLabel="Digitalizzazione, Automazione & AI"
    />
  );
}
