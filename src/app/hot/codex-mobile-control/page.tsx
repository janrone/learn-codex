import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

const sections = [
  {
    title: "手机联动到底是什么",
    body: [
      "现在的 Codex 已经不只是在电脑前打开一个窗口。你可以在电脑上运行 Codex App 或 Codex CLI，然后用手机里的 ChatGPT App 查看状态、读终端输出、审核 diff、批准命令，甚至远程给它下新任务。",
      "关键点是：手机不是本地运行环境。真正读代码、改文件、跑命令的仍然是你的电脑、VPS、Mac mini 或其他工作站。手机更像一个随身控制器，让你不在电脑旁边时也能接住任务进度。",
      "这件事的意义很直接：Codex 从“坐在电脑前才能用的开发助手”，变成了“可以挂在工作站上持续跑的远程协作者”。你在路上看进度、在手机上批准安全命令、回家再做最终验收，流程会自然很多。",
    ],
  },
  {
    title: "最小准备：一台电脑，一个手机，同一个账号",
    body: [
      "电脑端先准备 Codex。Mac 或 Windows 可以安装 Codex App；如果你更习惯终端，也可以用 CLI：npm install -g @openai/codex。安装完成后，在真实项目目录里启动 Codex，让它能访问你的仓库和本地命令环境。",
      "手机端安装 ChatGPT App，iOS 和 Android 都可以。最重要的是：电脑和手机必须登录同一个 OpenAI 或 ChatGPT 账号，否则手机端看不到对应的 Codex 会话和任务状态。",
      "当你的 ChatGPT App 已经更新到支持 Codex 入口的版本后，手机里会出现 Codex 相关入口。进入后，你可以看到正在运行的任务、终端输出、代码改动和需要你确认的权限请求。",
    ],
  },
  {
    title: "手机上真正能做什么",
    body: [
      "第一类是观察：查看 Codex 是否还在运行、当前卡在哪一步、终端输出有没有报错、构建是否通过。对长时间任务来说，这比远程桌面轻很多。",
      "第二类是审核：看它改了哪些文件、diff 是否符合预期、有没有误动无关内容。你不一定要在手机上读完整代码，但至少可以判断这次改动是不是偏离了任务边界。",
      "第三类是授权：当 Codex 需要执行命令、访问资源或做有风险的操作时，手机端可以让你及时同意或拒绝。第四类是继续下任务：比如让它补一段文案、继续跑测试、整理失败原因，或者先暂停等待你回到电脑前复核。",
    ],
  },
  {
    title: "三种最常见的远程方案",
    body: [
      "第一种是家里电脑挂机。适合已经有 Windows 台式机或 Mac 的用户：电脑保持联网和供电，Codex 在项目目录里运行，手机负责查看和批准。优点是零额外硬件成本，缺点是网络、电源和系统休眠要设置好。",
      "第二种是低成本 Mac mini 工作站。适合长期用 Codex 做前端、Node、脚本和自动化任务的人。Mac mini 安静、省电、长期在线体验好，macOS 对 Codex App 的支持通常也更顺手。",
      "第三种是 VPS 加 SSH 加 Codex。适合后端、脚本、自动化和不依赖本地图形界面的项目。你可以用 Tailscale 组一个私有网络，再通过 SSH 进入 VPS 跑 Codex。它更像一台真正的云端 AI 开发工作站。",
    ],
  },
  {
    title: "推荐配置：先从家里电脑开始",
    body: [
      "如果你只是想体验“出门也能让 Codex 干活”，不建议一开始就买新设备。先用家里电脑跑通：安装 Codex，登录账号，打开一个低风险项目，手机端进入 Codex 看状态，并完成一次批准命令和查看 diff。",
      "跑通之后，再根据使用频率升级。如果你每天都要让它跑长任务，可以考虑 Mac mini 或固定工作站；如果任务主要在服务器里，可以考虑 VPS；如果你只是偶尔远程看一眼，家里电脑就够了。",
      "这套路线的好处是成本可控，而且你会先理解 Codex 的真实工作方式：任务边界、权限批准、diff 审核、构建验证，比单纯追硬件更重要。",
    ],
  },
  {
    title: "几个必须提前想清楚的注意点",
    body: [
      "第一是权限。手机上点同意很方便，但越方便越要看清楚命令要做什么。涉及删除、覆盖、部署、推送、安装依赖、访问生产资源时，不要只看一句摘要就批准。",
      "第二是电脑休眠。远程挂机的前提是主机真的在线。Windows 要检查电源和睡眠设置，Mac 要检查节能设置，VPS 则要确认 SSH 会话和后台进程不会轻易断掉。",
      "第三是项目边界。给 Codex 的任务要写清楚能改哪里、不能改哪里、验收方式是什么。远程协作时尤其不要只说“你继续优化一下”，否则手机上很难判断它到底有没有做对。",
    ],
  },
];

const setupSteps = [
  "电脑安装 Codex App，或用 npm install -g @openai/codex 安装 CLI。",
  "电脑和手机登录同一个 OpenAI 或 ChatGPT 账号。",
  "在电脑端打开真实项目，启动 Codex 并保持设备在线。",
  "手机打开 ChatGPT App，进入 Codex，查看任务状态和权限请求。",
  "从低风险任务开始，先验证查看输出、审核 diff、批准命令三件事。",
];

const useCases = [
  {
    title: "出门途中看任务进度",
    body: "构建、测试、批量整理文档这类任务可以在电脑上跑，手机负责看输出和决定下一步。",
  },
  {
    title: "远程批准关键命令",
    body: "当 Codex 需要执行安装、构建、测试或访问外部资源时，你可以及时审核，而不是让任务一直卡着。",
  },
  {
    title: "把旧电脑变成工作站",
    body: "一台长期在线的家用电脑，配合手机端控制，就能变成低成本 Codex 远程开发节点。",
  },
];

export const metadata: Metadata = {
  title: "手机远程控制 Codex：把电脑变成 AI 开发工作站",
  description:
    "介绍 Codex 手机联动的使用方式、准备步骤、远程控制能力、家里电脑挂机、VPS 和 Mac mini 工作站方案。",
  openGraph: {
    title: "手机远程控制 Codex：把电脑变成 AI 开发工作站",
    description:
      "用手机查看 Codex 状态、审核 diff、批准命令，把电脑、VPS 或 Mac mini 变成远程 AI 开发工作站。",
    url: `${siteConfig.url}/hot/codex-mobile-control`,
    images: [`${siteConfig.url}/images/codex-mobile-hero.svg`],
  },
};

export default function CodexMobileControlPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-12 md:py-20">
      <Link href="/hot" className="text-sm text-orange-200 transition hover:text-white">
        返回热门相关
      </Link>

      <section className="grid gap-8 rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_80px_rgba(4,10,24,0.34)] md:grid-cols-[1.08fr_0.92fr] md:p-8">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-sm text-orange-100">
            远程工作站
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              手机远程控制 Codex，把电脑变成 AI 开发工作站
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Codex 手机联动不是把代码搬到手机上跑，而是让手机成为控制器。真正执行任务的仍然是电脑、VPS
              或 Mac mini，手机负责查看状态、审核 diff、批准命令和继续下任务。
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2">
              手机联动
            </span>
            <span className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2">
              远程审核
            </span>
            <span className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2">
              挂机开发
            </span>
            <span className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2">
              VPS / Mac mini
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/40">
          <Image
            src="/images/codex-mobile-hero.svg"
            alt="手机远程控制 Codex 工作站示意图"
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
                  <span>配置指南</span>
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
              src="/images/chatgpt-codex-mobile-entry.jpg"
              alt="ChatGPT 手机 App 中的 Codex 入口示例"
              width={1170}
              height={1653}
              className="mx-auto max-h-[560px] w-auto rounded-[24px] border border-white/10 bg-white object-contain"
            />
            <div className="px-2 pb-2 pt-4">
              <h3 className="text-xl font-semibold text-white">手机端 Codex 入口</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                新版 ChatGPT App 左侧入口里可以看到 Codex。进入后，就可以查看运行状态、审核输出和继续远程下任务。
              </p>
            </div>
          </section>

          <section className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-4">
            <Image
              src="/images/codex-mobile-setup.svg"
              alt="Codex 手机联动配置流程图"
              width={900}
              height={680}
              className="w-full rounded-[24px] border border-white/10"
            />
            <div className="px-2 pb-2 pt-4">
              <h3 className="text-xl font-semibold text-white">五步跑通手机联动</h3>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {setupSteps.map((step, index) => (
                  <p
                    key={step}
                    className="rounded-[18px] border border-white/10 bg-slate-950/35 px-4 py-3"
                  >
                    <span className="mr-2 text-orange-200">0{index + 1}</span>
                    {step}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-4">
            <Image
              src="/images/codex-remote-station.svg"
              alt="家里电脑、Mac mini 和 VPS 三种 Codex 远程工作站方案"
              width={900}
              height={680}
              className="w-full rounded-[24px] border border-white/10"
            />
            <div className="px-2 pb-2 pt-4">
              <h3 className="text-xl font-semibold text-white">三种工作站选择</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                家里电脑适合低成本起步，Mac mini 适合长期在线，VPS 适合服务器侧和自动化任务。
              </p>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(88,166,255,0.13),rgba(255,255,255,0.03))] p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-sky-200">
              适合场景
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              这套能力最值得用在这些地方
            </h3>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-200">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-white/10 bg-slate-950/35 px-4 py-3"
                >
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-slate-300">{item.body}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
