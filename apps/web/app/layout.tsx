import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Providers } from "@/components/providers";
import "@workspace/ui/globals.css";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans"
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "OpenScriber - AI Note Taker for Your Meetings",
  description: "Open source granola.ai alternative AI note taker app for your meetings.",
  keywords: ["meeting notes", "AI note taker", "granola.ai alternative", "open source", "meeting transcription"],
  authors: [{ name: "OpenScriber Team" }],
  openGraph: {
    title: "OpenScriber - AI Note Taker for Your Meetings",
    description: "Open source granola.ai alternative AI note taker app for your meetings.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenScriber",
    description: "Open source granola.ai alternative AI note taker app for your meetings",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
