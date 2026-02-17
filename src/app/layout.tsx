import type { Metadata } from "next";
import { Inter } from "next/font/google"; // プロっぽいフォント
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundGradient from "@/components/BackgroundGradient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tagoly - Stop Wasting Time on Commit Messages",
  description: "Automate your git workflow with smart scope detection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          <BackgroundGradient /> {/* ここに追加！ */}
          <div className="relative z-0"> {/* コンテンツをラップ */}
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}