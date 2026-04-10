import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-start justify-center gap-6 px-6 py-20">
      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">404</p>
      <h1 className="text-4xl font-semibold text-white">这个页面不存在</h1>
      <p className="max-w-2xl text-lg leading-8 text-slate-300">
        你访问的路径没有找到。可以先回到教程列表，继续从入门内容开始。
      </p>
      <Link
        href="/docs"
        className="inline-flex rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
      >
        前往教程列表
      </Link>
    </main>
  );
}
