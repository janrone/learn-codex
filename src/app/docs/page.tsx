import { GuideCard } from "@/components/guide-card";
import { categories, guides } from "@/lib/site-data";

export const metadata = {
  title: "教程",
  description: "Learn Codex 教程目录，覆盖入门、基础使用、工作流、实战案例和常见问题。",
};

export default function DocsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-12 md:py-20">
      <section className="max-w-3xl space-y-5">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Docs</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
          从第一篇入门，到真正接手项目任务。
        </h1>
        <p className="text-lg leading-8 text-slate-300">
          这里收录 Learn Codex 的全部教程内容，覆盖入门、命令、工作流、实战案例和常见问题。
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
          >
            <h2 className="text-lg font-semibold text-white">{category.title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">{category.description}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </section>
    </main>
  );
}
