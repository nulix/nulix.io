import type { MetadataRoute } from "next";

const base = "https://nulix.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
