import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/posts";
import { POSTS_PER_PAGE } from "@/lib/constants";
import { PostCard } from "@/components/blog/PostCard";

export function generateStaticParams() {
  const posts = getAllPosts();
  const totalPages = Math.max(Math.ceil(posts.length / POSTS_PER_PAGE), 2);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  return { title: `文章 — 第 ${page} 页` };
}

export default async function BlogPaginatedPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const pageNum = parseInt(page, 10);
  if (isNaN(pageNum) || pageNum < 2) notFound();

  const posts = getAllPosts();
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  if (pageNum > totalPages) notFound();

  const start = (pageNum - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <div>
      <section className="pt-8 pb-12">
        <div className="sec-rule">
          <span className="sec-numeral">II.</span>
          <span className="sec-meta">文章</span>
          <span className="sec-pages">002 / 008</span>
        </div>
        <h1 className="text-[24px] font-bold tracking-tight leading-tight mb-5">文章 — 第 {pageNum} 页</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {pagePosts.map((post, i) => <PostCard key={post.slug} post={post} index={(pageNum - 1) * POSTS_PER_PAGE + i + 1} />)}
        </div>
        <div className="flex justify-center items-center gap-4 mt-10">
          <Link href={pageNum === 2 ? "/blog" : `/blog/page/${pageNum - 1}`} className="btn-ghost text-xs">&larr; 上一页</Link>
          <span className="text-xs font-mono text-[var(--ink-faint)]">{String(pageNum).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}</span>
          {pageNum < totalPages && <Link href={`/blog/page/${pageNum + 1}`} className="btn-primary text-xs">下一页 &rarr;</Link>}
        </div>
      </section>
    </div>
  );
}
