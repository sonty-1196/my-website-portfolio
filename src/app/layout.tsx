import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daewansh Bansal - Portfolio",
  description:
    "Portfolio of Daewansh Bansal, BSc Software Engineering student at University of Europe for Applied Sciences (Potsdam). Interests: Data Science, ML, and software craftsmanship.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Daewansh Bansal - Portfolio",
    description:
      "BSc Software Engineering student focused on Data Science and ML.",
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daewansh Bansal - Portfolio",
    description:
      "BSc Software Engineering student focused on Data Science and ML.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-grid`}>{children}</body>
    </html>
  );
}
