import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/conformita-urbanistica-catastale`;

export const metadata: Metadata = {
  title: "Conformità urbanistica e catastale | Ingegneri & Co",
  description: "Verifica della conformità urbanistica e catastale, dello stato legittimo e delle eventuali difformità di immobili prima di interventi, vendite o acquisti.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Conformità urbanistica e catastale | Ingegneri & Co", description: "Verifiche tecniche e documentali per confrontare titoli edilizi, catasto e stato dei luoghi.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="Conformità urbanistica e catastale"
      intro="Verifichiamo la documentazione urbanistica e catastale dell'immobile e la confrontiamo con lo stato dei luoghi per individuare eventuali difformità e gli approfondimenti tecnici necessari."
      bullets={[
        "Accesso e analisi dei titoli edilizi disponibili",
        "Verifica dello stato legittimo",
        "Confronto tra elaborati autorizzati e stato dei luoghi",
        "Verifica catastale e planimetrica",
        "Individuazione di difformità",
        "Valutazione tecnica delle possibili regolarizzazioni",
      ]}
      outcomes={[
        "Conoscere la situazione urbanistica e catastale dell'immobile",
        "Individuare criticità prima di lavori, vendite o acquisti",
        "Definire gli eventuali approfondimenti o percorsi di regolarizzazione",
      ]}
      contextTitle="Quando è utile una verifica"
      context={[
        "Prima di una compravendita, quando è opportuno ricostruire il quadro documentale e confrontarlo con lo stato effettivo dell'immobile.",
        "Prima di una ristrutturazione o di una nuova pratica edilizia, quando occorre chiarire eventuali difformità pregresse.",
      ]}
      process={[
        { title: "Raccolta documentale", text: "Raccogliamo titoli edilizi, elaborati, documentazione catastale e gli altri atti tecnici disponibili." },
        { title: "Confronto tecnico", text: "Confrontiamo documenti e planimetrie con lo stato dei luoghi, evidenziando eventuali scostamenti da approfondire." },
        { title: "Esito e percorso", text: "Restituiamo un quadro tecnico delle criticità rilevate e delle eventuali verifiche o regolarizzazioni da valutare." },
      ]}
      relatedServices={[
        { label: "Due diligence immobiliare", href: "/servizi/due-diligence-immobiliare" },
        { label: "Pratiche edilizie", href: "/servizi/pratiche-edilizie" },
      ]}
      faqs={[
        { question: "Conformità urbanistica e conformità catastale sono la stessa cosa?", answer: "No. Sono verifiche diverse e complementari: la prima riguarda il quadro edilizio e urbanistico dell'immobile, la seconda la corrispondenza dei dati e delle planimetrie catastali con lo stato dei luoghi." },
        { question: "La planimetria catastale basta per verificare la regolarità dell'immobile?", answer: "No. La verifica catastale non sostituisce l'analisi dei titoli edilizi e della documentazione urbanistica disponibile." },
      ]}
      ecosystemHref="/servizi/ingegneria-edilizia-energia"
      ecosystemLabel="Ingegneria, Edilizia & Energia"
    />
  );
}

