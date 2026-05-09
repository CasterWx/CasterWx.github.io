import Link from "next/link";
import type { Project } from "@/types";
import { TagBadge } from "@/components/blog/TagBadge";

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <article className="card-ed group flex flex-col">
      <div className="flex items-center justify-between mb-3">
        {index && (
          <span
            className="text-sm text-[var(--coral)] select-none"
            style={{ fontFamily: "'Playfair Display','Georgia',serif", fontStyle: "italic", fontWeight: 500 }}
          >
            {String(index).padStart(2, "0")}
          </span>
        )}
        <span className="text-eyebrow text-[10px] opacity-70">项目</span>
      </div>

      <Link href={`/projects/${project.slug}`} className="block mb-2">
        <h3
          className="text-lg font-bold leading-snug text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors"
          style={{
            fontFamily: "'Inter Tight','Inter',sans-serif",
            letterSpacing: '-0.02em',
          }}
        >
          {project.title}
        </h3>
      </Link>

      <p className="text-sm text-[var(--ink-mute)] mb-4 leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      <div className="flex gap-4 text-sm mt-auto" style={{ fontFamily: "'Inter Tight','Inter',sans-serif" }}>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--coral)] hover:underline font-semibold text-xs"
          >
            在线访问 &rarr;
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--ink-faint)] hover:text-[var(--ink)] hover:underline font-semibold text-xs"
          >
            源代码 &rarr;
          </a>
        )}
      </div>

      <div className="absolute bottom-5 right-5 w-7 h-7 rounded-full border border-[var(--ink-at-20)] flex items-center justify-center text-[var(--ink-faint)] group-hover:bg-[var(--coral)] group-hover:border-[var(--coral)] group-hover:text-white transition-all">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>
    </article>
  );
}
