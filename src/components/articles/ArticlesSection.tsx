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
  headingLevel?: "h1" | "h2";
  showHeader?: boolean;
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
  headingLevel = "h2",
  showHeader = true,
}: ArticlesSectionProps) {
  const displayItems = items ?? articles;
  const gridClass =
    columns === 2
      ? `grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 ${showHeader ? "mt-10 md:mt-12" : ""}`
      : `grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 ${showHeader ? "mt-10 md:mt-12" : ""}`;
  const Heading = headingLevel;
  const cardHeadingLevel = showHeader && headingLevel === "h2" ? "h3" : "h2";

  return (
    <section
      id={id}
      {...(showHeader
        ? { "aria-labelledby": `${id}-title` }
        : { "aria-label": title })}
      className={className}
    >
      <div className="page-container">
        {showHeader && (
          <div className="max-w-3xl">
            <p className="section-label">{label}</p>
            <Heading id={`${id}-title`} className="section-title">
              {title}
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
              {intro}
            </p>
          </div>
        )}

        <div className={gridClass}>
          {displayItems.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              headingLevel={cardHeadingLevel}
            />
          ))}
        </div>

        {showViewAll && (
          <div className="mt-8 text-center">
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
