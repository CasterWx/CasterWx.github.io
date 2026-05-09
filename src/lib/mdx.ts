export interface MDXFrontmatter {
  title: string;
  date?: string;
  description?: string;
  tags?: string[];
  featured?: boolean;
  coverImage?: string;
  url?: string;
  repo?: string;
}
