import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/contatti`;

export const metadata: Metadata = {
  title: "Contatti e consulenza tecnica | Ingegneri & Co",
  description:
    "Contatta Ingegneri & Co per consulenze tecniche in edilizia, energia, impianti e innovazione. Operatività tra Milano, Pavia, Verbania, Lombardia e Piemonte.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Contatti e consulenza tecnica | Ingegneri & Co",
    description:
      "Contatta Ingegneri & Co per consulenze tecniche e informazioni sui servizi.",
    type: "website",
    locale: "it_IT",
    url: canonicalUrl,
  },
};

export default function ContattiPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Contatti", item: canonicalUrl },
    ],
  };

  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: canonicalUrl,
    name: "Contatti Ingegneri & Co",
    mainEntity: { "@id": `${siteConfig.url}/#organization` },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />

      <PageHero
        eyebrow="Contatti"
        title="Parliamo del tuo progetto"
        intro="Che tu sia un privato, un'impresa o un professionista, raccontaci l'esigenza: inquadriamo il tema e valutiamo con te il percorso tecnico più adatto."
        current="Contatti"
      />

      <section className="section-padding bg-gray-light">
        <div className="page-container grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-gray-border bg-white p-6 shadow-sm sm:p-10">
            <p className="section-label">Contatto diretto</p>
            <h2 className="section-title">Come contattarci</h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a href={`mailto:${siteConfig.email}`} className="rounded-xl border border-gray-border p-5 transition hover:border-tech-blue/40 hover:shadow-sm">
                <span className="text-xs font-semibold tracking-widest text-gray-muted uppercase">Email</span>
                <span className="mt-2 block font-semibold text-tech-blue">{siteConfig.email}</span>
              </a>
              <a href={siteConfig.whatsAppHref} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-gray-border p-5 transition hover:border-tech-blue/40 hover:shadow-sm">
                <span className="text-xs font-semibold tracking-widest text-gray-muted uppercase">WhatsApp</span>
                <span className="mt-2 block font-semibold text-tech-blue">{siteConfig.whatsApp}</span>
                <span className="sr-only"> (si apre in una nuova scheda)</span>
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-light p-5">
                <h3 className="font-bold text-anthracite">Area operativa</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-muted">
                  Operiamo principalmente tra Milano, Pavia e Verbania, con attività in Lombardia e Piemonte in funzione del tipo di incarico.
                </p>
              </div>
              <div className="rounded-xl bg-gray-light p-5">
              <h3 className="font-bold text-anthracite">Per inquadrare meglio la richiesta</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-muted">
                Se possibile indica località, tipo di immobile o attività, obiettivo, tempistiche e documentazione già disponibile. Per impianti o interventi esistenti sono utili anche fotografie e dati tecnici principali.
              </p>
              </div>
            </div>

            <a href={siteConfig.whatsAppHref} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
              Scrivici su WhatsApp
              <span className="sr-only"> (si apre in una nuova scheda)</span>
            </a>
          </div>

          <aside className="rounded-2xl bg-anthracite p-6 text-white shadow-lg sm:p-8">
            <p className="section-label text-white/80">Orientamento</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">Non sai da quale servizio partire?</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Consulta i due ecosistemi oppure inviaci direttamente il problema da risolvere: l'inquadramento del servizio viene dopo l'analisi dell'esigenza.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <Link href="/servizi/ingegneria-edilizia-energia" className="btn-outline-light">
                Ingegneria, Edilizia &amp; Energia
              </Link>
              <Link href="/servizi/digitalizzazione-automazione-ai" className="btn-outline-light">
                Digitalizzazione, Automazione &amp; AI
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
