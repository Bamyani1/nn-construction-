import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  icons: { icon: "/assets/logo-mark.svg" },
  title: "NN Construction — Your dream, our hardwork.",
  description:
    "Full-service construction — interior, exterior, and a proven specialty in roofing. Silver Spring, MD.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
