import type { Metadata } from "next";
import { pressStart2P, outfit, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Timberbain - Building the future, one pixel at a time",
  description:
    "Portfolio of Jonas Brandvik (Timberbain) - Developer, creator, and pixel enthusiast. Solarpunk meets retro gaming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${pressStart2P.variable} ${outfit.variable} ${jetbrainsMono.variable} font-body bg-pixel-dark text-pixel-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
