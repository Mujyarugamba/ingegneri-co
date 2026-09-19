import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/pratiche-edilizie`;

export const metadata: Metadata = {
  title: "Pratiche edilizie, CILA e SCIA | Ingegneri & Co",
  description: "Supporto tecnico per CILA, SCIA, permessi, sanatorie, cambi d’uso, accesso agli atti e pratiche edilizie per immobili e attività.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Pratiche edilizie, CILA e SCIA | Ingegneri & Co",
    description: "Pratiche edilizie e supporto tecnico per immobili e attività.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="Pratiche edilizie"
      intro="Gestiamo e coordiniamo gli adempimenti tecnici necessari per interventi edilizi e regolarizzazioni, individuando la procedura appropriata e coordinando elaborati e documentazione nel rapporto con gli enti competenti."
      bullets={["CILA e SCIA", "Permessi di costruire", "Sanatorie e regolarizzazioni", "Cambio d’uso e pratiche collegate", "Accesso agli atti", "Supporto tecnico per idoneità alloggiativa", "Elaborati e documentazione tecnica", "Coordinamento del percorso tecnico-amministrativo"]}
      outcomes={["Individuare la procedura corretta", "Ridurre errori e integrazioni documentali", "Coordinare il percorso tecnico-amministrativo"]}
      context={["Interventi di ristrutturazione o modifica dell'immobile che richiedono una pratica edilizia.", "Regolarizzazioni e situazioni nelle quali occorre ricostruire o coordinare il percorso documentale dell'intervento."]}
      process={[
        { title: "Inquadramento", text: "Analizziamo l'intervento, la documentazione disponibile e il quadro edilizio utile a individuare il percorso tecnico-amministrativo." },
        { title: "Elaborati e pratica", text: "Predisponiamo gli elaborati e la documentazione tecnica necessari alla pratica individuata." },
        { title: "Gestione dell'iter", text: "Seguiamo il percorso della pratica e coordiniamo eventuali integrazioni o adempimenti tecnici collegati." },
      ]}
      relatedServices={[{label:"Conformità urbanistica e catastale",href:"/servizi/conformita-urbanistica-catastale"},{label:"Due diligence immobiliare",href:"/servizi/due-diligence-immobiliare"},{label:"Direzione lavori",href:"/servizi/direzione-lavori"}]}
      faqs={[
        { question: "Prima di presentare una pratica edilizia è sempre utile verificare lo stato dell'immobile?", answer: "Quando la documentazione disponibile o lo stato dei luoghi presentano dubbi, una verifica preliminare aiuta a evitare che la nuova pratica si sovrapponga a criticità pregresse non chiarite." },
        { question: "Pratica edilizia e verifica di conformità sono lo stesso servizio?", answer: "No. La verifica di conformità ricostruisce e confronta lo stato documentale e reale dell'immobile; la pratica edilizia riguarda il procedimento necessario per un nuovo intervento o, quando possibile, per una regolarizzazione." },
      ]}
      ecosystemHref="/servizi/ingegneria-edilizia-energia"
      ecosystemLabel="Ingegneria, Edilizia & Energia"
    />
  );
}
