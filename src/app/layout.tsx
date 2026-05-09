import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SideRails } from "@/components/layout/SideRails";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CasterWx — 手艺 · 笔记 · 工具",
    template: "%s | CasterWx",
  },
  description: "个人站点，记录手艺、笔记与建造过程。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500&family=Inter+Tight:wght@600;700;800;900&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@1,500&display=swap" rel="stylesheet" />
      <body className="min-h-full flex flex-col bg-[var(--paper)] text-[var(--ink)]">
        <SideRails />
        <Header />
        <main className="flex-1 container-ed">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
