import type { Metadata } from "next";
import Link from "next/link";
import { hotRepos } from "@/lib/hot-data";

export const metadata: Metadata = {
  title: "OpenAI Codex 热门仓库",
  description:
    "整理 GitHub 上值得关注的 OpenAI Codex 官方与社区热门仓库，方便快速筛选和查看。",
};

const groups = ["官方核心", "热门工具", "Skills / 插件", "生态平台"] as const;

export default function HotPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-12 md:py-20">
      <section className="max-w-3xl space-y-5">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Hot Repos</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
          OpenAI Codex 热门仓库
        </h1>
        <p className="text-lg leading-8 text-slate-300">
          这里整理的是和 Codex 直接相关、值得关注的 GitHub 热门项目。
          不只保留 OpenAI 官方仓库，也补充了高质量社区工具、skills 和生态平台。
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <p className="text-3xl font-semibold text-white">{hotRepos.length}</p>
          <p className="mt-2 text-sm text-slate-300">精选仓库</p>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <p className="text-3xl font-semibold text-white">4</p>
          <p className="mt-2 text-sm text-slate-300">分类视角</p>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <p className="text-3xl font-semibold text-white">GitHub</p>
          <p className="mt-2 text-sm text-slate-300">按热门与相关性整理</p>
        </div>
      </section>

      <section className="grid gap-8">
        {groups.map((group) => {
          const items = hotRepos.filter((repo) => repo.type === group);

          return (
            <div key={group} className="space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-white">{group}</h2>
                <p className="mt-2 text-sm text-slate-300">
                  {group === "官方核心" && "优先看的官方仓库，适合作为入口和基准。"}
                  {group === "热门工具" && "更偏实战和效率提升，适合已经开始高频使用 Codex 的用户。"}
                  {group === "Skills / 插件" && "适合补能力、找模板、扩工作流。"}
                  {group === "生态平台" && "更适合需要图形界面、协作入口或多模型组合的场景。"}
                </p>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {items.map((repo) => (
                  <article
                    key={repo.name}
                    className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_60px_rgba(4,10,24,0.28)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-1 text-sm text-orange-100">
                        {repo.type}
                      </span>
                      <span className="text-sm text-slate-300">{repo.stars}</span>
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
                      查看仓库
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
