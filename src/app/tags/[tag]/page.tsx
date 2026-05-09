import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/posts";
import { PostCard } from "@/components/blog/PostCard";

export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag: tag.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  return { title: `标签："${tag}"`, description: `所有标记为"${tag}"的文章。` };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  return (
    <div>
      <section className="pt-8 pb-12">
        <div className="sec-rule">
          <span className="sec-numeral">VI.</span>
          <span className="sec-meta">索引</span>
          <span className="sec-pages">006 / 008</span>
        </div>

        <h1 className="text-[26px] font-bold tracking-tight leading-tight mb-2">
          标签：<span className="text-serif-italic text-[var(--coral)]">&ldquo;{tag}&rdquo;</span>
        </h1>
        <p className="text-[var(--ink-faint)] font-mono text-[10px] mb-6">{posts.length} 篇文章</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post, i) => <PostCard key={post.slug} post={post} index={i + 1} />)}
        </div>
      </section>
    </div>
  );
}
