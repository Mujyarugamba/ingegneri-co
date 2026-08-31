import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/pratiche-edilizie`;

export const metadata: Metadata = {
  title: "Pratiche edilizie | Ingegneri & Co",
  description: "Supporto tecnico per CILA, SCIA, permessi, sanatorie, verifiche urbanistiche e pratiche edilizie per immobili e attività.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Pratiche edilizie | Ingegneri & Co", description: "Pratiche edilizie e supporto tecnico per immobili e attività.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return <ServiceLanding eyebrow="Ingegneria, Edilizia & Energia" title="Pratiche edilizie" intro="Gestiamo e coordiniamo gli adempimenti tecnici necessari per interventi edilizi, regolarizzazioni e verifiche dello stato legittimo dell'immobile, con attenzione alla documentazione e al rapporto con gli enti competenti." bullets={["CILA e SCIA", "Permessi di costruire", "Sanatorie e regolarizzazioni", "Verifiche urbanistiche e catastali", "Accesso agli atti", "Coordinamento documentale"]} outcomes={["Individuare la procedura corretta", "Ridurre errori e integrazioni documentali", "Coordinare il percorso tecnico-amministrativo"]} ecosystemHref="/servizi/ingegneria-edilizia-energia" ecosystemLabel="Ingegneria, Edilizia & Energia" />;
}
