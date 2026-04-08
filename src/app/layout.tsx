import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Engineer | Full Stack Developer Portfolio",
  description: "Portfolio of an AI Product Builder crafting scalable SaaS applications with real-world monetization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
