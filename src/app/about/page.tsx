import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "关于", description: "关于 CasterWx 与本站。" };

export default function AboutPage() {
  return (
    <div>
      <section className="pt-8 pb-16 max-w-3xl mx-auto">
        <div className="sec-rule">
          <span className="sec-numeral">V.</span>
          <span className="sec-meta">关于</span>
          <span className="sec-pages">005 / 008</span>
        </div>

        <h1 className="text-[28px] sm:text-[38px] font-bold tracking-tight leading-[1.1] mb-5">关于<span className="dot-coral">.</span></h1>

        <div className="prose-custom space-y-4">
          <p>CasterWx，软件工程师。热衷于在网络上建造东西。</p>
          <p>本站是公开笔记本：记录软件工程实践、工具链心得、项目建造过程。每篇文章都是一次手艺打磨，每个项目都是一块拼图。</p>

          <h2>关于本站</h2>
          <ul>
            <li>建于 <span className="font-mono text-xs">MMXXVI</span></li>
            <li>使用 Next.js、TypeScript、Tailwind CSS 构建</li>
            <li>内容以 MDX 文件管理，Git 版本控制</li>
            <li>静态导出，部署于 GitHub Pages</li>
            <li>无追踪、无分析、无广告</li>
          </ul>

          <h2>技术栈</h2>
          <p className="font-mono text-[11px] text-[var(--ink-mute)]">Next.js 16 · React 19 · TypeScript 5.8 · Tailwind CSS v4 · MDX · GitHub Actions</p>

          <h2>联系</h2>
          <p>在 <a href="https://github.com/CasterWx" target="_blank" rel="noopener noreferrer">GitHub</a> 找到我。</p>
        </div>

        <div className="mt-10 pt-5 border-t border-[var(--ink-at-12)]">
          <Link href="/" className="btn-ghost">&larr; 返回首页</Link>
        </div>
      </section>
    </div>
  );
}
