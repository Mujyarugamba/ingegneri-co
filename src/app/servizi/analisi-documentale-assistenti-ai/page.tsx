import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/analisi-documentale-assistenti-ai`;

export const metadata: Metadata = {
  title: "Analisi documentale e assistenti AI | Ingegneri & Co",
  description:
    "Soluzioni AI per classificare documenti, estrarre dati, facilitare la ricerca interna e costruire assistenti dedicati a procedure e conoscenza aziendale.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Analisi documentale e assistenti AI | Ingegneri & Co",
    description: "AI applicata a documenti, procedure e conoscenza interna dell'impresa.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Digitalizzazione, Automazione & AI"
      title="Analisi documentale e assistenti AI"
      intro="Progettiamo soluzioni che aiutano a leggere, classificare e ricercare documenti aziendali, estrarre informazioni utili e supportare le persone nell'accesso a procedure e conoscenza interna."
      bullets={[
        "Classificazione automatica dei documenti",
        "Estrazione strutturata di dati",
        "Ricerca semantica su archivi interni",
        "Assistenti AI su procedure e conoscenza aziendale",
        "Workflow di revisione e controllo umano",
        "Integrazione con strumenti e database esistenti",
      ]}
      outcomes={[
        "Ridurre tempi di ricerca e consultazione",
        "Trasformare documenti non strutturati in informazioni utilizzabili",
        "Supportare il personale senza sostituire i controlli necessari",
      ]}
      context={["Archivi documentali nei quali reperire informazioni richiede molto tempo o conoscenza specifica delle cartelle e dei file.","Processi nei quali classificazione, estrazione dati e ricerca possono supportare gli operatori mantenendo verifiche e controlli umani."]}
      relatedServices={[{label:"Intelligenza artificiale per PMI",href:"/servizi/intelligenza-artificiale-pmi"},{label:"Integrazione software e dati",href:"/servizi/integrazione-software-dati"},{label:"Automazione dei processi",href:"/servizi/automazione-processi"}]}
      ecosystemHref="/servizi/digitalizzazione-automazione-ai"
      ecosystemLabel="Digitalizzazione, Automazione & AI"
    />
  );
}
