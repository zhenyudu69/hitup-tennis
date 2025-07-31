/** @type {import('tailwindcss').Config} */
module.exports = {
  // 让 Tailwind 扫描 MD / MDX 文件
  content: [
    "./app/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},          // 这里可自定义颜色、字体
  },
  plugins: [
    require("@tailwindcss/typography"), // 排版插件
  ],
};
