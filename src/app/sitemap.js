import { getProjects } from "./data/projects";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ;

  // Halaman statis utama
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Halaman dinamis detail project portofolio
  const projects = getProjects();
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}

