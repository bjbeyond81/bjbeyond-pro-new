import type { MetadataRoute } from "next";
import { allStaticPaths } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return allStaticPaths().map(({ path }) => {
    const loc = path.length ? `https://bjbeyond.pro/${path.join("/")}/` : "https://bjbeyond.pro/";
    const isHome = path.length === 0 || (path.length === 1 && path[0] === "en");
    return {
      url: loc,
      lastModified: new Date("2026-09-21"),
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome ? 1 : 0.8,
    };
  });
}
