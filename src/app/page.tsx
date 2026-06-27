import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ingegneri & Co | Ingegneria, energia e innovazione per edifici e imprese",
  description:
    "Studio di ingegneria che affianca privati, aziende e professionisti con consulenze tecniche, pratiche edilizie, efficientamento energetico, impianti e soluzioni per la transizione digitale ed energetica.",
  keywords: [
    "ingegneria",
    "efficientamento energetico",
    "fotovoltaico",
    "pratiche edilizie",
    "diagnosi energetiche",
    "Industria 4.0",
    "Transizione 5.0",
    "automazione",
    "IoT",
  ],
  openGraph: {
    title: "Ingegneri & Co | Ingegneria, energia e innovazione",
    description:
      "Consulenze tecniche, pratiche edilizie, efficientamento energetico e soluzioni per la transizione digitale ed energetica.",
    type: "website",
    locale: "it_IT",
  },
};

const areeCompetenza = [
  {
    title: "Civile e ambientale",
    description:
      "Progettazione strutturale, pratiche edilizie, sostenibilità ambientale e conformità normativa per edifici e infrastrutture.",
  },
  {
    title: "Industriale",
    description:
      "Impianti, processi produttivi, efficienza energetica industriale e adeguamento alle normative di settore.",
  },
  {
    title: "Dell'informazione",
    description:
      "Automazione, IoT, monitoraggio intelligente e soluzioni digitali per la transizione 4.0 e 5.0.",
  },
];

const serviziPrincipali = [
  {
    title: "Efficientamento energetico",
    description:
      "Analisi e interventi per ridurre i consumi e migliorare le prestazioni degli edifici e degli impianti.",
  },
  {
    title: "Fotovoltaico e sistemi di accumulo",
    description:
      "Progettazione, dimensionamento e pratiche per impianti solari e storage energetico.",
  },
  {
    title: "Pratiche edilizie e tecniche",
    description:
      "Gestione completa di permessi, SCIA, CILA e documentazione tecnica per privati e imprese.",
  },
  {
    title: "Diagnosi energetiche",
    description:
      "Valutazioni certificate per identificare criticità e opportunità di miglioramento energetico.",
  },
  {
    title: "Transizione 5.0 e Industria 4.0",
    description:
      "Consulenza su incentivi, digitalizzazione e innovazione tecnologica per le imprese.",
  },
  {
    title: "Automazione, IoT e monitoraggio",
    description:
      "Sistemi intelligenti per il controllo remoto, l'efficienza operativa e la manutenzione predittiva.",
  },
];

function IconBuilding() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
      />
    </svg>
  );
}

function IconFactory() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.431l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.431l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.281Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

function IconChip() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
      />
    </svg>
  );
}

const areaIcons = [IconBuilding, IconFactory, IconChip];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-border/60 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="group flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-tight text-anthracite">
              Ingegneri &amp; Co
            </span>
            <span className="text-xs font-medium tracking-widest text-tech-blue uppercase">
              Studio di ingegneria
            </span>
          </Link>
          <nav aria-label="Navigazione principale">
            <Link
              href="#contatti"
              className="rounded-md bg-tech-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-tech-blue-light"
            >
              Contattaci
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          aria-labelledby="hero-title"
          className="relative overflow-hidden bg-anthracite"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #2563a8 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1a4d7c 0%, transparent 40%)",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]" />

          <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold tracking-widest text-tech-blue-light uppercase">
                Ingegneri &amp; Co
              </p>
              <h1
                id="hero-title"
                className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Ingegneria, energia e innovazione per edifici e imprese
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-muted lg:text-xl">
                Ingegneri &amp; Co affianca privati, aziende e professionisti
                con consulenze tecniche, pratiche edilizie, efficientamento
                energetico, impianti e soluzioni per la transizione digitale ed
                energetica.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contatti"
                  className="inline-flex items-center justify-center rounded-md bg-tech-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-tech-blue-light"
                >
                  Richiedi una consulenza
                </Link>
                <Link
                  href="#servizi"
                  className="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
                >
                  Scopri i servizi
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Aree di competenza */}
        <section
          id="competenze"
          aria-labelledby="competenze-title"
          className="bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-widest text-tech-blue uppercase">
                Expertise
              </p>
              <h2
                id="competenze-title"
                className="mt-2 text-2xl font-bold tracking-tight text-anthracite sm:text-3xl"
              >
                Aree di competenza
              </h2>
              <p className="mt-4 text-gray-muted leading-relaxed">
                Competenze multidisciplinari al servizio di progetti complessi,
                con un approccio integrato tra ingegneria tradizionale e
                innovazione tecnologica.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {areeCompetenza.map((area, index) => {
                const Icon = areaIcons[index];
                return (
                  <article
                    key={area.title}
                    className="group rounded-xl border border-gray-border bg-white p-8 transition-shadow hover:shadow-lg hover:shadow-tech-blue/5"
                  >
                    <div className="mb-5 inline-flex rounded-lg bg-tech-blue-pale p-3 text-tech-blue transition-colors group-hover:bg-tech-blue group-hover:text-white">
                      <Icon />
                    </div>
                    <h3 className="text-lg font-semibold text-anthracite">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-muted">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Servizi principali */}
        <section
          id="servizi"
          aria-labelledby="servizi-title"
          className="bg-gray-light py-20 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-widest text-tech-blue uppercase">
                Servizi
              </p>
              <h2
                id="servizi-title"
                className="mt-2 text-2xl font-bold tracking-tight text-anthracite sm:text-3xl"
              >
                Servizi principali
              </h2>
              <p className="mt-4 text-gray-muted leading-relaxed">
                Soluzioni tecniche complete, dalla consulenza iniziale alla
                gestione delle pratiche, per accompagnare ogni fase del tuo
                progetto.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {serviziPrincipali.map((servizio) => (
                <article
                  key={servizio.title}
                  className="rounded-xl border border-gray-border bg-white p-7 transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 h-1 w-10 rounded-full bg-tech-blue" />
                  <h3 className="text-base font-semibold text-anthracite">
                    {servizio.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-muted">
                    {servizio.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contatti */}
        <section
          id="contatti"
          aria-labelledby="contatti-title"
          className="bg-anthracite py-20 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="contatti-title"
                className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                Parliamo del tuo progetto
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-muted">
                Che tu sia un privato, un&apos;impresa o un professionista del
                settore, siamo a disposizione per una consulenza personalizzata.
                Raccontaci le tue esigenze: ti aiuteremo a trovare la soluzione
                tecnica più adatta.
              </p>
              <Link
                href="#contatti"
                className="mt-10 inline-flex items-center justify-center rounded-md bg-tech-blue px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-tech-blue-light"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-border bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm font-semibold text-anthracite">
              Ingegneri &amp; Co
            </p>
            <p className="text-xs text-gray-muted">
              &copy; {new Date().getFullYear()} Ingegneri &amp; Co. Tutti i
              diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
