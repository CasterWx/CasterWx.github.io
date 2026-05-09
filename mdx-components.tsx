import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1 className="text-3xl font-bold tracking-tight mt-10 mb-4" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-3 border-b pb-1" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-xl font-semibold mt-6 mb-2" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="leading-relaxed mb-4" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1" {...props}>
        {children}
      </ol>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600 dark:text-gray-400" {...props}>
        {children}
      </blockquote>
    ),
    code: ({ children, ...props }) => (
      <code
        className="bg-gray-100 dark:bg-gray-800 rounded px-1.5 py-0.5 text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="bg-gray-900 dark:bg-gray-950 text-gray-100 rounded-lg p-4 overflow-x-auto my-4 text-sm leading-relaxed"
        {...props}
      >
        {children}
      </pre>
    ),
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="text-blue-600 dark:text-blue-400 underline decoration-blue-400/50 hover:decoration-blue-600"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    ),
    img: ({ alt, src, ...props }) => (
      <img
        src={src}
        alt={alt ?? ""}
        className="rounded-lg my-6 max-w-full"
        loading="lazy"
        {...props}
      />
    ),
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left font-semibold bg-gray-50 dark:bg-gray-900" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2" {...props}>
        {children}
      </td>
    ),
    ...components,
  };
}
