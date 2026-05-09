import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getAllPosts() {
  const postsDir = path.join(__dirname, "..", "content", "blog");
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const match = raw.match(
        /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
      );
      if (!match) return null;

      const frontmatter = match[1];
      const content = match[2];
      const parsed = {};
      for (const line of frontmatter.split("\n")) {
        const kv = line.match(/^(\w+):\s*(.+)$/);
        if (kv) {
          const key = kv[1].trim();
          let val = kv[2].trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          parsed[key] = val;
        }
      }

      return {
        slug: filename.replace(/\.(mdx|md)$/, ""),
        title: parsed.title || "Untitled",
        date: parsed.date || "",
        description: parsed.description || "",
        content,
      };
    })
    .filter(Boolean)
    .sort((a, b) => (b.date > a.date ? 1 : -1));
}

function generateRSS() {
  const posts = getAllPosts();
  const siteUrl = "https://casterwx.github.io";

  const items = posts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/blog/${post.slug}</guid>
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>CasterWx</title>
    <link>${siteUrl}</link>
    <description>Personal site of CasterWx</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  const outDir = path.join(__dirname, "..", "public");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "feed.xml"), rss);
  console.log(`RSS feed generated with ${posts.length} posts`);
}

generateRSS();
