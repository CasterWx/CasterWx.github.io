import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { POSTS_PER_PAGE } from "@/lib/constants";
import { PostCard } from "@/components/blog/PostCard";
import { TagBadge } from "@/components/blog/TagBadge";

export const metadata: Metadata = {
  title: "文章",
  description: "软件工程、工具链与建造手记。",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const pagePosts = posts.slice(0, POSTS_PER_PAGE);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const tags = getAllTags();

  return (
    <div>
      <section className="pt-10 pb-16">
        <div className="sec-rule">
          <span className="sec-numeral">II.</span>
          <span className="sec-meta">文章 · 手艺笔记</span>
          <span className="sec-pages">002 / 008</span>
        </div>

        <h1
          className="text-[38px] leading-tight mb-2"
          style={{
            fontFamily: "'Inter Tight','Inter',sans-serif",
            fontWeight: 800,
            letterSpacing: '-0.035em',
          }}
        >
          文章<span className="dot-coral">.</span>
        </h1>
        <p className="text-[var(--ink-mute)] mb-6" style={{ fontFamily: "'Inter',sans-serif" }}>
          软件工程、工具链与建造手记。
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {tags.slice(0, 15).map(({ tag }) => (
              <TagBadge key={tag} tag={tag} />
            ))}
            {tags.length > 15 && (
              <Link href="/tags" className="pill text-[var(--coral)]">
                +{tags.length - 15} 更多
              </Link>
            )}
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          {pagePosts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i + 1} />
          ))}
        </div>

        {pagePosts.length === 0 && (
          <p
            className="text-[var(--ink-mute)] text-center py-16 text-serif-italic"
          >
            暂无文章。敬请期待。
          </p>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-12">
            <span
              className="text-sm text-[var(--ink-faint)]"
              style={{ fontFamily: "'Inter Tight','Inter',sans-serif" }}
            >
              第 1 页 / 共 {totalPages} 页
            </span>
            <Link href="/blog/page/2" className="btn-primary">
              下一页 &rarr;
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
