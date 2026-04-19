export const metadata = {
  title: "关于",
  description: "Learn Codex 站点说明与内容更新原则。",
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-12 md:py-20">
      <div className="space-y-5">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">About</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
          为什么做 Learn Codex
        </h1>
        <p className="text-lg leading-8 text-slate-300">
          这个站点的目标不是停留在概念介绍，而是把中文开发者最需要的内容结构化整理出来：
          Codex 能做什么、怎么下任务、怎么排错、怎么把它真正接进日常开发流程。
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold text-white">内容原则</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            优先写可落地内容。每篇文章都围绕真实问题展开，而不是停留在抽象概念。
          </p>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold text-white">更新方式</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            先补齐高频场景，再逐步扩展到团队协作、复杂工程和专项实战案例。
          </p>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold text-white">内容方向</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            围绕教程、命令、工作流和实战案例持续扩展，优先覆盖真实使用场景。
          </p>
        </div>
      </section>
    </main>
  );
}
