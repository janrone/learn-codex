export type GuideSection = {
  title: string;
  body: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: "入门" | "基础" | "工作流" | "实战" | "FAQ";
  readingTime: string;
  publishedAt: string;
  featured?: boolean;
  sections: GuideSection[];
};

export const siteConfig = {
  name: "Learn Codex",
  description: "面向中文开发者的 Codex 使用教程站，从入门到实战，帮助你真正把 Codex 用起来。",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://learncodex.dev",
  nav: [
    { href: "/", label: "首页" },
    { href: "/docs", label: "教程" },
    { href: "/about", label: "关于" },
    { href: "#", label: "开通 Codex", external: true },
  ],
};

export const guides: Guide[] = [
  {
    slug: "what-is-codex",
    title: "Codex 是什么，适合哪些开发者使用",
    description: "用中文讲清 Codex 的定位、适用场景，以及它和普通聊天产品的区别。",
    category: "入门",
    readingTime: "5 分钟",
    publishedAt: "2026-04-10",
    featured: true,
    sections: [
      {
        title: "这篇解决什么问题",
        body: [
          "很多人第一次接触 Codex，会把它理解成更会写代码的聊天机器人。但真正有价值的部分，是它能在明确约束下持续推进任务，从读代码、改文件、跑命令到给出验证结论，形成一条完整链路。",
          "这篇文章会先把 Codex 的能力边界讲清楚，帮助你判断它是否适合你的开发方式。",
        ],
      },
      {
        title: "适合哪些场景",
        body: [
          "适合高频重复型开发工作，例如搭脚手架、补页面、改接口、写说明文档、做代码审查和排查回归问题。",
          "也适合你对项目目标明确，但不想自己处理每个细节的时候。你给出约束，Codex 负责执行和反馈。",
        ],
      },
      {
        title: "不适合哪些场景",
        body: [
          "如果你的需求非常模糊，只停留在我想做个很酷的产品，这时 Codex 只能给方向，很难一次交付高质量结果。",
          "对于高风险决策，例如生产数据迁移、支付逻辑改造、合规策略判断，仍然需要人工复核。",
        ],
      },
      {
        title: "和普通聊天式 AI 的区别",
        body: [
          "普通聊天产品更擅长解释和讨论，Codex 更偏执行。它会先看代码，再决定改哪里、如何验证，以及哪些风险需要明确告诉你。",
          "如果你要的是一条能落地的开发链路，而不是一段建议文本，那么 Codex 更合适。",
        ],
      },
    ],
  },
  {
    slug: "getting-started",
    title: "第一次使用 Codex：从零开始跑通工作流",
    description: "从进入项目、描述任务、查看修改到验证结果，完整走一遍最小使用闭环。",
    category: "入门",
    readingTime: "7 分钟",
    publishedAt: "2026-04-10",
    featured: true,
    sections: [
      {
        title: "准备工作",
        body: [
          "先准备一个真实项目，而不是空目录。Codex 在有上下文的仓库里表现更稳定，因为它能先读代码再执行。",
          "进入项目后，先描述目标和约束，例如要改哪个页面、保持什么技术栈、是否允许新增依赖。",
        ],
      },
      {
        title: "推荐的第一条任务",
        body: [
          "最适合起步的是一个边界清晰的小任务，例如新增一个按钮、修一个表单校验、补一个空状态页面。",
          "这样你能快速建立对 Codex 工作方式的预期，知道它会先查什么、改什么、怎么回报结果。",
        ],
      },
      {
        title: "标准工作流",
        body: [
          "第一步是让它先读代码并确认实现路径。第二步让它直接落地。第三步要求它运行构建或测试并汇报结果。",
          "如果中途发现上下文不足，再补充约束，而不是一次把所有想法全塞进去。",
        ],
      },
      {
        title: "常见误区",
        body: [
          "不要只说帮我优化一下页面。这类指令太宽泛，结果容易发散。",
          "不要忽略验证环节。没有构建、测试或手工检查的修改，只能算半完成。",
        ],
      },
    ],
  },
  {
    slug: "prompting-for-code",
    title: "怎样给 Codex 下任务，才能真正改出可用代码",
    description: "把目标、范围、限制条件说清楚，让 Codex 输出更接近可合并的结果。",
    category: "基础",
    readingTime: "6 分钟",
    publishedAt: "2026-04-10",
    featured: true,
    sections: [
      {
        title: "任务描述的四个要素",
        body: [
          "一个好任务至少要包含目标、范围、限制和验收标准。目标说明你要什么，范围决定它看哪些文件，限制约束它不要乱动，验收标准保证结果可判断。",
          "例如你可以明确写：只修改首页 hero 区，不新增依赖，移动端也要可用，最后请跑 lint。",
        ],
      },
      {
        title: "给出上下文，而不是堆关键词",
        body: [
          "对 Codex 来说，最有价值的信息不是流行词，而是现有项目怎么组织、你更偏向哪种实现方式、哪些文件不能碰。",
          "上下文越明确，返工越少。",
        ],
      },
      {
        title: "要求它解释权衡",
        body: [
          "如果任务存在多种实现路径，可以要求 Codex 先说明选型依据，再开始修改。",
          "这样你能更早发现不符合预期的实现方向，而不是等代码写完才重来。",
        ],
      },
      {
        title: "验收标准示例",
        body: [
          "页面类任务可以要求桌面端和移动端都正常显示。",
          "工程类任务可以要求构建通过、类型检查通过，或者说明无法验证的部分。",
        ],
      },
    ],
  },
  {
    slug: "codex-with-nextjs",
    title: "在 Next.js 项目里如何正确使用 Codex",
    description: "围绕 App Router 项目讲清页面开发、组件拆分、SEO 和部署协作方式。",
    category: "基础",
    readingTime: "6 分钟",
    publishedAt: "2026-04-10",
    sections: [
      {
        title: "先让它理解目录结构",
        body: [
          "Next.js 项目通常包含路由、组件、内容数据和静态资源。开始前，先让 Codex 扫一遍目录和关键文件。",
          "它理解目录结构后，才更容易按你现有模式扩展，而不是引入新的组织方式。",
        ],
      },
      {
        title: "页面任务的最佳切法",
        body: [
          "把任务切成页面层、组件层和数据层，会比一句做个完整首页更容易控制质量。",
          "例如先让它做布局骨架，再补内容模块，最后处理 metadata 和 sitemap。",
        ],
      },
      {
        title: "和 Vercel 部署配合",
        body: [
          "面向 Vercel 的站点，最好在本地就把 build、metadata 和路由生成处理干净，减少上线后才暴露的问题。",
          "Codex 很适合帮你检查这类构建前置条件，例如静态参数、链接结构和环境变量引用。",
        ],
      },
    ],
  },
  {
    slug: "code-review-workflow",
    title: "用 Codex 做代码审查：重点看什么",
    description: "把 Codex 当成审查助手，而不是简单说一句帮我 review。",
    category: "工作流",
    readingTime: "5 分钟",
    publishedAt: "2026-04-10",
    sections: [
      {
        title: "给审查范围定边界",
        body: [
          "最有效的方式是告诉 Codex 要 review 哪个提交、哪些文件、重点关注什么风险，例如回归、边界条件和测试缺失。",
          "范围清晰后，它的输出会更像一份可以直接处理的问题清单。",
        ],
      },
      {
        title: "优先看行为变化",
        body: [
          "代码审查不应先看风格，而要先看行为是否被意外改变。",
          "例如一个看似无害的重构，是否影响到 loading、错误提示、缓存失效或权限判断。",
        ],
      },
      {
        title: "让它指出缺失的验证",
        body: [
          "好的 review 不只是指出哪里可能有 bug，也要指出哪里缺测试、缺手工验证步骤，或者需要补监控。",
          "这会让审查结果更接近真实研发流程。",
        ],
      },
    ],
  },
  {
    slug: "debugging-with-codex",
    title: "让 Codex 帮你修一个真实 bug 的完整流程",
    description: "从复现、定位到修复和验证，形成可复制的问题排查方法。",
    category: "实战",
    readingTime: "8 分钟",
    publishedAt: "2026-04-10",
    featured: true,
    sections: [
      {
        title: "先描述现象，不要急着给结论",
        body: [
          "排查 bug 时，先告诉 Codex 现象、复现路径、预期行为和实际行为。不要一开始就说肯定是接口问题，这会把排查方向锁死。",
          "真实问题往往跨组件、状态和接口边界，先留出搜索空间更有效。",
        ],
      },
      {
        title: "要求它先定位，再修改",
        body: [
          "你可以明确要求先分析可能原因并指出相关文件，再开始改代码。",
          "这样一旦判断错了，你只损失分析时间，不会先引入新的回归。",
        ],
      },
      {
        title: "修完以后必须验证",
        body: [
          "验证至少要覆盖问题复现路径；如果能补自动化测试更好。",
          "如果测试暂时补不上，也要让 Codex 列出手工回归清单。",
        ],
      },
    ],
  },
  {
    slug: "common-errors",
    title: "Codex 常见错误与排查方法",
    description: "整理最常见的任务失败原因，帮助你快速判断是提示问题还是工程问题。",
    category: "FAQ",
    readingTime: "6 分钟",
    publishedAt: "2026-04-10",
    sections: [
      {
        title: "问题一：它只分析，不动代码",
        body: [
          "这通常是因为你的需求更像讨论题，而不是执行题。把指令改成请直接修改文件并说明改动，会更容易进入执行状态。",
          "另外也要避免前后矛盾的限制，比如要求直接落地，又要求不要改任何现有文件。",
        ],
      },
      {
        title: "问题二：修改范围超出预期",
        body: [
          "解决办法是明确写只允许修改哪些路径，以及不允许改动哪些模块。",
          "对于大型仓库，给出文件边界几乎是必须的。",
        ],
      },
      {
        title: "问题三：结果不稳定",
        body: [
          "多数情况下不是模型随机，而是任务定义不充分。",
          "当目标、上下文和验收标准都明确后，结果会稳定很多。",
        ],
      },
    ],
  },
  {
    slug: "best-practices",
    title: "Codex 使用最佳实践：把返工率降下来",
    description: "面向长期使用者，总结最实用的协作习惯和项目规范。",
    category: "工作流",
    readingTime: "7 分钟",
    publishedAt: "2026-04-10",
    sections: [
      {
        title: "从小任务建立信任",
        body: [
          "不要一上来就把整个重构交给 Codex。先从单页面、单接口、单 bug 这类小任务开始，让它逐步适应你的项目风格。",
          "这样更容易建立稳定的协作习惯。",
        ],
      },
      {
        title: "先约束，再授权",
        body: [
          "明确技术栈、目录边界、依赖策略和验证方式之后，再让 Codex 自主执行。",
          "没有约束的授权，往往会放大返工成本。",
        ],
      },
      {
        title: "保留可追踪的变更记录",
        body: [
          "每次重要修改都要求它总结改了什么、为什么这么改、验证做到了哪一步。",
          "这不仅方便你复核，也方便后续沉淀为团队规范。",
        ],
      },
    ],
  },
];

export const categories = [
  {
    slug: "getting-started",
    title: "新手入门",
    description: "先搞懂 Codex 能做什么，再跑通第一条完整工作流。",
  },
  {
    slug: "basics",
    title: "基础使用",
    description: "学习如何描述任务、约束范围和拿到可落地结果。",
  },
  {
    slug: "workflows",
    title: "工作流",
    description: "围绕 review、协作和长期使用建立稳定节奏。",
  },
  {
    slug: "examples",
    title: "实战案例",
    description: "通过真实问题和真实任务，理解 Codex 的执行方式。",
  },
  {
    slug: "faq",
    title: "常见问题",
    description: "快速定位失败原因，判断下一步该改提示还是改工程。",
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getFeaturedGuides() {
  return guides.filter((guide) => guide.featured);
}

export function getGuideIndex(slug: string) {
  return guides.findIndex((guide) => guide.slug === slug);
}

export function getAdjacentGuides(slug: string) {
  const currentIndex = getGuideIndex(slug);

  if (currentIndex === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: currentIndex > 0 ? guides[currentIndex - 1] : undefined,
    next: currentIndex < guides.length - 1 ? guides[currentIndex + 1] : undefined,
  };
}

export function getRelatedGuides(slug: string, category: Guide["category"]) {
  return guides
    .filter((guide) => guide.slug !== slug && guide.category === category)
    .slice(0, 3);
}
