import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

const sections = [
  {
    title: "先把 Codex 当执行系统，不是聊天框",
    body: [
      "很多人第一次用 Codex，会先把它当成一个更会写代码的对话助手。这个理解不算错，但只停在这里，你拿到的大多只是建议，不是稳定结果。",
      "Codex 真正有价值的地方，在于它可以先读仓库、再动文件、再跑验证，把一个开发任务从描述推进到可检查的结果。你要做的不是不断追问，而是把任务边界、约束和验收方式说清楚。",
      "一旦你把它放进真实项目里，Codex 更像一套可执行的开发流：读上下文、选择路径、实施修改、回报风险、补做验证。它不是替你做决定，而是替你推进执行。",
    ],
  },
  {
    title: "任务不要写成“帮我优化一下”",
    body: [
      "Codex 最怕的不是复杂任务，而是模糊任务。比如“帮我改好首页”“把体验做高级一点”“顺手优化一下结构”，这种指令看起来省事，实际上等于把最关键的判断全部外包给模型。",
      "高质量任务至少要包含四个元素：目标、范围、限制、验收。目标说清楚你想要什么；范围限定它改哪些文件或模块；限制告诉它什么不能动；验收则定义最终算不算完成。",
      "例如你可以写：只调整首页 Hero 和首屏信息结构，不新增依赖，不改后端接口，移动端要正常显示，完成后跑构建并汇报风险。这样的任务，返回结果会稳定很多。",
    ],
  },
  {
    title: "一条实用工作流：先读代码，再落地，再验收",
    body: [
      "最稳的使用方式不是一口气把所有要求塞进去，而是分成三段。第一段让 Codex 先读现有实现，确认相关文件、组件关系和可能影响范围。第二段再让它直接改。第三段要求它做验证，并明确告诉你哪些地方还没法确认。",
      "这个顺序的价值在于，很多返工不是因为模型不会写，而是因为它一开始看错了上下文。先读代码，相当于先把路线踩实，后面的实现和验证才不会发散。",
      "如果任务比较长，可以中途补充新的约束，但不要每轮都重写一遍需求。你只需要补足新增信息，比如保留现有视觉风格、不要改接口命名、这个页面还要兼容旧数据。",
    ],
  },
  {
    title: "排错时先看四件事：环境、权限、上下文、验证",
    body: [
      "很多人觉得 Codex 出错，是因为模型不稳定。实际项目里，更常见的问题是环境没对齐。比如工作目录不对、可写范围不够、依赖没装全、构建命令跟仓库实际脚本不一致，这些都会让结果看起来像“模型乱来”。",
      "第二类高频问题是权限。能不能联网、能不能写某些目录、能不能启动本地服务，都会直接影响执行质量。权限受限时，最好的做法不是让它硬猜，而是先把可执行边界厘清。",
      "第三类问题是上下文污染。对话跑太长、任务切换太频繁、需求几次反复覆盖，都会让执行路径变形。第四类问题是没做验证。没有构建、没有测试、没有预览，只能说明它改了，不代表它改对了。",
    ],
  },
  {
    title: "把 Codex 接进日常开发，不靠神奇 prompt",
    body: [
      "真正能长期跑起来的方式，通常不是一条万能提示词，而是几个固定动作。开始任务前先给边界；实现前先确认上下文；改完之后先看 diff；交付之前一定做一次构建、测试或本地预览。",
      "如果你把这几个动作固定下来，Codex 的稳定性会明显提高。它不再只是帮你补代码，而是进入你的日常流程：接任务、拆任务、改任务、查风险、做收尾。",
      "对中文开发者来说，最重要的也不是把国外讨论原样照搬，而是把真正能落地的部分整理出来：Codex 能做什么、什么场景最合适、任务怎么下、问题怎么排、怎样和你现有开发节奏接上。这才是工具真正开始产生复利的地方。",
    ],
  },
];

const actionChecklist = [
  "开始前先说明目标、范围、限制和验收标准。",
  "先让 Codex 读代码确认路径，再进入修改阶段。",
  "改完先看 diff，再跑 build、test 或本地预览。",
  "遇到异常先排环境、权限、上下文，不要上来就重做。",
];

export const metadata: Metadata = {
  title: "热门相关：把 Codex 真正接进日常开发流程",
  description:
    "一篇面向中文开发者的 Codex 实战整理稿，聚焦任务下发、工作流设计、常见排错和落地方法。",
  openGraph: {
    title: "热门相关：把 Codex 真正接进日常开发流程",
    description:
      "把 Codex 从概念介绍，推进到真实开发流程里的方法整理。",
    url: `${siteConfig.url}/hot/codex-practical-flow`,
    images: [`${siteConfig.url}/images/codex-article-hero.svg`],
  },
};

export default function CodexPracticalFlowPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-12 md:py-20">
      <Link href="/hot" className="text-sm text-orange-200 transition hover:text-white">
        返回热门相关
      </Link>

      <section className="grid gap-8 rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_80px_rgba(4,10,24,0.34)] md:grid-cols-[1.15fr_0.85fr] md:p-8">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-sm text-orange-100">
            热门相关
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              把 Codex 真正接进日常开发流程
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              这不是一篇概念介绍，而是一份可直接用于真实项目的整理稿：Codex
              适合做什么、任务怎么下、问题怎么排、怎样把它接进你每天都在跑的开发流程。
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2">
              任务下发
            </span>
            <span className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2">
              工作流设计
            </span>
            <span className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2">
              排错思路
            </span>
            <span className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2">
              日常接入
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/40">
          <Image
            src="/images/codex-article-hero.svg"
            alt="Codex 实战工作流封面图"
            width={960}
            height={760}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.82fr]">
        <article className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={section.title} className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-orange-200">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-orange-300/30 bg-orange-400/10">
                    0{index + 1}
                  </span>
                  <span>核心整理</span>
                </div>
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                  {section.title}
                </h2>
                <div className="space-y-4 text-base leading-8 text-slate-300">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className="space-y-6">
          <section className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-4">
            <Image
              src="/images/codex-task-brief.svg"
              alt="Codex 任务下发模板示意图"
              width={900}
              height={680}
              className="w-full rounded-[24px] border border-white/10"
            />
            <div className="px-2 pb-2 pt-4">
              <h3 className="text-xl font-semibold text-white">任务描述模板</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                用目标、范围、限制、验收四块信息组织任务，比堆一串关键词有效得多。
              </p>
            </div>
          </section>

          <section className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-4">
            <Image
              src="/images/codex-workflow-loop.svg"
              alt="Codex 读代码、改代码、做验证的循环图"
              width={900}
              height={680}
              className="w-full rounded-[24px] border border-white/10"
            />
            <div className="px-2 pb-2 pt-4">
              <h3 className="text-xl font-semibold text-white">执行闭环</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                先读、再改、后验收，是比“一步到位”更稳的项目内工作方式。
              </p>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,163,88,0.12),rgba(255,255,255,0.03))] p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-orange-200">
              快速检查表
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              把 Codex 用稳的四个固定动作
            </h3>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-200">
              {actionChecklist.map((item) => (
                <p
                  key={item}
                  className="rounded-[20px] border border-white/10 bg-slate-950/35 px-4 py-3"
                >
                  {item}
                </p>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
