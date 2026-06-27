import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { mainNav } from "@/lib/site-config";

function MenuIcon() {
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
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function CloseIcon() {
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
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-x-hidden border-b border-gray-border/70 bg-white/95 backdrop-blur-md">
      <div className="page-container py-3 md:flex md:items-center md:justify-between md:gap-4 md:py-4 lg:py-5">
        {/* Mobile: brand centrato + menu */}
        <div className="w-full min-w-0 md:hidden">
          <div className="flex w-full flex-col items-center">
            <BrandLogo variant="header" />
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-gray-border/50 pt-3">
            <nav
              aria-label="Link rapidi"
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-anthracite-soft"
            >
              <Link href="/" className="transition-colors hover:text-tech-blue">
                Home
              </Link>
              <span className="text-gray-border" aria-hidden="true">
                |
              </span>
              <Link
                href="/progetti"
                className="transition-colors hover:text-tech-blue"
              >
                Progetti
              </Link>
              <span className="text-gray-border" aria-hidden="true">
                |
              </span>
              <Link
                href="/contatti"
                className="transition-colors hover:text-tech-blue"
              >
                Contatti
              </Link>
            </nav>

            <details className="mobile-nav relative shrink-0">
              <summary
                className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-gray-border bg-white text-anthracite shadow-sm transition-colors hover:border-tech-blue/40 hover:text-tech-blue [&::-webkit-details-marker]:hidden"
                aria-label="Apri menu di navigazione"
              >
                <span className="mobile-nav-open">
                  <MenuIcon />
                </span>
                <span className="mobile-nav-close hidden">
                  <CloseIcon />
                </span>
              </summary>

              <div className="absolute top-[calc(100%+0.5rem)] right-0 z-50 w-[min(calc(100vw-2rem),20rem)] overflow-hidden rounded-xl border border-gray-border bg-white shadow-xl shadow-anthracite/10">
                <nav
                  aria-label="Navigazione mobile"
                  className="flex flex-col p-2"
                >
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
                    href="/contatti"
                    className="btn-primary w-full py-2.5 text-sm"
                  >
                    Richiedi una consulenza
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:contents">
          <BrandLogo variant="header" />

          <nav
            className="flex items-center gap-1 xl:gap-2"
            aria-label="Navigazione principale"
          >
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-2.5 py-2 text-sm font-medium text-anthracite-soft transition-colors hover:text-tech-blue lg:px-3.5"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contatti" className="btn-primary shrink-0 whitespace-nowrap">
            Richiedi una consulenza
          </Link>
        </div>
      </div>
    </header>
  );
}
