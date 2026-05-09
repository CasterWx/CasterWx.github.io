"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();

  return (
    <>
      <div className="container-ed meta-strip">
        <span>Vol. 01 / Issue Nº 26</span>
        <span>归档于{" "}
          <span className="text-[var(--coral)]">
            {pathname === "/" ? "封面" :
             pathname.startsWith("/blog") ? "文章" :
             pathname.startsWith("/projects") ? "项目" :
             pathname.startsWith("/tags") ? "索引" :
             pathname.startsWith("/about") ? "关于" : "页面"}
          </span>
        </span>
        <span className="flex items-center gap-2">
          <span className="pulse-dot" />
          <span>zh-CN · MMXXVI</span>
        </span>
      </div>

      <header className="container-ed flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 text-display text-base tracking-tight text-[var(--ink)] hover:text-[var(--coral)] transition-colors">
          <span className="text-serif-italic text-[var(--coral)]">Ø</span>
          CasterWx
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href}
                className={`text-sm tracking-wide transition-colors font-bold ${isActive ? "text-[var(--coral)]" : "text-[var(--ink-soft)] hover:text-[var(--ink)]"}`}>
                {link.label}
              </Link>
            );
          })}
          <span className="text-[var(--mustard)] select-none text-xs">★</span>
        </nav>

        <nav className="flex sm:hidden items-center gap-4">
          {navLinks.slice(0, 4).map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href}
                className={`text-xs tracking-wide transition-colors font-bold ${isActive ? "text-[var(--coral)]" : "text-[var(--ink-soft)]"}`}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}
