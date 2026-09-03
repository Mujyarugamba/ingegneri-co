"use client";

import Link from "next/link";
import { useRef } from "react";
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

export default function MobileNav() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    detailsRef.current?.removeAttribute("open");
  };

  return (
    <details ref={detailsRef} className="mobile-nav relative shrink-0">
      <summary
        className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-gray-border bg-white text-anthracite shadow-sm transition-colors hover:border-tech-blue/40 hover:text-tech-blue [&::-webkit-details-marker]:hidden"
        aria-label="Menu di navigazione"
      >
        <span className="mobile-nav-open">
          <MenuIcon />
        </span>
        <span className="mobile-nav-close hidden">
          <CloseIcon />
        </span>
      </summary>

      <div className="absolute top-[calc(100%+0.5rem)] right-0 z-50 w-[min(calc(100vw-2rem),20rem)] overflow-hidden rounded-xl border border-gray-border bg-white shadow-xl shadow-anthracite/10">
        <nav aria-label="Navigazione mobile" className="flex flex-col p-2">
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-anthracite-soft transition-colors hover:bg-gray-light hover:text-tech-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-gray-border p-3">
          <Link
            href="/contatti"
            onClick={closeMenu}
            className="btn-primary w-full py-2.5 text-sm"
          >
            Richiedi una consulenza
          </Link>
        </div>
      </div>
    </details>
  );
}
