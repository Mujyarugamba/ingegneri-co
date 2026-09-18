import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type RelatedService = { label: string; href: string };
type FaqItem = { question: string; answer: string };
type ProcessStep = { title: string; text: string };

type ServiceLandingProps = {
  eyebrow: string;
  title: string;
  intro: string;
  bullets: string[];
  outcomes: string[];
  ecosystemHref: string;
  ecosystemLabel: string;
  contextTitle?: string;
  context?: string[];
  processTitle?: string;
  process?: ProcessStep[];
  relatedServices?: RelatedService[];
  faqs?: FaqItem[];
};

export function ServiceLanding({
  eyebrow, title, intro, bullets, outcomes, ecosystemHref, ecosystemLabel,
  contextTitle = "Quando può essere utile", context = [], processTitle = "Come lavoriamo", process = [], relatedServices = [], faqs = [],
}: ServiceLandingProps) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Servizi", item: `${siteConfig.url}/servizi` },
      { "@type": "ListItem", position: 3, name: ecosystemLabel, item: `${siteConfig.url}${ecosystemHref}` },
      { "@type": "ListItem", position: 4, name: title },
    ],
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    serviceType: title,
    description: intro,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
  const faqJsonLd = faqs.length ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  } : null;

  return (
    <main className="bg-white text-anthracite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <section className="relative overflow-hidden bg-anthracite">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 18% 45%, #2563a8 0%, transparent 42%), radial-gradient(circle at 82% 20%, #1a4d7c 0%, transparent 34%)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[3.5rem_3.5rem]" />
        <div className="page-container relative py-12 md:py-16 lg:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-white">Home</Link><span aria-hidden="true" className="mx-2">/</span>
            <Link href="/servizi" className="transition-colors hover:text-white">Servizi</Link><span aria-hidden="true" className="mx-2">/</span>
            <Link href={ecosystemHref} className="transition-colors hover:text-white">{ecosystemLabel}</Link><span aria-hidden="true" className="mx-2">/</span>
            <span aria-current="page" className="text-white">{title}</span>
          </nav>
          <p className="section-label text-white/80">{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-muted lg:text-lg">{intro}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="page-container grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          <div><p className="section-label">Servizio</p><h2 className="section-title">Cosa comprende</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">{bullets.map(item => <li key={item} className="card-elegant text-sm leading-relaxed text-anthracite-soft">{item}</li>)}</ul>
          </div>
          <aside className="self-start rounded-2xl bg-anthracite p-7 text-white shadow-lg shadow-anthracite/10 lg:p-8">
            <p className="section-label text-white/80">Risultato atteso</p><h2 className="mt-3 text-2xl font-bold tracking-tight text-white">Obiettivo</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/80">{outcomes.map(item => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tech-blue-light" /><span>{item}</span></li>)}</ul>
            <div className="mt-8 flex flex-col gap-3"><a href={siteConfig.whatsAppHref} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Parla con noi su WhatsApp<span className="sr-only"> (si apre in una nuova scheda)</span></a><a href={`mailto:${siteConfig.email}`} className="btn-outline-light w-full">Scrivici via email</a></div>
          </aside>
        </div>
      </section>

      {context.length > 0 && <section className="border-t border-gray-border bg-gray-light"><div className="page-container section-padding"><p className="section-label">Applicazioni</p><h2 className="section-title">{contextTitle}</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{context.map(item => <p key={item} className="rounded-2xl border border-gray-border bg-white p-5 leading-relaxed text-anthracite-soft">{item}</p>)}</div></div></section>}

      {process.length > 0 && <section className="border-t border-gray-border bg-white"><div className="page-container section-padding"><p className="section-label">Metodo</p><h2 className="section-title">{processTitle}</h2><ol className="mt-7 grid gap-4 md:grid-cols-3">{process.map((step, index) => <li key={`${step.title}-${index}`} className="rounded-2xl border border-gray-border bg-gray-light p-5"><span className="text-sm font-bold text-tech-blue">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 text-lg font-bold text-anthracite">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-anthracite-soft">{step.text}</p></li>)}</ol></div></section>}

      {relatedServices.length > 0 && <section className="border-t border-gray-border bg-white"><div className="page-container section-padding"><p className="section-label">Competenze integrate</p><h2 className="section-title">Servizi collegati</h2><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{relatedServices.map(service => <Link key={service.href} href={service.href} className="group rounded-2xl border border-gray-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-tech-blue/40 hover:shadow-md"><span className="font-semibold text-anthracite group-hover:text-tech-blue">{service.label}</span><span className="mt-3 block text-sm font-semibold text-tech-blue">Approfondisci →</span></Link>)}</div></div></section>}

      {faqs.length > 0 && <section className="border-t border-gray-border bg-gray-light"><div className="page-container section-padding"><p className="section-label">Domande frequenti</p><h2 className="section-title">FAQ</h2><div className="mt-7 grid gap-4">{faqs.map(faq => <details key={faq.question} className="rounded-2xl border border-gray-border bg-white p-5"><summary className="cursor-pointer font-semibold text-anthracite">{faq.question}</summary><p className="mt-3 leading-relaxed text-anthracite-soft">{faq.answer}</p></details>)}</div></div></section>}

      <section className="border-t border-gray-border bg-gray-light"><div className="page-container py-10"><Link href={ecosystemHref} className="btn-outline-dark">Torna a {ecosystemLabel}</Link></div></section>
    </main>
  );
}
