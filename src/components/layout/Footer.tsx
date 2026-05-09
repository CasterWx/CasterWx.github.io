import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--ink-at-12)]">
      <div className="container-ed py-10">
        <div className="meta-strip mb-9">
          <span>Vol. 01 / Issue Nº 26</span>
          <span className="flex items-center gap-2"><span className="pulse-dot" /><span>zh-CN · MMXXVI</span></span>
          <span>Edited by {siteConfig.author}</span>
        </div>

        <div className="text-center font-extrabold leading-[0.88] tracking-tighter text-[var(--ink)] mb-6 select-none"
          style={{ fontSize: 'clamp(60px, 11vw, 160px)' }}>
          CasterWx<span className="text-[var(--coral)]">.</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[9px] text-[var(--ink-faint)]">
          <span>39.9042° N · 116.4074° E</span>
          <span className="text-serif-italic text-[var(--coral)] text-xs">fin.</span>
          <span>&copy; MMXXVI · {siteConfig.author}</span>
        </div>
      </div>
    </footer>
  );
}
