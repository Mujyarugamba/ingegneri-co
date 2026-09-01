import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/legge-10`;

export const metadata: Metadata = {
  title: "Relazione Legge 10 | Ingegneri & Co",
  description: "Relazioni tecniche Legge 10 per gli interventi nei casi previsti dalla normativa, con verifiche dei requisiti energetici e supporto progettuale.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Relazione Legge 10 | Ingegneri & Co", description: "Relazioni tecniche energetiche e verifiche di conformità nei casi previsti dalla normativa.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return <ServiceLanding eyebrow="Ingegneria, Edilizia & Energia" title="Relazione tecnica Legge 10" intro="Predisponiamo, quando richiesta dalla normativa applicabile, la relazione tecnica energetica per interventi su edifici e impianti, coordinando dati dell'involucro, sistemi tecnici e requisiti prestazionali del progetto." bullets={["Nuove costruzioni", "Ristrutturazioni e riqualificazioni nei casi previsti", "Interventi sugli impianti quando soggetti a relazione", "Verifiche dell'involucro", "Verifiche dei sistemi impiantistici", "Coordinamento con progetto e pratica edilizia"]} outcomes={["Documentare i requisiti energetici dell'intervento", "Coordinare involucro e impianti", "Ridurre incongruenze tra progetto edilizio ed energetico"]} ecosystemHref="/servizi/ingegneria-edilizia-energia" ecosystemLabel="Ingegneria, Edilizia & Energia" />;
}
