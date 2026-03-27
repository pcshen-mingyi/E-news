import type { Metadata } from "next";
import { Noto_Sans_TC, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI E-News | 每日 AI 新知平台",
    template: "%s | AI E-News",
  },
  description: "掌握最新 AI 技術與應用趨勢，技術新知、應用案例、學習筆記一站搞定",
  keywords: ["AI", "人工智慧", "技術新知", "應用案例", "機器學習", "深度學習", "LLM"],
  openGraph: {
    type: "website",
    locale: "zh_TW",
    siteName: "AI E-News",
    title: "AI E-News | 每日 AI 新知平台",
    description: "掌握最新 AI 技術與應用趨勢，技術新知、應用案例、學習筆記一站搞定",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={`${notoSansTC.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "'Noto Sans TC', 'Inter', sans-serif" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
