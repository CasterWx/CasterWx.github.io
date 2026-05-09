import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = { title: "项目", description: "建造中的项目与作品。" };

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div>
      <section className="pt-8 pb-12">
        <div className="sec-rule">
          <span className="sec-numeral">IV.</span>
          <span className="sec-meta">项目</span>
          <span className="sec-pages">004 / 008</span>
        </div>

        <h1 className="text-[30px] font-bold tracking-tight leading-tight mb-2">项目<span className="dot-coral">.</span></h1>
        <p className="text-[var(--ink-mute)] text-sm mb-6">建造中的项目与作品。</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => <ProjectCard key={project.slug} project={project} index={i + 1} />)}
        </div>
        {projects.length === 0 && <p className="text-[var(--ink-mute)] text-center py-12 italic">暂无项目。</p>}
      </section>
    </div>
  );
}
