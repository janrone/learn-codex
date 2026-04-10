import Link from "next/link";
import type { Guide } from "@/lib/site-data";

type GuideCardProps = {
  guide: Guide;
};

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_60px_rgba(4,10,24,0.28)] transition hover:-translate-y-1 hover:border-orange-300/40 hover:bg-white/[0.06]">
      <div className="mb-4 flex items-center gap-3 text-sm text-slate-300">
        <span className="rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-1 text-orange-100">
          {guide.category}
        </span>
        <span>{guide.readingTime}</span>
      </div>
      <h3 className="text-xl font-semibold leading-8 text-white [overflow-wrap:anywhere]">
        {guide.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-300 [overflow-wrap:anywhere]">
        {guide.description}
      </p>
      <Link
        href={`/docs/${guide.slug}`}
        className="mt-6 inline-flex items-center text-sm font-medium text-orange-200 transition hover:text-white"
      >
        阅读教程
      </Link>
    </article>
  );
}
