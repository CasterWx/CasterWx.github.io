import type { Metadata } from "next";
import Link from "next/link";
import { getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "索引",
  description: "按标签浏览所有话题。",
};

export default function TagsPage() {
  const tags = getAllTags();
  const maxCount = tags.length > 0 ? tags[0].count : 1;

  return (
    <div>
      <section className="pt-10 pb-16">
        <div className="sec-rule">
          <span className="sec-numeral">VI.</span>
          <span className="sec-meta">索引 · 标签</span>
          <span className="sec-pages">006 / 008</span>
        </div>

        <h1
          className="text-[38px] leading-tight mb-2"
          style={{
            fontFamily: "'Inter Tight','Inter',sans-serif",
            fontWeight: 800,
            letterSpacing: '-0.035em',
          }}
        >
          索引<span className="dot-coral">.</span>
        </h1>
        <p className="text-[var(--ink-mute)] mb-10" style={{ fontFamily: "'Inter',sans-serif" }}>
          按标签浏览所有话题。
        </p>

        <div className="flex flex-wrap gap-3">
          {tags.map(({ tag, count }) => {
            const size = 0.85 + (count / maxCount) * 1.0;
            return (
              <Link
                key={tag}
                href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
                className="pill hover:border-[var(--coral)] hover:text-[var(--coral)]"
                style={{ fontSize: `${size}rem` }}
              >
                {tag}
                <span className="text-[var(--ink-faint)] text-[10px] ml-1" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                  {String(count).padStart(2, '0')}
                </span>
              </Link>
            );
          })}
        </div>

        {tags.length === 0 && (
          <p className="text-[var(--ink-mute)] text-center py-16 text-serif-italic">
            暂无标签。
          </p>
        )}
      </section>
    </div>
  );
}
