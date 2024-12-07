import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

    // Note: Using the Rust compiler means we cannot use
    // rehype or remark plugins. For my app, this is fine.
    experimental: {
        mdxRs: false,
    },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});

export default withMDX(nextConfig);
