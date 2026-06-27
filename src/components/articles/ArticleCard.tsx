import Link from "next/link";
import {
  formatArticleDate,
  type Article,
} from "@/lib/articles-data";

const categoryStyles: Record<Article["category"], string> = {
  Edilizia: "bg-tech-blue-pale text-tech-blue",
  Industria: "bg-anthracite/5 text-anthracite-soft",
  Energia: "bg-tech-blue/10 text-tech-blue",
  Innovazione: "bg-gray-light text-anthracite-soft",
};

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/approfondimenti/${article.slug}`}
      className="card-elegant group flex h-full flex-col transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase ${categoryStyles[article.category]}`}
        >
          {article.category}
        </span>
        <time
          dateTime={article.publishedAt}
          className="text-xs text-gray-muted"
        >
          {formatArticleDate(article.publishedAt)}
        </time>
      </div>

      <h3 className="mt-5 text-lg font-bold tracking-tight text-anthracite transition-colors group-hover:text-tech-blue">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-muted">
        {article.excerpt}
      </p>

      <span className="mt-6 inline-flex items-center text-sm font-semibold text-tech-blue transition-colors group-hover:text-tech-blue-light">
        Leggi l&apos;approfondimento
        <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
