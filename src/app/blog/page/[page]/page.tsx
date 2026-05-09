import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/posts";
import { POSTS_PER_PAGE } from "@/lib/constants";
import { PostCard } from "@/components/blog/PostCard";

export function generateStaticParams() {
  const posts = getAllPosts();
  const totalPages = Math.max(Math.ceil(posts.length / POSTS_PER_PAGE), 2);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  return { title: `文章 — 第 ${page} 页` };
}

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageNum = parseInt(page, 10);

  if (isNaN(pageNum) || pageNum < 2) {
    notFound();
  }

  const posts = getAllPosts();
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  if (pageNum > totalPages) {
    notFound();
  }

  const start = (pageNum - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <div>
      <section className="pt-10 pb-16">
        <div className="sec-rule">
          <span className="sec-numeral">II.</span>
          <span className="sec-meta">文章 · 手艺笔记</span>
          <span className="sec-pages">002 / 008</span>
        </div>

        <h1
          className="text-[32px] leading-tight mb-6"
          style={{
            fontFamily: "'Inter Tight','Inter',sans-serif",
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}
        >
          文章 — 第 {pageNum} 页
        </h1>

        <div className="grid gap-5 sm:grid-cols-2">
          {pagePosts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={(pageNum - 1) * POSTS_PER_PAGE + i + 1} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 mt-12">
          <Link
            href={pageNum === 2 ? "/blog" : `/blog/page/${pageNum - 1}`}
            className="btn-ghost text-sm"
          >
            &larr; 上一页
          </Link>
          <span
            className="text-sm text-[var(--ink-faint)]"
            style={{ fontFamily: "'JetBrains Mono',monospace" }}
          >
            {String(pageNum).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
          </span>
          {pageNum < totalPages && (
            <Link href={`/blog/page/${pageNum + 1}`} className="btn-primary text-sm">
              下一页 &rarr;
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
