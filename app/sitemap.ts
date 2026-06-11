import type { MetadataRoute } from "next";
import { routeUrl } from "./lib/seo";

const lastModified = new Date("2026-06-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/portfolio", changeFrequency: "monthly", priority: 0.8 },
    { path: "/careers", changeFrequency: "monthly", priority: 0.75 },
    { path: "/internships", changeFrequency: "monthly", priority: 0.75 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  ] as const;

  return routes.map((route) => ({
    url: routeUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
