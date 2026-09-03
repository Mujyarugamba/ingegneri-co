import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white">
      <section className="section-padding">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Errore 404</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-anthracite sm:text-4xl md:text-5xl">
              Pagina non trovata
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-muted sm:text-lg">
              L'indirizzo richiesto non esiste oppure la pagina è stata spostata.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/" className="btn-primary">
                Torna alla home
              </Link>
              <Link href="/servizi" className="btn-secondary">
                Esplora i servizi
              </Link>
              <Link href="/contatti" className="btn-secondary">
                Contatti
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
