"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-white">
      <section className="section-padding">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Errore</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-anthracite sm:text-4xl md:text-5xl">
              Si è verificato un problema
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-muted sm:text-lg">
              Puoi riprovare oppure tornare alla home. Se il problema persiste, contattaci.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button type="button" onClick={reset} className="btn-primary">
                Riprova
              </button>
              <Link href="/" className="btn-outline-dark">
                Torna alla home
              </Link>
              <Link href="/contatti" className="btn-outline-dark">
                Contatti
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
