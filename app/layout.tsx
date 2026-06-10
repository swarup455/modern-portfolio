import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swarup Das — Software Engineer & AI Enthusiast",
  description:
    "Portfolio of Swarup Das. Building scalable products and AI solutions with a focus on performance and minimal design.",
  keywords: ["Software Engineer", "AI", "Full Stack", "Next.js", "Portfolio"],
  authors: [{ name: "Swarup Das" }],
  openGraph: {
    title: "Swarup Das — Software Engineer",
    description: "Building scalable products and AI solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        <main className="pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}