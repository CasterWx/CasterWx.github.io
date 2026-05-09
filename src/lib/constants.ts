import type { SiteConfig, NavLink } from "@/types";

export const POSTS_PER_PAGE = 10;

export const siteConfig: SiteConfig = {
  name: "CasterWx",
  title: "CasterWx — 手艺 · 笔记 · 工具",
  description: "个人站点，记录手艺、笔记与建造过程。",
  url: "https://casterwx.github.io",
  author: "CasterWx",
  social: {
    github: "https://github.com/CasterWx",
  },
};

export const navLinks: NavLink[] = [
  { label: "封面", href: "/" },
  { label: "文章", href: "/blog" },
  { label: "项目", href: "/projects" },
  { label: "索引", href: "/tags" },
  { label: "关于", href: "/about" },
];
