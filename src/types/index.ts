export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  coverImage?: string;
  readingTime: number;
  featured: boolean;
  content: string;
  excerpt: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
  coverImage?: string;
  featured: boolean;
  content: string;
  excerpt: string;
}

export interface TagCount {
  tag: string;
  count: number;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
  social: {
    github?: string;
    twitter?: string;
    email?: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}
