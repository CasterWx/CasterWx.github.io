import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPrevPost, getNextPost } from "@/lib/posts";
import { TagBadge } from "@/components/blog/TagBadge";
import { MDXContent } from "@/components/shared/MDXContent";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "未找到" };
  return { title: post.title, description: post.description, openGraph: { title: post.title, description: post.description, type: "article", publishedTime: post.date, tags: post.tags } };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const prev = getPrevPost(slug);
  const next = getNextPost(slug);
  const date = post.date ? new Date(post.date).toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" }) : "";

  return (
    <article className="max-w-3xl mx-auto pt-8 pb-16">
      <div className="sec-rule">
        <span className="sec-numeral">II.</span>
        <span className="sec-meta">文章正文</span>
        <span className="sec-pages">002 / 008</span>
      </div>

      <Link href="/blog" className="text-xs font-bold text-[var(--coral)] hover:underline mb-5 inline-block">&larr; 返回文章列表</Link>

      <header className="mb-8">
        <h1 className="text-[28px] sm:text-[38px] font-bold tracking-tight leading-[1.1] mb-3">
          {post.title}<span className="dot-coral">.</span>
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--ink-faint)] mb-3">
          {date && <time dateTime={post.date}>{date}</time>}
          <span>阅读 {post.readingTime} 分钟</span>
          <span className="font-mono text-[10px]">{post.slug.slice(0, 8)}</span>
        </div>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">{post.tags.map((tag) => <TagBadge key={tag} tag={tag} />)}</div>
        )}
      </header>

      <div className="prose-custom max-w-none"><MDXContent source={post.content} /></div>

      <nav className="mt-12 pt-6 border-t border-[var(--ink-at-12)] flex flex-col sm:flex-row justify-between gap-4">
        {prev ? (
          <Link href={`/blog/${prev.slug}`} className="group flex-1">
            <span className="text-[10px] text-[var(--ink-faint)] uppercase tracking-widest block mb-1">&larr; 上一篇</span>
            <span className="font-bold text-sm text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors">{prev.title}</span>
          </Link>
        ) : <div className="flex-1" />}
        {next ? (
          <Link href={`/blog/${next.slug}`} className="group flex-1 text-right">
            <span className="text-[10px] text-[var(--ink-faint)] uppercase tracking-widest block mb-1">下一篇 &rarr;</span>
            <span className="font-bold text-sm text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors">{next.title}</span>
          </Link>
        ) : <div className="flex-1" />}
      </nav>
    </article>
  );
}
