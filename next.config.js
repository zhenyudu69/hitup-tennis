/** @type {import('next').NextConfig} */
const nextConfig = {
  // 让 Next.js 识别 .md / .mdx 页面
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // （可选）使用 Rust MDX 编译器
  experimental: { mdxRs: true },
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX(nextConfig);
