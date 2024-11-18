import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontInter = Inter({
  subsets: ["latin"],
  // variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Convit3 Digital",
  description: "Convit3 Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={fontInter.className}>{children}</body>
    </html>
  );
}
