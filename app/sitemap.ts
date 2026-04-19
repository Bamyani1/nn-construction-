import type { MetadataRoute } from "next";

const BASE_URL = "https://nn-construction.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/portfolio",
    "/services/interior",
    "/services/exterior",
    "/testimonials",
    "/faq",
    "/contact",
  ];

  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
