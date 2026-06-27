import fs from "fs";
import path from "path";
import Image from "next/image";
import { siteImages } from "@/lib/site-config";

function heroImageExists(): boolean {
  return fs.existsSync(
    path.join(process.cwd(), "public", "images", "hero", "hero-engineering.webp"),
  );
}

function HeroPlaceholder() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1a4d7c 0%, #1a2332 40%, #2a3548 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[2rem_2rem]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
        <div className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
          <svg
            className="h-12 w-12 text-white/40"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
            />
          </svg>
        </div>
        <p className="text-center text-xs font-medium tracking-widest text-white/35 uppercase">
          Immagine in arrivo
        </p>
      </div>
    </>
  );
}

export default function HeroVisual() {
  const hasHeroImage = heroImageExists();

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:aspect-square">
      {hasHeroImage ? (
        <Image
          src={siteImages.hero}
          alt="Ingegneria, energia e innovazione per edifici e imprese"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 560px"
          priority
        />
      ) : (
        <div
          aria-label="Immagine rappresentativa — placeholder"
          role="img"
          className="absolute inset-0"
        >
          <HeroPlaceholder />
        </div>
      )}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-tech-blue via-tech-blue-light to-transparent" />
    </div>
  );
}
