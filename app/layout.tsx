import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
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
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
