import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetail from "@/components/articles/ArticleDetail";
import {
  getAllArticleSlugs,
  getArticleBySlug,
} from "@/lib/articles-data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Approfondimento non trovato | Ingegneri & Co" };
  }

  return {
    title: `${article.title} | Ingegneri & Co`,
    description: article.description,
    openGraph: {
      title: `${article.title} | Ingegneri & Co`,
      description: article.description,
      type: "article",
      locale: "it_IT",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
