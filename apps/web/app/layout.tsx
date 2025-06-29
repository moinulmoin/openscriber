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
  title: "OpenScriber - Open Source AI Note Taker",
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
    title: "OpenScriber - Open Source AI Note Taker",
    description:
      "Open source granola.ai alternative AI note taker app for your back to back meetings.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenScriber",
    description:
      "Open source granola.ai alternative AI note taker app for your back to back meetings"
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
