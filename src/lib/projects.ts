import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project } from "@/types";

const projectsDir = path.join(process.cwd(), "content/projects");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDir)) return [];

  const filenames = fs.readdirSync(projectsDir);
  return filenames
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(projectsDir, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const excerpt = content
        .replace(/^#+\s+.*$/gm, "")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/[#*_~`>]/g, "")
        .trim()
        .slice(0, 200);

      return {
        slug: filename.replace(/\.(mdx|md)$/, ""),
        title: data.title ?? "Untitled",
        description: data.description ?? "",
        tags: data.tags ?? [],
        url: data.url ?? undefined,
        repo: data.repo ?? undefined,
        coverImage: data.coverImage ?? undefined,
        featured: data.featured ?? false,
        content,
        excerpt,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  const featured = getAllProjects().filter((p) => p.featured);
  return featured.length > 0 ? featured : getAllProjects().slice(0, 3);
}
