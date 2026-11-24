import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/servicios", "/galeria", "/nosotros", "/contacto"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
