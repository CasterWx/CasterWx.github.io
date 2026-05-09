import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center pt-14 pb-24 text-center">
      <div className="sec-rule w-full max-w-md mx-auto mb-10">
        <span className="sec-numeral">—</span>
        <span className="sec-meta">未找到</span>
        <span className="sec-pages">— / 008</span>
      </div>
      <p className="text-[90px] leading-none font-extrabold text-[var(--ink-at-12)] select-none mb-3">404</p>
      <p className="text-[20px] font-bold mb-2">页面未找到<span className="dot-coral">.</span></p>
      <p className="text-[var(--ink-mute)] text-sm mb-6">您寻找的页面不存在或已被移除。</p>
      <Link href="/" className="btn-primary">返回首页</Link>
    </div>
  );
}
