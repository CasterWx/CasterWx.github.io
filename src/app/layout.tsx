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
      <link
        rel="preload"
        href="https://s3plus.meituan.net/citadelweb-files/fonts/Meituan%20Type-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <body className="min-h-full flex flex-col bg-[var(--paper)] text-[var(--ink)]">
        <SideRails />
        <Header />
        <main className="flex-1 container-ed">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
