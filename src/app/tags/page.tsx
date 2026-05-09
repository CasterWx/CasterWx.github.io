import type { Metadata } from "next";
import Link from "next/link";
import { getAllTags } from "@/lib/posts";

export const metadata: Metadata = { title: "索引", description: "按标签浏览所有话题。" };

export default function TagsPage() {
  const tags = getAllTags();
  const maxCount = tags.length > 0 ? tags[0].count : 1;

  return (
    <div>
      <section className="pt-8 pb-12">
        <div className="sec-rule">
          <span className="sec-numeral">VI.</span>
          <span className="sec-meta">索引</span>
          <span className="sec-pages">006 / 008</span>
        </div>

        <h1 className="text-[30px] font-bold tracking-tight leading-tight mb-2">索引<span className="dot-coral">.</span></h1>
        <p className="text-[var(--ink-mute)] text-sm mb-8">按标签浏览所有话题。</p>

        <div className="flex flex-wrap gap-2.5">
          {tags.map(({ tag, count }) => {
            const size = 0.8 + (count / maxCount) * 0.8;
            return (
              <Link key={tag} href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
                className="pill hover:border-[var(--coral)] hover:text-[var(--coral)]"
                style={{ fontSize: `${size}rem` }}>
                {tag}
                <span className="text-[var(--ink-faint)] text-[9px] font-mono ml-1">{String(count).padStart(2, '0')}</span>
              </Link>
            );
          })}
        </div>
        {tags.length === 0 && <p className="text-[var(--ink-mute)] text-center py-12 italic">暂无标签。</p>}
      </section>
    </div>
  );
}
