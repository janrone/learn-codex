import Link from "next/link";
import { GuideCard } from "@/components/guide-card";
import { hotRepos } from "@/lib/hot-data";
import { categories, getFeaturedGuides, guides } from "@/lib/site-data";

const metrics = [
  { value: "11", label: "核心教程" },
  { value: "5", label: "学习专题" },
  { value: "10", label: "实战案例" },
];

export default function Home() {
  const featuredGuides = getFeaturedGuides();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-6 py-12 md:py-20">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-sm text-orange-100">
            Codex 教程站
          </div>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              掌握 <span className="text-orange-300">Codex</span>，从第一条命令到真实工作流。
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              从入门到实战，系统掌握 Codex 的使用方法。
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
            >
              开始学习
            </Link>
            <Link
              href="/hot"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/8"
            >
              看热门仓库
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_80px_rgba(3,7,18,0.45)]">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">学习概览</p>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[24px] border border-white/10 bg-slate-950/40 p-5"
              >
                <p className="text-3xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
          >
            <h2 className="text-xl font-semibold text-white">{category.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{category.description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">必读内容</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">先读这几篇</h2>
          </div>
          <Link href="/docs" className="text-sm text-orange-200 transition hover:text-white">
            查看全部教程
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,155,83,0.16),rgba(255,255,255,0.03))] p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-orange-200">热门相关</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                新增长文：把 Codex 真正接进日常开发流程
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                这篇整理稿把 Codex 的任务下发、执行闭环、排错顺序和落地方法放到一篇里，适合直接照着接进你的真实项目。
              </p>
            </div>
            <Link
              href="/hot/codex-practical-flow"
              className="inline-flex items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
            >
              阅读热门相关
            </Link>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Hot Repos</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">OpenAI Codex 热门仓库</h2>
          </div>
          <Link href="/hot" className="text-sm text-orange-200 transition hover:text-white">
            查看完整榜单
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {hotRepos.slice(0, 3).map((repo) => (
            <article
              key={repo.name}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-1 text-orange-100">
                  {repo.type}
                </span>
                <span className="text-slate-300">{repo.stars}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white [overflow-wrap:anywhere]">
                {repo.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{repo.summary}</p>
              <Link
                href={repo.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center text-sm font-medium text-orange-200 transition hover:text-white"
              >
                打开仓库
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">学习路径</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            按顺序走，最容易快速建立稳定工作流
          </h2>
        </div>
        <ol className="grid gap-4 text-sm leading-7 text-slate-300">
          {guides.slice(0, 4).map((guide, index) => (
            <li
              key={guide.slug}
              className="rounded-[22px] border border-white/10 bg-slate-950/35 px-5 py-4"
            >
              <span className="mr-3 text-orange-200">0{index + 1}</span>
              <Link href={`/docs/${guide.slug}`} className="text-white transition hover:text-orange-200">
                {guide.title}
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
