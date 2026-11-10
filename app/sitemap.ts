import type { MetadataRoute } from "next";

const BASE = "https://upailabs.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/events", "/labs", "/research", "/projects", "/blogs", "/faqs", "/contact_us", "/privacy"];
  return routes.map((route) => ({
    url: BASE + route,
    changeFrequency: route === "" || route === "/events" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
