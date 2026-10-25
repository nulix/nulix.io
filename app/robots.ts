import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/status/"],
    },
    sitemap: "https://nulix.io/sitemap.xml",
    host: "https://nulix.io",
  };
}
