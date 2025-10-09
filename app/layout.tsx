import type { Metadata } from "next";
import {
  Source_Sans_3 as SansSerif,
  Geist_Mono as Mono,
  Unna as Serif,
} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import { TITLE } from "./constants";

const sans = SansSerif({
  weight: "400",
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const serif = Serif({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: TITLE,
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${mono.variable} ${serif.variable} antialiased relative`}
      >
        {children}
        <div className="noise absolute w-full h-full top-0 opacity-10 saturate-200 pointer-events-none z-50"></div>
        <Analytics />
      </body>
    </html>
  );
}
