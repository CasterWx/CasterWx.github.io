import Link from "next/link";
import { getFeaturedPosts, getRecentPosts } from "@/lib/posts";
import { getFeaturedProjects } from "@/lib/projects";
import { PostCard } from "@/components/blog/PostCard";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(3);
  const featuredProjects = getFeaturedProjects();

  return (
    <div>
      {/* Hero — Section I */}
      <section className="pt-8 pb-12 sm:pt-14 sm:pb-20">
        <div className="sec-rule">
          <span className="sec-numeral">I.</span>
          <span className="sec-meta">封面 · 导语</span>
          <span className="sec-pages">001 / 008</span>
        </div>

        <div className="max-w-3xl">
          <h1
            className="mb-5 leading-[1.08] font-bold tracking-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
          >
            用<span className="text-serif-italic text-[var(--coral)]">手艺</span>、
            <span className="text-serif-italic text-[var(--coral)]">笔记</span>
            和<span className="text-serif-italic text-[var(--coral)]">代码</span>
            建造属于自己的角落<span className="dot-coral">.</span>
          </h1>

          <p className="text-base text-[var(--ink-soft)] mb-6 max-w-xl leading-relaxed">
            这里是 CasterWx 的个人站点。记录软件工程实践、工具链心得与项目建造过程。每一篇文章都是一次手艺的打磨，每一个项目都是一块拼图。
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/blog" className="btn-primary">
              阅读文章
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </Link>
            <Link href="/about" className="btn-ghost">
              关于我
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts — Section II */}
      {featuredPosts.length > 0 && (
        <section className="pb-12 sm:pb-20">
          <div className="sec-rule">
            <span className="sec-numeral">II.</span>
            <span className="sec-meta">精选文章</span>
            <span className="sec-pages">002 / 008</span>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[22px] font-bold tracking-tight leading-tight">
              精选<span className="text-serif-italic text-[var(--coral)]">文章</span>
            </h2>
            <Link href="/blog" className="text-sm font-bold text-[var(--ink-mute)] hover:text-[var(--coral)] transition-colors">
              全部 &rarr;
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.slice(0, 3).map((post, i) => (
              <PostCard key={post.slug} post={post} index={i + 1} />
            ))}
          </div>
        </section>
      )}

      {/* Recent Posts — Section III */}
      {recentPosts.length > 0 && (
        <section className="pb-12 sm:pb-20">
          <div className="sec-rule">
            <span className="sec-numeral">III.</span>
            <span className="sec-meta">近期笔记</span>
            <span className="sec-pages">003 / 008</span>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[22px] font-bold tracking-tight leading-tight">
              近期<span className="text-serif-italic text-[var(--coral)]">笔记</span>
            </h2>
            <Link href="/blog" className="text-sm font-bold text-[var(--ink-mute)] hover:text-[var(--coral)] transition-colors">
              全部 &rarr;
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i + 1} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Projects — Section IV */}
      {featuredProjects.length > 0 && (
        <section className="pb-12 sm:pb-20">
          <div className="sec-rule">
            <span className="sec-numeral">IV.</span>
            <span className="sec-meta">项目作品</span>
            <span className="sec-pages">004 / 008</span>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[22px] font-bold tracking-tight leading-tight">
              精选<span className="text-serif-italic text-[var(--coral)]">项目</span>
            </h2>
            <Link href="/projects" className="text-sm font-bold text-[var(--ink-mute)] hover:text-[var(--coral)] transition-colors">
              全部 &rarr;
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredProjects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i + 1} />
            ))}
          </div>
        </section>
      )}

      {/* About Preview — Section V */}
      <section className="pb-12 sm:pb-16">
        <div className="sec-rule">
          <span className="sec-numeral">V.</span>
          <span className="sec-meta">关于作者</span>
          <span className="sec-pages">005 / 008</span>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-[22px] font-bold tracking-tight leading-tight mb-3">
            关于这个<span className="text-serif-italic text-[var(--coral)]">站点</span>
          </h2>
          <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-3">
            建于 MMXXVI。使用 Next.js、TypeScript 和 MDX 构建，静态导出部署于 GitHub Pages。
            无追踪、无分析、无广告。内容即为代码，推送即发布。
          </p>
          <p className="text-mono text-xs mb-4">
            技术栈：Next.js 16 · React 19 · Tailwind CSS v4 · MDX · GitHub Actions
          </p>
          <Link href="/about" className="btn-ghost">了解更多</Link>
        </div>
      </section>
    </div>
  );
}
