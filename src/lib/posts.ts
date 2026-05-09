import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, TagCount } from "@/types";

const postsDir = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDir)) return [];

  const filenames = fs.readdirSync(postsDir);
  const posts = filenames
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
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
        date: data.date ? new Date(data.date).toISOString() : "",
        description: data.description ?? "",
        tags: data.tags ?? [],
        coverImage: data.coverImage ?? undefined,
        readingTime: Math.ceil(readingTime(content).minutes),
        featured: data.featured ?? false,
        content,
        excerpt,
      };
    })
    .sort((a, b) => (b.date > a.date ? 1 : -1));

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  const featured = getAllPosts().filter((p) => p.featured);
  return featured.length > 0 ? featured : getAllPosts().slice(0, 3);
}

export function getRecentPosts(count = 5): BlogPost[] {
  return getAllPosts().slice(0, count);
}

export function getAllTags(): TagCount[] {
  const tagMap = new Map<string, number>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      const normalized = tag.trim();
      if (normalized) {
        tagMap.set(normalized, (tagMap.get(normalized) ?? 0) + 1);
      }
    }
  }
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((p) =>
    p.tags.some((t) => t.trim().toLowerCase() === tag.toLowerCase())
  );
}

export function getPrevPost(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  const idx = posts.findIndex((p) => p.slug === slug);
  return idx > 0 ? posts[idx - 1] : undefined;
}

export function getNextPost(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  const idx = posts.findIndex((p) => p.slug === slug);
  return idx < posts.length - 1 ? posts[idx + 1] : undefined;
}
