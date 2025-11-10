import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import ErrorBoundary from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FeedbackHub - Collect and Manage User Feedback",
  description: "A modern feedback collection platform built with Next.js, Prisma, and MongoDB",
  keywords: ["feedback", "collection", "user feedback", "customer feedback", "survey"],
  authors: [{ name: "FeedbackHub" }],
  creator: "FeedbackHub",
  publisher: "FeedbackHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "FeedbackHub - Collect and Manage User Feedback",
    description: "A modern feedback collection platform built with Next.js, Prisma, and MongoDB",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FeedbackHub - Collect and Manage User Feedback",
    description: "A modern feedback collection platform built with Next.js, Prisma, and MongoDB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ErrorBoundary>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Analytics />
        </ErrorBoundary>
      </body>
    </html>
  );
}