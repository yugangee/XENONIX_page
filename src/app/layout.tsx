import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XENONIX — Empowering Your Financial Identity",
  description:
    "XENONIX breaks the Credit Paradox with AI-driven infrastructure for the next generation. Building credit, not just scoring it.",
  keywords: [
    "fintech",
    "credit builder",
    "AI credit scoring",
    "financial inclusion",
    "alternative data",
    "XENONIX",
  ],
  openGraph: {
    title: "XENONIX — Empowering Your Financial Identity",
    description: "AI 기반 대안 신용평가 인프라로 새로운 금융 정체성을 제공합니다.",
    url: "https://yugangee.github.io/XENONIX_page",
    siteName: "XENONIX",
    images: [
      {
        url: "/XENONIX_page/image.png",
        width: 1200,
        height: 630,
        alt: "XENONIX - Empowering Your Financial Identity",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XENONIX — Empowering Your Financial Identity",
    description: "AI 기반 대안 신용평가 인프라로 새로운 금융 정체성을 제공합니다.",
    images: ["/XENONIX_page/image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
