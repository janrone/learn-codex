# Learn Codex

面向中文开发者的 Codex 使用教程站，技术栈为 `Next.js App Router + TypeScript + Tailwind CSS`，适合直接部署到 Vercel。

## 已实现

- 首页：品牌介绍、学习路径、核心教程入口
- 教程列表页：首批 8 篇中文教程
- 教程详情页：静态路由生成与基础 SEO
- 关于页：站点定位与更新原则
- `sitemap.xml` 与 `robots.txt`

## 本地启动

```bash
npm install
copy .env.example .env.local
npm run dev
```

默认访问 `http://localhost:3000`。

## 部署到 Vercel

1. 把仓库推到 GitHub
2. 在 Vercel 导入该仓库
3. 构建命令保持默认 `next build`
4. 输出目录保持默认
5. 在 Vercel 环境变量里设置 `NEXT_PUBLIC_SITE_URL`
6. 绑定你的正式域名

## 环境变量

- `NEXT_PUBLIC_SITE_URL`
  例子：`https://your-domain.com`

项目会优先读取环境变量生成 metadata、sitemap 和 canonical URL，不需要每次手改代码。
