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
      {/* ✦ Hero — Section I */}
      <section className="pt-12 pb-20 sm:pt-20 sm:pb-32">
        <div className="sec-rule">
          <span className="sec-numeral">I.</span>
          <span className="sec-meta">封面 · 导语</span>
          <span className="sec-pages">001 / 008</span>
        </div>

        <div className="max-w-3xl">
          <h1
            className="mb-6 leading-[0.95]"
            style={{
              fontFamily: "'Inter Tight','Inter',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(38px, 6vw, 78px)',
              letterSpacing: '-0.04em',
            }}
          >
            用<span className="text-serif-italic text-[var(--coral)]">手艺</span>、
            <span className="text-serif-italic text-[var(--coral)]">笔记</span>
            和<span className="text-serif-italic text-[var(--coral)]">代码</span>
            建造属于自己的角落<span className="dot-coral">.</span>
          </h1>

          <p className="text-lg leading-relaxed text-[var(--ink-soft)] mb-8 max-w-xl"
             style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400 }}>
            这里是 CasterWx 的个人站点。记录软件工程实践、工具链心得与项目建造过程。每一篇文章都是一次手艺的打磨，每一个项目都是一块拼图。
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/blog" className="btn-primary">
              阅读文章
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </Link>
            <Link href="/about" className="btn-ghost">
              关于我
            </Link>
          </div>
        </div>
      </section>

      {/* ✦ Featured Posts — Section II */}
      {featuredPosts.length > 0 && (
        <section className="pb-20 sm:pb-32">
          <div className="sec-rule">
            <span className="sec-numeral">II.</span>
            <span className="sec-meta">精选文章 · 近期笔记</span>
            <span className="sec-pages">002 / 008</span>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-[26px] leading-tight"
              style={{
                fontFamily: "'Inter Tight','Inter',sans-serif",
                fontWeight: 700,
                letterSpacing: '-0.025em',
              }}
            >
              精选<span className="text-serif-italic text-[var(--coral)]">文章</span>
            </h2>
            <Link
              href="/blog"
              className="text-sm font-semibold text-[var(--ink-mute)] hover:text-[var(--coral)] transition-colors"
              style={{ fontFamily: "'Inter Tight','Inter',sans-serif" }}
            >
              全部文章 &rarr;
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.slice(0, 3).map((post, i) => (
              <PostCard key={post.slug} post={post} index={i + 1} />
            ))}
          </div>
        </section>
      )}

      {/* ✦ Recent Posts — Section III */}
      {recentPosts.length > 0 && (
        <section className="pb-20 sm:pb-32">
          <div className="sec-rule">
            <span className="sec-numeral">III.</span>
            <span className="sec-meta">近期笔记 · 最新更新</span>
            <span className="sec-pages">003 / 008</span>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-[26px] leading-tight"
              style={{
                fontFamily: "'Inter Tight','Inter',sans-serif",
                fontWeight: 700,
                letterSpacing: '-0.025em',
              }}
            >
              近期<span className="text-serif-italic text-[var(--coral)]">笔记</span>
            </h2>
            <Link
              href="/blog"
              className="text-sm font-semibold text-[var(--ink-mute)] hover:text-[var(--coral)] transition-colors"
              style={{ fontFamily: "'Inter Tight','Inter',sans-serif" }}
            >
              全部文章 &rarr;
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i + 1} />
            ))}
          </div>
        </section>
      )}

      {/* ✦ Featured Projects — Section IV */}
      {featuredProjects.length > 0 && (
        <section className="pb-20 sm:pb-32">
          <div className="sec-rule">
            <span className="sec-numeral">IV.</span>
            <span className="sec-meta">项目展示 · 作品集</span>
            <span className="sec-pages">004 / 008</span>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-[26px] leading-tight"
              style={{
                fontFamily: "'Inter Tight','Inter',sans-serif",
                fontWeight: 700,
                letterSpacing: '-0.025em',
              }}
            >
              精选<span className="text-serif-italic text-[var(--coral)]">项目</span>
            </h2>
            <Link
              href="/projects"
              className="text-sm font-semibold text-[var(--ink-mute)] hover:text-[var(--coral)] transition-colors"
              style={{ fontFamily: "'Inter Tight','Inter',sans-serif" }}
            >
              全部项目 &rarr;
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {featuredProjects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i + 1} />
            ))}
          </div>
        </section>
      )}

      {/* ✦ About Preview — Section V */}
      <section className="pb-20 sm:pb-32">
        <div className="sec-rule">
          <span className="sec-numeral">V.</span>
          <span className="sec-meta">关于 · 作者</span>
          <span className="sec-pages">005 / 008</span>
        </div>

        <div className="max-w-2xl">
          <h2
            className="text-[26px] mb-4 leading-tight"
            style={{
              fontFamily: "'Inter Tight','Inter',sans-serif",
              fontWeight: 700,
              letterSpacing: '-0.025em',
            }}
          >
            关于这个<span className="text-serif-italic text-[var(--coral)]">站点</span>
          </h2>
          <p className="text-[var(--ink-soft)] leading-relaxed mb-4">
            建于 MMXXVI，使用 Next.js、TypeScript 和 MDX 构建。静态导出部署于 GitHub Pages。
            无追踪、无分析、无广告。内容即为代码，推送即发布。
          </p>
          <p className="text-[var(--ink-mute)] text-sm mb-6" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
            技术栈：Next.js 16 · React 19 · Tailwind CSS v4 · MDX · GitHub Actions
          </p>
          <Link href="/about" className="btn-ghost">
            了解更多
          </Link>
        </div>
      </section>
    </div>
  );
}
