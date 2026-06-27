import Link from "next/link";
import { mainNav, siteConfig } from "@/lib/site-config";

function MenuIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-border/70 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10 lg:py-5">
        <Link href="/" className="group shrink-0 flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-tight text-anthracite transition-colors group-hover:text-tech-blue">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 text-[0.62rem] font-medium tracking-[0.12em] text-tech-blue uppercase">
            {siteConfig.tagline}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 xl:gap-2 lg:flex"
          aria-label="Navigazione principale"
        >
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-anthracite-soft transition-colors hover:text-tech-blue xl:px-3.5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contatti"
            className="btn-primary hidden shrink-0 px-5 py-2.5 text-sm sm:inline-flex"
          >
            Richiedi una consulenza
          </Link>

          <details className="mobile-nav relative lg:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-gray-border text-anthracite transition-colors hover:border-tech-blue/30 hover:text-tech-blue [&::-webkit-details-marker]:hidden"
              aria-label="Apri menu di navigazione"
            >
              <span className="mobile-nav-open">
                <MenuIcon />
              </span>
              <span className="mobile-nav-close hidden">
                <CloseIcon />
              </span>
            </summary>

            <div className="absolute top-[calc(100%+0.5rem)] right-0 w-[min(100vw-3rem,20rem)] overflow-hidden rounded-xl border border-gray-border bg-white shadow-xl shadow-anthracite/10">
              <nav aria-label="Navigazione mobile" className="flex flex-col p-2">
                {mainNav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-anthracite-soft transition-colors hover:bg-gray-light hover:text-tech-blue"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-gray-border p-3">
                <Link
                  href="/#contatti"
                  className="btn-primary w-full py-2.5 text-sm"
                >
                  Richiedi una consulenza
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
