import Link from "next/link";
import {
  formatArticleDate,
  type Article,
} from "@/lib/articles-data";

const categoryStyles: Record<Article["category"], string> = {
  Edilizia: "bg-tech-blue-pale/20 text-tech-blue-light border-tech-blue/30",
  Industria: "bg-white/10 text-white/80 border-white/20",
  Energia: "bg-tech-blue/20 text-tech-blue-light border-tech-blue/30",
  Innovazione: "bg-white/10 text-white/80 border-white/20",
};

type ArticleDetailProps = {
  article: Article;
};

export default function ArticleDetail({ article }: ArticleDetailProps) {
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

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <Link
            href="/approfondimenti"
            className="inline-flex items-center gap-2 text-sm font-medium text-tech-blue-light transition-colors hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Torna agli approfondimenti
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase ${categoryStyles[article.category]}`}
              >
                {article.category}
              </span>
              <time
                dateTime={article.publishedAt}
                className="text-sm text-gray-muted"
              >
                {formatArticleDate(article.publishedAt)}
              </time>
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-muted">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="flex flex-col gap-6">
            {article.content.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-relaxed text-anthracite-soft lg:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-gray-border bg-gray-light p-8 text-center">
            <p className="text-sm font-semibold text-anthracite">
              Hai bisogno di supporto tecnico su questo tema?
            </p>
            <p className="mt-2 text-sm text-gray-muted">
              Contattaci per una consulenza personalizzata.
            </p>
            <Link href="/#contatti" className="btn-primary mt-6">
              Richiedi una consulenza
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
