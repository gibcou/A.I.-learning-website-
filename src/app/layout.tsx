import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Master - Learn AI for Work, Business, and Side Hustles",
  description: "Become the Master of AI. Learn how AI can increase your income and improve your life. More than 1,180,774+ people joined.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans"
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
