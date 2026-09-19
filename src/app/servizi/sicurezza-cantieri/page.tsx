import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/sicurezza-cantieri`;

export const metadata: Metadata = {
  title: "Sicurezza cantieri, CSP e CSE | Ingegneri & Co",
  description: "Coordinamento della sicurezza nei cantieri: incarichi CSP e CSE, PSC e supporto tecnico-documentale nelle fasi di progettazione ed esecuzione.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Sicurezza cantieri, CSP e CSE | Ingegneri & Co", description: "Coordinamento della sicurezza e supporto tecnico-documentale per i cantieri.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="Sicurezza cantieri e coordinamento CSP/CSE"
      intro="Svolgiamo attività di coordinamento della sicurezza nelle fasi di progettazione ed esecuzione nei casi previsti, integrando gli aspetti di sicurezza con il progetto e l'organizzazione del cantiere."
      bullets={["Coordinamento della Sicurezza in fase di Progettazione (CSP)", "Coordinamento della Sicurezza in fase di Esecuzione (CSE)", "Piano di Sicurezza e Coordinamento (PSC)", "Coordinamento della documentazione di sicurezza", "Sopralluoghi e attività previste dall'incarico", "Interfaccia tecnica con committente, imprese e professionisti"]}
      outcomes={["Integrare la sicurezza nella pianificazione del cantiere", "Coordinare gli adempimenti previsti dall'incarico", "Mantenere un riferimento tecnico nelle fasi di progettazione ed esecuzione"]}
      context={["Cantieri nei quali ricorrono le condizioni per il coordinamento della sicurezza in fase di progettazione o di esecuzione.", "Interventi nei quali il committente deve coordinare correttamente progetto, organizzazione del cantiere e documentazione di sicurezza prevista dall'incarico."]}
      process={[
        { title: "Inquadramento del cantiere", text: "Analizziamo intervento, organizzazione prevista, soggetti coinvolti e documentazione disponibile." },
        { title: "Coordinamento e documenti", text: "Predisponiamo e coordiniamo gli elaborati e gli adempimenti previsti dallo specifico incarico." },
        { title: "Fase esecutiva", text: "Svolgiamo sopralluoghi, verifiche e attività di coordinamento previste durante l'esecuzione." },
      ]}
      relatedServices={[{label:"Direzione lavori",href:"/servizi/direzione-lavori"},{label:"Pratiche edilizie",href:"/servizi/pratiche-edilizie"}]}
      faqs={[
        { question: "CSP e CSE sono necessari in tutti i cantieri?", answer: "No. La necessità degli incarichi dipende dalle caratteristiche del cantiere, dall'organizzazione delle imprese e dalle condizioni previste dalla normativa applicabile. Il caso va quindi inquadrato prima dell'avvio delle attività." },
        { question: "Coordinamento della sicurezza e direzione lavori sono la stessa funzione?", answer: "No. Sono attività distinte, con finalità e responsabilità differenti. Quando entrambe sono previste, è però importante che progetto, organizzazione del cantiere e attività esecutive siano tecnicamente coordinati." },
      ]}
      ecosystemHref="/servizi/ingegneria-edilizia-energia"
      ecosystemLabel="Ingegneria, Edilizia & Energia"
    />
  );
}

