import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains: ['images.unsplash.com'],
    unoptimized:true
  },
  // output: 'export',   // 设置导出为静态文件
  distDir: 'rmc-aceternity-demo',    // 输出目录为 dist
  basePath: '/rmc-aceternity-demo', // 设置基础路径，所有静态资源都将在该路径下
};

export default nextConfig;
