import Image from "next/image";
import { siteImages } from "@/lib/site-config";

export default function HeroVisual() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:aspect-square">
      <Image
        src={siteImages.hero}
        alt="Ingegneria, energia e innovazione per edifici e imprese"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 560px"
        priority
      />
    </div>
  );
}
