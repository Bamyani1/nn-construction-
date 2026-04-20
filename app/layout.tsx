import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import {
  Space_Grotesk,
  JetBrains_Mono,
  Playfair_Display,
} from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LenisProvider } from "@/components/lenis-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { RevealObserver } from "@/components/reveal-observer";
import { PointerField } from "@/components/pointer-field";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ECF1F7",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--nn-font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--nn-font-mono",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--nn-font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nn-construction.com"),
  title: {
    default: "NN Construction — Your dream, our hardwork.",
    template: "%s · NN Construction",
  },
  description:
    "Full-service construction — interior, exterior, and a proven specialty in roofing. Silver Spring, MD. 25-year workmanship warranty.",
  openGraph: {
    title: "NN Construction — Your dream, our hardwork.",
    description:
      "Full-service construction — interior, exterior, and a proven specialty in roofing.",
    siteName: "NN Construction",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NN Construction",
    description:
      "Full-service construction in the DC metro. 25-year workmanship warranty.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <noscript>
          {/* Safety for users with JS disabled: reveal targets stay visible. */}
          <style>{`[data-reveal],.nn-hero-word{opacity:1 !important;transform:none !important;filter:none !important;clip-path:inset(0) !important;}`}</style>
        </noscript>
      </head>
      <body>
        <LenisProvider>
          <ScrollProgress />
          <RevealObserver />
          <PointerField />
          <Nav />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
