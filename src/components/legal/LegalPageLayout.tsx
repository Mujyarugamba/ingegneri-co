type LegalPageLayoutProps = {
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({
  title,
  intro,
  children,
}: LegalPageLayoutProps) {
  return (
    <main>
      <section className="relative overflow-hidden bg-anthracite">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #2563a8 0%, transparent 45%), radial-gradient(circle at 80% 20%, #1a4d7c 0%, transparent 35%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[3.5rem_3.5rem]" />

        <div className="relative mx-auto max-w-[900px] px-6 py-16 lg:px-10 lg:py-24">
          <p className="section-label text-tech-blue-light">Informazioni legali</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
              {intro}
            </p>
          )}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <div className="prose-legal flex flex-col gap-6">{children}</div>
        </div>
      </section>
    </main>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-bold tracking-tight text-anthracite">
        {title}
      </h2>
      <div className="mt-3 flex flex-col gap-3 text-base leading-relaxed text-anthracite-soft">
        {children}
      </div>
    </div>
  );
}

export { LegalSection };
