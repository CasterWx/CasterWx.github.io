import Link from "next/link";
import type { Project } from "@/types";
import { TagBadge } from "@/components/blog/TagBadge";

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <article className="card-ed group flex flex-col">
      <div className="flex items-center justify-between mb-2">
        {index && <span className="text-xs text-[var(--coral)] italic select-none">{String(index).padStart(2, "0")}</span>}
        <span className="text-[9px] font-bold tracking-wider text-[var(--ink-faint)] uppercase">项目</span>
      </div>

      <Link href={`/projects/${project.slug}`} className="block mb-1.5">
        <h3 className="text-base font-bold leading-snug text-[var(--ink)] group-hover:text-[var(--coral)] transition-colors">
          {project.title}
        </h3>
      </Link>

      <p className="text-xs text-[var(--ink-mute)] mb-3 leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1 mb-3">
        {project.tags.map((tag) => <TagBadge key={tag} tag={tag} />)}
      </div>

      <div className="flex gap-3 text-xs font-bold mt-auto">
        {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-[var(--coral)] hover:underline">在线访问 &rarr;</a>}
        {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-[var(--ink-faint)] hover:text-[var(--ink)] hover:underline">源代码 &rarr;</a>}
      </div>

      <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full border border-[var(--ink-at-20)] flex items-center justify-center text-[var(--ink-faint)] group-hover:bg-[var(--coral)] group-hover:border-[var(--coral)] group-hover:text-white transition-all">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
      </div>
    </article>
  );
}
