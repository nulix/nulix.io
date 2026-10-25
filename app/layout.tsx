import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Goldman } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });
const goldman = Goldman({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-logo" });

const description =
  "Atomic A/B updates, delta images and staged rollouts for Yocto, Buildroot and Debian fleets. Signed end to end, rolled back automatically.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nulix.io"),
  title: {
    default: "NULIX – OTA updates for embedded Linux",
    template: "%s – NULIX",
  },
  description,
  applicationName: "NULIX",
  keywords: [
    "OTA updates",
    "embedded Linux",
    "Yocto",
    "Buildroot",
    "Debian",
    "A/B updates",
    "delta updates",
    "fleet management",
    "edge devices",
    "RAUC",
    "SWUpdate",
  ],
  authors: [{ name: "NULIX", url: "https://nulix.io" }],
  creator: "NULIX",
  publisher: "NULIX",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://nulix.io",
    siteName: "NULIX",
    title: "NULIX – OTA updates for embedded Linux",
    description,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NULIX – OTA updates for embedded Linux",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NULIX – OTA updates for embedded Linux",
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
