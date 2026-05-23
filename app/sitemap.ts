import type { MetadataRoute } from "next";
import { spaces } from "@/data/spaces";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const routes = ["/", "/formations", "/espaces", "/a-propos", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.8,
    })),
    ...spaces.map((space) => ({
      url: `${baseUrl}/espaces/${space.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
