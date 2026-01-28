import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jack - Frontend Engineer",
  description: "前端工程师 Jack 的个人介绍。专注 Web 应用工程化和用户体验，熟悉 Vue、React 生态，关注架构设计与性能优化。",
  keywords: ["前端工程师", "Frontend Engineer", "Vue", "React", "Web开发", "工程化", "性能优化"],
  authors: [{ name: "Jack" }],
  openGraph: {
    title: "Jack - Frontend Engineer",
    description: "前端工程师 Jack 的个人介绍",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
