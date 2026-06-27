import type { Metadata } from "next";
import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import ProjectsSection from "@/components/projects/ProjectsSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Ingegneri & Co | Ingegneria, energia e innovazione per edifici e imprese",
  description:
    "Rete tecnica multidisciplinare di ingegneri, architetti e geometri. Affianchiamo imprese, professionisti e privati in edilizia, energia, impianti, automazione e innovazione tecnologica.",
  keywords: [
    "ingegneria",
    "architettura",
    "geometri",
    "efficientamento energetico",
    "fotovoltaico",
    "pratiche edilizie",
    "diagnosi energetiche",
    "Industria 4.0",
    "Transizione 5.0",
    "automazione",
    "Smart Building",
  ],
  openGraph: {
    title: "Ingegneri & Co | Ingegneria, energia e innovazione",
    description:
      "Rete tecnica multidisciplinare di ingegneri, architetti e geometri per consulenze tecniche, edilizia, energia e innovazione digitale.",
    type: "website",
    locale: "it_IT",
  },
};

const percheScegliere = [
  { value: "26+", label: "Anni di esperienza" },
  { value: "3", label: "Aree di competenza" },
  { value: "Approccio", label: "Multidisciplinare" },
  { value: "Ingegneri • Architetti • Geometri", label: "Rete professionale", compact: true },
];

const areeCompetenza = [
  {
    title: "Civile, Ambientale e Architettonica",
    description:
      "Progettazione architettonica, interventi edilizi, conformità normativa e sostenibilità ambientale, con gestione integrata di pratiche e documentazione tecnica.",
    items: [
      "Pratiche edilizie",
      "Direzione lavori",
      "Sicurezza",
      "Conformità urbanistica",
      "APE",
      "Legge 10",
    ],
  },
  {
    title: "Industriale",
    description:
      "Soluzioni per impianti, efficienza energetica e innovazione industriale, con competenze certificate per audit, diagnosi e accesso agli incentivi.",
    items: [
      "Impianti elettrici",
      "Fotovoltaico",
      "Diagnosi energetiche",
      "Efficientamento energetico",
      "Audit energetici",
      "Transizione 5.0",
    ],
  },
  {
    title: "Dell'Informazione",
    description:
      "Progettiamo e integriamo soluzioni tecnologiche per automazione, monitoraggio, digitalizzazione dei processi e sviluppo di piattaforme software, supportando imprese e professionisti nell'innovazione.",
    items: [
      "Automazione industriale",
      "PLC e sistemi di supervisione",
      "Internet of Things (IoT)",
      "Building Automation",
      "Smart Building",
      "Monitoraggio energetico",
      "Sistemi di acquisizione dati",
      "Controllo remoto degli impianti",
      "Integrazione hardware e software",
      "Intelligenza Artificiale applicata ai processi",
      "Sviluppo di siti web e portali professionali",
      "Industria 4.0 e Transizione 5.0",
    ],
  },
];

const comeLavoriamo = [
  {
    step: "1",
    title: "Analisi tecnica",
    description:
      "Valutiamo esigenze, vincoli normativi e obiettivi per definire la soluzione più efficace.",
  },
  {
    step: "2",
    title: "Progettazione",
    description:
      "Elaboriamo la documentazione tecnica e progettuale con rigore professionale e attenzione al dettaglio.",
  },
  {
    step: "3",
    title: "Gestione della pratica",
    description:
      "Coordiniamo iter autorizzativi, adempimenti e rapporti con enti e stakeholder coinvolti.",
  },
  {
    step: "4",
    title: "Assistenza fino alla conclusione",
    description:
      "Vi affianchiamo in ogni fase, fino al completamento dell'intervento e alla verifica dei risultati.",
  },
];

const serviziEvidenza = [
  {
    title: "Pratiche edilizie",
    description:
      "Gestione completa di permessi, SCIA, CILA e documentazione tecnica per privati e imprese.",
  },
  {
    title: "Efficientamento energetico",
    description:
      "Interventi mirati per ridurre i consumi e ottimizzare le prestazioni di edifici e impianti.",
  },
  {
    title: "Fotovoltaico",
    description:
      "Progettazione, dimensionamento e pratiche per impianti solari e sistemi di accumulo.",
  },
  {
    title: "Diagnosi energetiche",
    description:
      "Analisi certificate per individuare criticità e opportunità di miglioramento energetico.",
  },
  {
    title: "Transizione 5.0",
    description:
      "Consulenza su digitalizzazione, innovazione tecnologica e accesso agli incentivi di settore.",
  },
  {
    title: "Automazione e Smart Building",
    description:
      "Sistemi intelligenti per il controllo, il monitoraggio e la gestione efficiente degli edifici.",
  },
];

const percheAffidarsi = [
  "Rete di ingegneri, architetti e geometri",
  "Competenze multidisciplinari integrate",
  "Esperienza maturata in oltre 26 anni",
  "Supporto tecnico personalizzato",
];

function IconBuilding() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function IconFactory() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.431l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.431l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function IconChip() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="h-5 w-5 shrink-0 text-tech-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

const areaIcons = [IconBuilding, IconFactory, IconChip];

export default function Home() {
  return (
    <main>
        {/* Hero */}
        <section aria-labelledby="hero-title" className="relative overflow-hidden bg-anthracite">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 60%, #2563a8 0%, transparent 45%), radial-gradient(circle at 85% 15%, #1a4d7c 0%, transparent 35%)",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[3.5rem_3.5rem]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-36">
            <div>
              <p className="section-label text-tech-blue-light">Ingegneri &amp; Co</p>
              <h1
                id="hero-title"
                className="mt-4 text-3xl leading-[1.15] font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
              >
                Ingegneria, energia e innovazione
                <br />
                <span className="text-white/90">per edifici e imprese</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-gray-muted lg:text-lg">
                Ingegneri &amp; Co è una rete tecnica multidisciplinare di
                ingegneri, architetti e geometri che affianca imprese,
                professionisti e privati integrando edilizia, energia, impianti,
                automazione e innovazione tecnologica.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="#contatti" className="btn-primary">
                  Richiedi una consulenza
                </Link>
                <Link href="#servizi" className="btn-outline-light">
                  Scopri i servizi
                </Link>
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        {/* Perché scegliere */}
        <section aria-labelledby="perche-scegliere-title" className="border-b border-gray-border bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-10 text-center">
              <p className="section-label">Il nostro valore</p>
              <h2 id="perche-scegliere-title" className="section-title">
                Perché scegliere Ingegneri &amp; Co
              </h2>
            </div>
            <div className="grid grid-cols-2 divide-x divide-y divide-gray-border overflow-hidden rounded-2xl border border-gray-border lg:grid-cols-4 lg:divide-y-0">
              {percheScegliere.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center px-6 py-10 text-center transition-colors duration-200 hover:bg-gray-light/60 lg:py-14"
                >
                  <p
                    className={`font-bold tracking-tight text-tech-blue ${
                      "compact" in item && item.compact
                        ? "text-base leading-snug lg:text-lg"
                        : "text-2xl lg:text-3xl"
                    }`}
                  >
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-anthracite-soft leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aree di competenza */}
        <section id="competenze" aria-labelledby="competenze-title" className="section-padding bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="section-label">Expertise</p>
              <h2 id="competenze-title" className="section-title">
                Aree di competenza
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
                Tre aree tecniche integrate, coordinate da una rete di
                professionisti qualificati, per rispondere con precisione alle
                esigenze normative, progettuali e digitali di ogni committente.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {areeCompetenza.map((area, index) => {
                const Icon = areaIcons[index];
                return (
                  <article key={area.title} className="card-elegant group flex flex-col p-9">
                    <div className="mb-6 inline-flex rounded-xl bg-tech-blue-pale p-3.5 text-tech-blue transition-all duration-300 group-hover:bg-tech-blue group-hover:text-white">
                      <Icon />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-anthracite">
                      {area.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-gray-muted">
                      {area.description}
                    </p>
                    <ul className="mt-6 flex flex-col gap-2.5 border-t border-gray-border pt-6">
                      {area.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-anthracite-soft">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-tech-blue" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-2">
                      <Link href="#contatti" className="btn-outline-dark">
                        Scopri di più
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Come lavoriamo */}
        <section aria-labelledby="come-lavoriamo-title" className="section-padding bg-gray-light">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-label">Metodo</p>
              <h2 id="come-lavoriamo-title" className="section-title">
                Come lavoriamo
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
                Un percorso strutturato e trasparente, dalla prima analisi fino
                al completamento del progetto.
              </p>
            </div>

            <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="absolute top-10 right-[12.5%] left-[12.5%] hidden h-px bg-gray-border lg:block" aria-hidden="true" />
              {comeLavoriamo.map((fase) => (
                <article key={fase.step} className="card-elegant relative p-8 text-center">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-tech-blue bg-white text-lg font-bold text-tech-blue">
                    {fase.step}
                  </div>
                  <h3 className="text-base font-bold text-anthracite">{fase.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-muted">
                    {fase.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Servizi in evidenza */}
        <section id="servizi" aria-labelledby="servizi-title" className="section-padding bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="section-label">Servizi</p>
              <h2 id="servizi-title" className="section-title">
                Servizi in evidenza
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
                Le soluzioni più richieste dai nostri clienti, con un approccio
                tecnico rigoroso e orientato ai risultati.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {serviziEvidenza.map((servizio) => (
                <article key={servizio.title} className="card-elegant group p-8">
                  <div className="mb-5 h-0.5 w-12 rounded-full bg-tech-blue transition-all duration-300 group-hover:w-16" />
                  <h3 className="text-lg font-bold tracking-tight text-anthracite">
                    {servizio.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-muted">
                    {servizio.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProjectsSection />

        {/* Perché affidarsi a noi */}
        <section id="chi-siamo" aria-labelledby="affidarsi-title" className="section-padding bg-anthracite">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="section-label text-tech-blue-light">Chi siamo</p>
                <h2 id="affidarsi-title" className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Perché affidarsi a noi
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-muted lg:text-lg">
                  Una rete tecnica multidisciplinare con radici solide e visione
                  contemporanea, che unisce ingegneri, architetti e geometri in
                  un unico approccio integrato: competenza tecnica, rigore
                  normativo e innovazione applicata.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/50 italic">
                  {siteConfig.institutionalPhrase}
                </p>
              </div>
              <ul className="flex flex-col gap-5">
                {percheAffidarsi.map((punto) => (
                  <li
                    key={punto}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-5 transition-all duration-200 hover:border-white/20 hover:bg-white/10"
                  >
                    <IconCheck />
                    <span className="text-base font-medium text-white">{punto}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contatti */}
        <section id="contatti" aria-labelledby="contatti-title" className="section-padding bg-gray-light">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl rounded-2xl border border-gray-border bg-white p-10 text-center shadow-sm lg:p-14">
              <p className="section-label">Contatti</p>
              <h2 id="contatti-title" className="section-title">
                Parliamo del tuo progetto
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
                Che tu sia un privato, un&apos;impresa o un professionista del
                settore, siamo a disposizione per una consulenza personalizzata.
                Raccontaci le tue esigenze: ti aiuteremo a trovare la soluzione
                tecnica più adatta.
              </p>

              <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-gray-muted uppercase">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-base font-semibold text-tech-blue transition-colors hover:text-tech-blue-light"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="hidden h-10 w-px bg-gray-border sm:block" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold tracking-widest text-gray-muted uppercase">Telefono</p>
                  <a
                    href={siteConfig.phoneHref}
                    className="mt-1 block text-base font-semibold text-tech-blue transition-colors hover:text-tech-blue-light"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <Link href="#contatti" className="btn-primary mt-10 px-8 py-3.5">
                Contattaci
              </Link>
            </div>
          </div>
        </section>
    </main>
  );
}
