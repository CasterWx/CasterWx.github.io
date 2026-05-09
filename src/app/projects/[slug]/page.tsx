import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { TagBadge } from "@/components/blog/TagBadge";
import { MDXContent } from "@/components/shared/MDXContent";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "未找到" };
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="max-w-3xl mx-auto pt-8 pb-16">
      <div className="sec-rule">
        <span className="sec-numeral">IV.</span>
        <span className="sec-meta">项目详情</span>
        <span className="sec-pages">004 / 008</span>
      </div>

      <Link href="/projects" className="text-xs font-bold text-[var(--coral)] hover:underline mb-5 inline-block">&larr; 返回项目列表</Link>

      <header className="mb-8">
        <h1 className="text-[28px] sm:text-[38px] font-bold tracking-tight leading-[1.1] mb-3">{project.title}<span className="dot-coral">.</span></h1>
        <p className="text-[var(--ink-mute)] text-sm mb-3">{project.description}</p>
        {project.tags.length > 0 && <div className="flex flex-wrap gap-1.5 mb-3">{project.tags.map((tag) => <TagBadge key={tag} tag={tag} />)}</div>}
        <div className="flex gap-3">
          {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">在线访问 <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></a>}
          {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">源代码 &rarr;</a>}
        </div>
      </header>

      <div className="prose-custom max-w-none"><MDXContent source={project.content} /></div>

      <div className="mt-12 pt-6 border-t border-[var(--ink-at-12)]">
        <Link href="/projects" className="text-xs font-bold text-[var(--coral)] hover:underline">&larr; 返回项目列表</Link>
      </div>
    </article>
  );
}
