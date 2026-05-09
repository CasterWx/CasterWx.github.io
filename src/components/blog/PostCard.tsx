import Link from "next/link";
import type { BlogPost } from "@/types";
import { TagBadge } from "./TagBadge";

export function PostCard({ post, index }: { post: BlogPost; index?: number }) {
  const date = post.date
    ? new Date(post.date).toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" })
    : "";

  return (
    <article className="card-ed group flex flex-col">
      <div className="flex items-center justify-between mb-2">
        {index && <span className="text-xs text-[var(--coral)] italic select-none">{String(index).padStart(2, "0")}</span>}
        <span className="text-[9px] font-bold tracking-wider text-[var(--ink-faint)] uppercase">文章</span>
      </div>

      <Link href={`/blog/${post.slug}`} className="block mb-1.5">
        <h3 className="text-base font-bold leading-snug text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors">
          {post.title}
        </h3>
      </Link>

      <div className="flex items-center gap-2 text-[10px] text-[var(--ink-faint)] mb-2">
        {date && <time dateTime={post.date}>{date}</time>}
        <span>阅读 {post.readingTime} 分钟</span>
      </div>

      {post.description && (
        <p className="text-xs text-[var(--ink-mute)] mb-3 leading-relaxed flex-1">{post.description}</p>
      )}

      <div className="flex flex-wrap gap-1 mt-auto">
        {post.tags.slice(0, 3).map((tag) => <TagBadge key={tag} tag={tag} />)}
      </div>

      <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full border border-[var(--ink-at-20)] flex items-center justify-center text-[var(--ink-faint)] group-hover:bg-[var(--coral)] group-hover:border-[var(--coral)] group-hover:text-white transition-all">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
      </div>
    </article>
  );
}
