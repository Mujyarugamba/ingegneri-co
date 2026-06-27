import Image from "next/image";
import Link from "next/link";
import { siteConfig, siteImages } from "@/lib/site-config";

type BrandLogoProps = {
  variant?: "header" | "footer";
};

export default function BrandLogo({ variant = "header" }: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col gap-1.5 leading-tight ${isFooter ? "" : "shrink-0"}`}
    >
      <Image
        src={siteImages.logo}
        alt="Ingegneri & Co"
        width={220}
        height={56}
        className={`w-auto transition-opacity group-hover:opacity-90 ${
          isFooter ? "h-11" : "h-10"
        }`}
        priority={!isFooter}
      />
      <span
        className={`text-[0.62rem] font-medium tracking-[0.12em] uppercase ${
          isFooter ? "text-tech-blue-light" : "text-tech-blue"
        }`}
      >
        {siteConfig.tagline}
      </span>
    </Link>
  );
}
