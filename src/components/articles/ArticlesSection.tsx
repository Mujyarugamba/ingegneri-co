import Link from "next/link";
import ArticleCard from "@/components/articles/ArticleCard";
import {
  approfondimentiIntro,
  articles,
  getLatestArticles,
  type Article,
} from "@/lib/articles-data";

export type ArticlesSectionProps = {
  id?: string;
  title?: string;
  label?: string;
  intro?: string;
  items?: Article[];
  className?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
  viewAllLabel?: string;
  columns?: 2 | 3;
};

export default function ArticlesSection({
  id = "approfondimenti",
  title = "Approfondimenti",
  label = "Editoriale",
  intro = approfondimentiIntro,
  items,
  className = "section-padding bg-gray-light",
  showViewAll = false,
  viewAllHref = "/approfondimenti",
  viewAllLabel = "Tutti gli approfondimenti",
  columns = 3,
}: ArticlesSectionProps) {
  const displayItems = items ?? articles;
  const gridClass =
    columns === 2
      ? "mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8"
      : "mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3";

  return (
    <section id={id} aria-labelledby={`${id}-title`} className={className}>
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="section-label">{label}</p>
          <h2 id={`${id}-title`} className="section-title">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
            {intro}
          </p>
        </div>

        <div className={gridClass}>
          {displayItems.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {showViewAll && (
          <div className="mt-12 text-center">
            <Link href={viewAllHref} className="btn-outline-dark">
              {viewAllLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function LatestArticlesSection() {
  return (
    <ArticlesSection
      id="ultimi-approfondimenti"
      title="Ultimi approfondimenti"
      label="Editoriale"
      intro="Guide tecniche e contenuti aggiornati su edilizia, energia, impianti e innovazione."
      items={getLatestArticles(3)}
      className="section-padding bg-gray-light"
      showViewAll
    />
  );
}
