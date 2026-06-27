import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/10 bg-anthracite-soft p-2 sm:p-3 lg:p-3.5">
      <Image
        src="/imagine.png"
        alt="Ingegneria, energia e innovazione per edifici e imprese"
        width={1536}
        height={1024}
        className="h-auto w-full max-w-full object-contain"
        sizes="(max-width: 768px) 100vw, 560px"
        priority
      />
    </div>
  );
}
