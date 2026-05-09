import Link from "next/link";
import type { BlogPost } from "@/types";
import { TagBadge } from "./TagBadge";

export function PostCard({ post, index }: { post: BlogPost; index?: number }) {
  const date = post.date
    ? new Date(post.date).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <article className="card-ed group flex flex-col">
      {/* Header row: numeral + eyebrow */}
      <div className="flex items-center justify-between mb-3">
        {index && (
          <span
            className="text-sm text-[var(--coral)] select-none"
            style={{ fontFamily: "'Playfair Display','Georgia',serif", fontStyle: "italic", fontWeight: 500 }}
          >
            {String(index).padStart(2, "0")}
          </span>
        )}
        <span className="text-eyebrow text-[10px] opacity-70">文章</span>
      </div>

      <Link href={`/blog/${post.slug}`} className="block mb-2">
        <h3
          className="text-lg font-bold leading-snug text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors"
          style={{
            fontFamily: "'Inter Tight','Inter',sans-serif",
            letterSpacing: '-0.02em',
          }}
        >
          {post.title}
        </h3>
      </Link>

      <div className="flex items-center gap-3 text-xs text-[var(--ink-faint)] mb-3">
        {date && <time dateTime={post.date}>{date}</time>}
        <span>阅读 {post.readingTime} 分钟</span>
      </div>

      {post.description && (
        <p className="text-sm text-[var(--ink-mute)] mb-4 leading-relaxed flex-1">
          {post.description}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {post.tags.slice(0, 3).map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      {/* Arrow mark */}
      <div className="absolute bottom-5 right-5 w-7 h-7 rounded-full border border-[var(--ink-at-20)] flex items-center justify-center text-[var(--ink-faint)] group-hover:bg-[var(--coral)] group-hover:border-[var(--coral)] group-hover:text-white transition-all">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>
    </article>
  );
}
