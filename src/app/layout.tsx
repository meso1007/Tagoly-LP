import type { Metadata } from "next";
import { Inter } from "next/font/google"; // プロっぽいフォント
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundGradient from "@/components/BackgroundGradient";
import { getSiteOrigin } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

const siteOrigin = getSiteOrigin();
const title = {
  default: "Tagoly — Commit with confidence",
  template: "%s | Tagoly",
};
const description =
  "Stop wasting time on commit message format. Tagoly automates git scope detection and enforces team consistency across macOS, Windows, and Linux.";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title,
  description,
  keywords: [
    "Tagoly",
    "git",
    "commit message",
    "conventional commits",
    "scope detection",
    "developer tools",
    "CLI",
    "team workflow",
  ],
  authors: [{ name: "Tagoly" }],
  creator: "Tagoly",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Tagoly",
    title: title.default,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: title.default,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteOrigin}/#website`,
      url: siteOrigin,
      name: "Tagoly",
      description,
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      name: "Tagoly",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Windows, macOS, Linux",
      description,
      url: siteOrigin,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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