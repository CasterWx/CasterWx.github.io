import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-32 text-center">
      <div className="sec-rule w-full max-w-md mx-auto mb-12">
        <span className="sec-numeral">—</span>
        <span className="sec-meta">未找到</span>
        <span className="sec-pages">— / 008</span>
      </div>

      <p
        className="text-[120px] leading-none font-extrabold text-[var(--ink-at-12)] select-none mb-4"
        style={{ fontFamily: "'Inter Tight','Inter',sans-serif" }}
      >
        404
      </p>
      <p
        className="text-[22px] font-semibold mb-2"
        style={{ fontFamily: "'Inter Tight','Inter',sans-serif" }}
      >
        页面未找到<span className="dot-coral">.</span>
      </p>
      <p className="text-[var(--ink-mute)] mb-8">
        您寻找的页面不存在或已被移除。
      </p>
      <Link href="/" className="btn-primary">
        返回首页
      </Link>
    </div>
  );
}
