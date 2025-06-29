import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";

import { Analytics } from "@/components/analytics";
import "@workspace/ui/globals.css";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "OpenScriber - Open Source AI Note Taker for your meetings",
  description:
    "Open source granola.ai alternative AI note taker app for your back to back meetings.",
  keywords: [
    "meeting notes",
    "AI note taker",
    "granola.ai alternative",
    "open source",
    "meeting transcription"
  ],
  authors: [{ name: "Moinul Moin" }],
  openGraph: {
    title: "OpenScriber - Open Source AI Note Taker for your meetings",
    description:
      "Open source granola.ai alternative AI note taker app for your back to back meetings.",
    type: "website",
    url: "https://openscriber.com",
    siteName: "OpenScriber",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenScriber - Open Source AI meeting note taker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenScriber - Open Source AI meeting note taker for your meetings",
    description:
      "Open source granola.ai alternative AI note taker app for your back to back meetings",
    images: ["/og-image.png"],
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans antialiased `}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
