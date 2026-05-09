import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPrevPost, getNextPost } from "@/lib/posts";
import { TagBadge } from "@/components/blog/TagBadge";
import { MDXContent } from "@/components/shared/MDXContent";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "未找到" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const prev = getPrevPost(slug);
  const next = getNextPost(slug);

  const date = post.date
    ? new Date(post.date).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <article className="max-w-3xl mx-auto pt-10 pb-20">
      <div className="sec-rule">
        <span className="sec-numeral">II.</span>
        <span className="sec-meta">文章 · 正文</span>
        <span className="sec-pages">002 / 008</span>
      </div>

      <Link
        href="/blog"
        className="text-sm font-semibold text-[var(--coral)] hover:underline mb-6 inline-block"
        style={{ fontFamily: "'Inter Tight','Inter',sans-serif" }}
      >
        &larr; 返回文章列表
      </Link>

      <header className="mb-10">
        <h1
          className="text-[38px] sm:text-[54px] leading-[1.05] mb-4"
          style={{
            fontFamily: "'Inter Tight','Inter',sans-serif",
            fontWeight: 800,
            letterSpacing: '-0.04em',
          }}
        >
          {post.title}
          <span className="dot-coral">.</span>
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--ink-faint)] mb-4">
          {date && <time dateTime={post.date}>{date}</time>}
          <span>阅读 {post.readingTime} 分钟</span>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px" }}>
            {post.slug.slice(0, 8)}
          </span>
        </div>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        )}
      </header>

      <div className="prose-custom max-w-none">
        <MDXContent source={post.content} />
      </div>

      <nav className="mt-16 pt-8 border-t border-[var(--ink-at-12)] flex flex-col sm:flex-row justify-between gap-6">
        {prev ? (
          <Link href={`/blog/${prev.slug}`} className="group flex-1">
            <span className="text-xs text-[var(--ink-faint)] uppercase tracking-widest block mb-1" style={{ fontFamily: "'Inter Tight','Inter',sans-serif" }}>
              &larr; 上一篇
            </span>
            <span
              className="font-semibold text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors"
              style={{ fontFamily: "'Inter Tight','Inter',sans-serif" }}
            >
              {prev.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link href={`/blog/${next.slug}`} className="group flex-1 text-right">
            <span className="text-xs text-[var(--ink-faint)] uppercase tracking-widest block mb-1" style={{ fontFamily: "'Inter Tight','Inter',sans-serif" }}>
              下一篇 &rarr;
            </span>
            <span
              className="font-semibold text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors"
              style={{ fontFamily: "'Inter Tight','Inter',sans-serif" }}
            >
              {next.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
    </article>
  );
}
