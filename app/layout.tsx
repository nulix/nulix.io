import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Goldman } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });
const goldman = Goldman({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-logo" });

export const metadata: Metadata = {
  title: "NULIX – OTA updates for embedded Linux",
  description: "Atomic A/B updates, delta images and staged rollouts for Yocto, Buildroot and Debian fleets.",
  icons: {
    icon: "https://platform.nulix.io/favicon.ico",
    shortcut: "https://platform.nulix.io/favicon.ico",
  },
};
export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${goldman.variable}`}>
      <body>{children}</body>
    </html>
  );
}
