import type { MetadataRoute } from "next";

const baseUrl = "https://vicente-ortega-peluqueros.vercel.app";

const routes = [
  { path: "", priority: 1 },
  { path: "/servicios", priority: 0.9 },
  { path: "/el-salon", priority: 0.7 },
  { path: "/galeria", priority: 0.5 },
  { path: "/opiniones", priority: 0.7 },
  { path: "/contacto", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
