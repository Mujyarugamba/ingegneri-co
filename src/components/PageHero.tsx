import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  current: string;
};

export default function PageHero({ eyebrow, title, intro, current }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-anthracite">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #2563a8 0%, transparent 45%), radial-gradient(circle at 80% 20%, #1a4d7c 0%, transparent 35%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[3.5rem_3.5rem]" />

      <div className="page-container relative py-12 md:py-16 lg:py-24">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/70">
          <Link href="/" className="transition-colors hover:text-white">Home</Link>
          <span aria-hidden="true" className="mx-2">/</span>
          <span aria-current="page" className="text-white">{current}</span>
        </nav>
        <p className="section-label text-white/80">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-muted lg:text-lg">
          {intro}
        </p>
      </div>
    </section>
  );
}
