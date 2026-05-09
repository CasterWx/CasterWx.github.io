import Link from "next/link";

export function TagBadge({ tag, active }: { tag: string; active?: boolean }) {
  return (
    <Link
      href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
      className={active ? 'pill pill-active' : 'pill'}
    >
      {tag}
    </Link>
  );
}
