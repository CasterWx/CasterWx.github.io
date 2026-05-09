import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--ink-at-12)]">
      <div className="container-ed py-16">
        {/* Meta strip */}
        <div className="meta-strip mb-12">
          <span>Vol. 01 / Issue Nº 26</span>
          <span className="flex items-center gap-2">
            <span className="pulse-dot" />
            <span>zh-CN · MMXXVI</span>
          </span>
          <span>Edited by {siteConfig.author}</span>
        </div>

        {/* Giant word */}
        <div
          className="text-center font-extrabold leading-[0.85] tracking-tighter text-[var(--ink)] mb-8 select-none"
          style={{
            fontFamily: "'Inter Tight','Inter',sans-serif",
            fontSize: 'clamp(70px, 13vw, 200px)',
            letterSpacing: '-0.05em',
          }}
        >
          CasterWx
          <span className="text-[var(--coral)]">.</span>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[var(--ink-faint)]">
          <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>
            39.9042° N · 116.4074° E
          </span>
          <span className="text-serif-italic text-[var(--coral)] text-sm">fin.</span>
          <span style={{ fontFamily: "'Inter Tight','Inter',sans-serif" }}>
            &copy; MMXXVI · {siteConfig.author} · 保留所有权利
          </span>
        </div>
      </div>
    </footer>
  );
}
