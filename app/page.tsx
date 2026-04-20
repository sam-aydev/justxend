import NavBar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import HelpCenter from "@/components/HelpCenter";

export default function Home() {
  return (
    <main className="dark:bg-[#000000]  bg-[#EEF2FF] font-sans">
      <NavBar />

      <Hero />

      <StatsBanner />

      <Features />

      <HowItWorks />

      <CTASection />

      <Footer />
      <HelpCenter />
    </main>
  );
}

export const metadata: Metadata = {
  title: "JustXend | Instant & Borderless Global Money Transfers",
  description:
    "Experience the future of cross-border payments. Send money to 150+ countries in under 30 seconds, get virtual dollar cards, and save up to 90% on fees.",
  keywords: [
    "international money transfer",
    "cross-border payments",
    "virtual dollar cards",
    "send money to Nigeria",
    "blockchain payments",
    "global digital wallet",
    "low fee money transfer",
    "instant remittance",
  ],
  authors: [{ name: "JustXend" }],
  openGraph: {
    type: "website",
    url: "https://www.justxend.com",
    title: "JustXend - Your Bank Meets, Borderless.",
    description:
      "Send money globally in seconds. Enjoy ultra-low fees, virtual dollar cards, and bank-grade security with JustXend.",
    siteName: "JustXend",
    images: [
      {
        url: "https://www.justxend.com/og-image.jpg", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "JustXend App Interface showing fast global transfers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@JustXend", // Replace with your actual Twitter handle
    creator: "@JustXend",
    title: "JustXend | Fast, Secure Global Payments",
    description:
      "Send money to 150+ countries in under 30 seconds. Save up to 90% on bank fees today.",
    images: ["https://www.justxend.com/twitter-image.jpg"], // Replace with your actual Twitter image path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.justxend.com",
  },
};
