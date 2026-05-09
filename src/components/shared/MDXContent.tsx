import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { mdxComponents as baseComponents } from "./MDXComponents";
import type { MDXComponents } from "mdx/types";

interface MDXContentProps {
  source: string;
  components?: MDXComponents;
}

export async function MDXContent({ source, components = {} }: MDXContentProps) {
  const mergedComponents = { ...baseComponents, ...components };

  const { content } = await compileMDX({
    source,
    components: mergedComponents as Record<string, React.ComponentType<unknown>>,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark",
              keepBackground: true,
            },
          ],
        ],
      },
    },
  });

  return <div className="prose-custom">{content}</div>;
}
