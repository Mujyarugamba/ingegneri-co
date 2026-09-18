import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/automazione-processi`;

export const metadata: Metadata = {
  title: "Automazione processi e workflow | Ingegneri & Co",
  description: "Workflow, notifiche, approvazioni e automazioni operative per ridurre attività ripetitive e passaggi manuali nei processi aziendali.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Automazione processi e workflow | Ingegneri & Co",
    description: "Workflow e automazioni operative integrate con gli strumenti aziendali.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Digitalizzazione, Automazione & AI"
      title="Automazione dei processi e workflow aziendali"
      intro="Analizziamo attività ripetitive, passaggi manuali e flussi informativi per progettare workflow e automazioni semplici, controllabili e integrati con gli strumenti già presenti in azienda quando possibile."
      bullets={["Mappatura delle attività ripetitive", "Workflow automatici", "Notifiche e passaggi autorizzativi", "Automazione dello scambio di informazioni", "Collegamento con strumenti esistenti", "Controllo e tracciabilità dei flussi"]}
      outcomes={["Ridurre tempi operativi", "Diminuire errori e duplicazioni", "Rendere i processi più tracciabili e controllabili"]}
      context={["Processi che richiedono inserimenti ripetuti, passaggi manuali o trasferimenti frequenti di informazioni.", "Flussi nei quali notifiche, controlli o attività standard possono essere automatizzati mantenendo visibilità sul processo."]}
      process={[
        { title: "Mappatura del workflow", text: "Identifichiamo attività, attori, dati, regole e punti nei quali oggi avvengono passaggi manuali o ripetitivi." },
        { title: "Disegno dell'automazione", text: "Definiamo trigger, regole, notifiche, approvazioni e integrazioni necessarie al nuovo flusso." },
        { title: "Verifica e controllo", text: "Testiamo il workflow e manteniamo visibili eccezioni, controlli e passaggi che richiedono supervisione umana." },
      ]}
      relatedServices={[{label:"Digitalizzazione delle PMI",href:"/servizi/servizi-digitali-pmi"},{label:"Integrazione software, API e dati",href:"/servizi/integrazione-software-dati"},{label:"Intelligenza artificiale per PMI",href:"/servizi/intelligenza-artificiale-pmi"}]}
      faqs={[
        { question: "Automazione dei processi e integrazione software sono la stessa cosa?", answer: "No. L'automazione riguarda il flusso operativo e le regole con cui le attività avanzano; l'integrazione software riguarda il collegamento tecnico tra applicazioni, database e API. Spesso i due servizi lavorano insieme." },
      ]}
      ecosystemHref="/servizi/digitalizzazione-automazione-ai"
      ecosystemLabel="Digitalizzazione, Automazione & AI"
    />
  );
}
