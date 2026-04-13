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
    slug: "most-useful-slash-commands",
    title: "Codex 常用交互命令：新手最该先掌握的 8 个",
    description: "如果你不想一开始就背完整套命令，这篇先带你掌握 Codex CLI 最常用、最值得先记住的 8 个 slash commands。",
    category: "入门",
    readingTime: "8 分钟",
    publishedAt: "2026-04-11",
    featured: true,
    sections: [
      {
        title: "为什么先学这 8 个就够了",
        body: [
          "Codex CLI 的交互命令并不少，如果第一次接触就想把全部命令背下来，学习成本会很高，而且大多数命令你短期内并不会高频使用。",
          "更高效的方式，是先掌握最常见的一条工作主线：选模型、调速度、设权限、看状态、看改动、做审查、压缩上下文、切新任务。这 8 个命令几乎覆盖了新手最常见的真实使用场景。",
        ],
      },
      {
        title: "第一组：/model 和 /fast",
        body: [
          "/model 用来切换当前会话使用的模型，是最基础的起手命令之一。你准备开始一个任务前，先确认模型，后面的表现才更稳定。",
          "/fast 用来切换 GPT-5.4 的 Fast mode，适合你更在意速度的时候。简单任务、快速验证、小范围修改，通常都可以考虑打开；复杂分析或大重构时，再评估是否关闭。",
          "如果你只记一句话，那就是：先用 /model 定档位，再用 /fast 决定速度倾向。",
        ],
      },
      {
        title: "第二组：/permissions 和 /status",
        body: [
          "/permissions 用来调整 Codex 在当前会话中的自动执行权限。它决定哪些事情可以直接做，哪些事情需要你确认。",
          "/status 用来查看当前模型、权限策略、可写目录、上下文占用等关键信息。你怀疑设置不对时，第一反应应该是先看 /status，而不是盲猜。",
          "这两个命令的组合很实用：一个负责改策略，一个负责验证策略有没有真的生效。",
        ],
      },
      {
        title: "第三组：/diff 和 /review",
        body: [
          "/diff 用来查看当前代码改动，是你确认 Codex 到底改了什么的最快方式。不要等到 git commit 时才第一次看 diff。",
          "/review 用来让 Codex 回头审查当前 working tree，更像一个收尾检查动作。它适合在一段实现完成之后使用，看看有没有明显风险、行为变化或缺测试的问题。",
          "如果你希望 Codex 真正像一个开发助手，而不是只会生成代码，/diff 和 /review 一定要养成习惯。",
        ],
      },
      {
        title: "第四组：/compact 和 /new",
        body: [
          "/compact 用来压缩长对话，避免上下文越来越长、越来越乱。任务跑久了以后，这个命令会非常重要。",
          "/new 用来在同一个 CLI 会话里开启一个全新的对话，适合你切换任务但不想退出 Codex。",
          "前者是整理当前上下文，后者是开始一个新上下文。理解这两个动作，你会更容易把会话管理干净。",
        ],
      },
      {
        title: "最推荐的新手使用顺序",
        body: [
          "一个最常见的使用顺序是：先 /model，必要时再 /fast，然后用 /permissions 调权限，用 /status 确认环境，任务完成后看 /diff，再跑 /review。如果对话太长，就用 /compact；如果任务切换，就用 /new。",
          "你不需要每次都机械地把这些命令全部走一遍，但只要记住这条主线，Codex 的使用体验会稳定很多。",
        ],
      },
      {
        title: "常见误区",
        body: [
          "不要把 /review 当成自动修复按钮。它的价值首先是发现问题，而不是替你无脑重写。",
          "不要觉得 /status 可有可无。很多所谓 Codex 出问题，最后其实是模型、权限或路径范围和你想象的不一样。",
          "不要把 /new 和 /clear 混成一个命令。/new 是新开对话，/clear 则是连终端显示一起清掉。",
        ],
      },
      {
        title: "学完这篇之后再看什么",
        body: [
          "如果你已经理解了这 8 个高频命令，下一步就很适合去看完整命令清单，把 /mcp、/apps、/agent、/debug-config、/sandbox-add-read-dir 这类低频但重要的命令补齐。",
          "换句话说，这篇是上手版，完整清单那篇才是工具箱全景图。最适合接着读的是《Codex Slash Commands 完整清单：所有内置交互命令详解》。",
        ],
      },
    ],
  },
  {
    slug: "built-in-commands",
    title: "Codex Slash Commands 完整清单：所有内置交互命令详解",
    description: "完整梳理 Codex CLI 内置 slash commands，包括 /model、/permissions、/fast、/status、/review、/mcp、/apps、/agent 等命令的作用、场景和差异。",
    category: "基础",
    readingTime: "15 分钟",
    publishedAt: "2026-04-11",
    featured: true,
    sections: [
      {
        title: "这篇文章解决什么问题",
        body: [
          "很多人在使用 Codex CLI 时，会看到一堆像 /model、/permissions、/status、/review 这样的交互命令，但并不清楚它们分别控制什么，会不会影响当前会话，什么时候该用，什么时候不该乱用。",
          "这篇文章按官方内置 slash commands 的完整范围来讲，不再泛泛而谈工具能力，而是专门解释你在 Codex 对话框里输入斜杠命令之后，实际会发生什么。",
          "如果你还是第一次接触这套命令，建议先看《Codex 常用交互命令：新手最该先掌握的 8 个》，再回来读完整清单，会轻松很多。",
        ],
      },
      {
        title: "先理解一个原则：这些是交互命令，不是 shell 命令",
        body: [
          "像 /model、/status 这样的内容，是 Codex CLI 自己提供的交互命令。它们不是你在终端里执行的系统命令，而是用来控制 Codex 会话本身的快捷入口。",
          "你可以把它们理解成 Codex 的控制面板：有的改模型，有的改权限，有的看状态，有的管理会话，有的做上下文压缩，有的帮助你审查当前工作区。",
        ],
      },
      {
        title: "一、模型与行为控制命令",
        body: [
          "/model 用来切换当前会话使用的模型，有些模型还会带 reasoning effort 选择。这个命令最适合在任务正式开始前使用，比如你要从轻量任务切到复杂重构时。",
          "/fast 用来切换 GPT-5.4 的 Fast mode。它适合你想要更快响应、接受一定推理深度下降的时候。常见用法是 /fast on、/fast off、/fast status。",
          "/personality 用来调整 Codex 的表达风格，而不是改模型能力。官方支持 friendly、pragmatic、none。这个命令适合你觉得它讲得太多或太少时使用。",
          "/plan 用来切到 plan mode，还可以顺手带上一个规划请求。它非常适合大任务起步阶段，比如迁移、重构、多步骤部署，不适合已经在执行中的当前任务中途强行切换。",
        ],
      },
      {
        title: "二、权限与沙箱控制命令",
        body: [
          "/permissions 是现在的正式权限命令，用来调整 Codex 在当前会话里能否自动执行、什么时候需要你确认。比如你可以在更保守的模式和更自动的模式之间切换。",
          "/approvals 现在仍然可用，但官方已经把它降级为 /permissions 的旧别名。也就是说，老用户还可以继续用，但新文章里应该把 /permissions 作为主命令来讲。",
          "/sandbox-add-read-dir 是 Windows 特有命令，用来额外给某个绝对目录只读访问权限。它很适合当前项目要引用工作区外部目录、配置目录或共享素材目录时使用。",
          "这组命令的核心作用不是生成内容，而是改变 Codex 能做什么。如果你不理解它们，就会误以为 Codex 不会执行，实际上可能只是权限策略在拦。",
        ],
      },
      {
        title: "三、会话与线程管理命令",
        body: [
          "/new 会在同一个 CLI 会话里开一个全新对话。适合你换任务了，但不想退出 Codex。",
          "/clear 会清空终端显示并开启新聊天。它和 /new 的区别是：/clear 顺手把当前终端界面也清了，更像重置画布。",
          "/resume 用来恢复之前保存过的会话，适合隔天继续做同一个任务，不想重新交代上下文。",
          "/fork 用来从当前会话分叉出一个新线程。非常适合你想并行试两种方案，但又不想污染原来的任务链路。",
          "/agent 用来切换到某个 subagent 线程。这个命令通常出现在你已经启用或触发了多代理协作之后。",
          "这组命令解决的不是代码问题，而是上下文组织问题。项目越复杂，线程管理越重要。",
        ],
      },
      {
        title: "四、状态查看与调试命令",
        body: [
          "/status 用来查看当前会话配置和 token 使用情况。它通常会显示当前模型、权限策略、可写目录、上下文占用等信息，是最值得高频使用的检查命令之一。",
          "/debug-config 用来排查配置生效顺序和策略来源。如果你明明改了 config.toml，但 Codex 表现和预期不一致，这个命令非常关键。",
          "/statusline 用来配置 TUI 底部状态栏显示哪些字段，例如模型、context、git branch、token 使用、session id 等。它偏向长期使用者的个性化配置。",
          "/ps 用来查看实验性后台终端及其最近输出。适合你启动了长时间任务，又不想丢失主会话视角的时候。",
        ],
      },
      {
        title: "五、内容整理与上下文压缩命令",
        body: [
          "/compact 用来压缩当前长对话，把前文总结成更短的形式，释放上下文窗口。任务跑得很长时，这个命令尤其有用。",
          "/copy 用来复制最近一次已完成输出，适合你快速拿走计划文本、审查建议或最终说明。",
          "/mention 用来显式把某个文件或目录加进当前对话上下文。适合你不想让 Codex 自己猜，而是直接指定它优先看哪个文件。",
          "这组命令的价值在于控制上下文质量，而不是直接提升模型能力。上下文越干净，结果通常越稳。",
        ],
      },
      {
        title: "六、代码与工作区相关命令",
        body: [
          "/diff 用来查看当前 Git diff，包括 Git 还没追踪的文件。它非常适合在提交前审查 Codex 改动。",
          "/review 用来让 Codex 审查当前 working tree。它会从行为变化、风险和缺测试等角度来给出反馈，适合收尾阶段使用。",
          "/init 用来生成 AGENTS.md 脚手架。虽然它看起来像初始化命令，但本质上是在给 Codex 建立长期项目说明。",
          "/mcp 用来列出当前会话可用的 MCP 工具，适合检查外部能力是否已经挂上。",
          "/apps 用来浏览 apps 或 connectors，并把它们插入输入框中，方便后续直接调用。",
        ],
      },
      {
        title: "七、实验、反馈与退出命令",
        body: [
          "/experimental 用来开关实验功能，例如官方文档里提到的 Apps 或 Smart Approvals。这类功能往往需要重启后生效。",
          "/feedback 用来把日志和诊断信息发给 Codex 维护者，适合遇到 CLI 异常、配置问题或界面 bug 时使用。",
          "/logout 用来退出当前账号登录状态，适合共享电脑或切换账号场景。",
          "/quit 和 /exit 都是退出命令，作用等价。官方明确说明二者都可以离开 CLI，会话内没有本质区别。",
        ],
      },
      {
        title: "八、哪些命令最值得优先记住",
        body: [
          "如果你是刚开始用 Codex CLI，最值得先记住的是 /model、/fast、/permissions、/status、/diff、/review、/compact、/new。",
          "这 8 个命令基本覆盖了最常见的使用路径：切模型、调速度、改权限、查状态、看改动、做审查、压缩上下文、切任务。",
          "剩下的命令不是不重要，而是更偏某些场景，例如 Windows 沙箱、后台终端、MCP 工具、子代理线程或故障排查。",
        ],
      },
      {
        title: "九、容易混淆的几组命令",
        body: [
          "/permissions 和 /approvals 容易混淆。现在应该优先记 /permissions，/approvals 只是历史别名。",
          "/new 和 /clear 也容易混淆。前者是新建会话但不清屏，后者是清屏并开启新会话。",
          "/quit 和 /exit 没有本质区别，二者都用于退出。",
          "/status、/debug-config、/statusline 看起来都像状态命令，但层级不同：/status 看当前运行态，/debug-config 看配置来源，/statusline 改显示项。",
        ],
      },
      {
        title: "常见误区",
        body: [
          "第一个误区是把 slash command 和 shell command 混为一谈。/model 这种命令只能在 Codex 对话输入框里使用，不是在 PowerShell 里执行。",
          "第二个误区是把 /approvals 当成主命令。现在更标准的写法是 /permissions。",
          "第三个误区是以为 slash commands 越多越要全背。实际上先记住高频命令就够了，剩下的用到时再查。",
        ],
      },
      {
        title: "最后给你一个最实用的记忆方法",
        body: [
          "你可以把这套命令分成五类来记：模型行为、权限沙箱、会话线程、状态调试、代码工作区。这样比按字母顺序硬背轻松得多。",
          "真正开始工作时，一般是先用 /model 或 /fast 选档位，再用 /permissions 定权限，用 /status 看配置，用 /diff 和 /review 做收尾。如果对话太长，再用 /compact。掌握这条主线，已经足够覆盖大部分真实使用场景。",
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
    slug: "build-learn-codex-site",
    title: "实战案例：用 Codex 从零做一个 Next.js 教程网站",
    description: "完整复盘 Learn Codex 这个网站是如何用 Codex 从计划、搭建、写内容到部署准备一步步做出来的。",
    category: "实战",
    readingTime: "14 分钟",
    publishedAt: "2026-04-11",
    featured: true,
    sections: [
      {
        title: "项目目标是什么",
        body: [
          "这个实战案例的目标很明确：做一个面向中文用户的 Codex 教程网站，名字叫 Learn Codex，技术栈使用 Next.js，最终部署在 Vercel，并且内容重点不是产品介绍，而是教程、命令说明、工作流和实战案例。",
          "换句话说，这不是在做一个营销页面，而是在做一个内容型网站。这个定位会直接影响页面结构、SEO 方式、文章组织方式和后续更新节奏。",
        ],
      },
      {
        title: "第一步：先把需求收敛，而不是马上开始写代码",
        body: [
          "这个项目一开始并没有直接进入代码阶段，而是先确定了网站名字、部署平台、技术栈和站点定位。这里最重要的一点，是把范围收窄到 Next.js 加 Vercel 的教程站，而不是继续发散到后台、CMS、社区或复杂交互。",
          "如果你一开始就让 Codex 做一个完整平台，结果通常会变得过重。更稳的做法是先把 MVP 范围框定清楚：首页、教程列表、文章页、关于页、基础 SEO 和首批内容。",
        ],
      },
      {
        title: "第二步：搭建项目骨架",
        body: [
          "项目骨架使用 create-next-app 初始化，采用 App Router、TypeScript 和 Tailwind CSS。这样做的好处是：结构稳定、Vercel 兼容度高、后面做静态内容也很方便。",
          "在这一步里，Codex 的价值主要不是替你点命令，而是快速把基础项目从默认模板推进到可做内容站的形态，例如调整 layout、全局样式、页面层级和基础站点配置。",
        ],
      },
      {
        title: "第三步：先做内容模型，再做页面",
        body: [
          "为了让教程站后续容易扩展，站点没有把文章写死在各个页面组件里，而是先抽出一个统一的内容数据结构。每篇文章都包含 slug、标题、描述、分类、阅读时长、发布日期和分节内容。",
          "这一步很关键。因为一旦内容结构清晰，首页、列表页、详情页、相关推荐、上一篇下一篇这些能力都能围绕同一份数据生成，而不是每加一篇文章就去改很多组件。",
        ],
      },
      {
        title: "第四步：先把页面跑通，再逐步修样式",
        body: [
          "首页、教程列表页、文章详情页和关于页是按核心路径优先级来做的。不是先抠细节视觉，而是先让网站具备真实可浏览结构。",
          "这样做的原因很现实：教程网站最重要的是信息架构和阅读路径，视觉细节可以后补，但页面路径如果一开始就没理顺，后面每加内容都会返工。",
        ],
      },
      {
        title: "第五步：首页不是宣传页，而是导航页",
        body: [
          "首页最终没有做成那种重营销、轻内容的 Landing Page，而是做成了一个偏内容导航的首页：有主标题、有核心入口、有内容概览、有专题区块，也有必读内容和学习路径。",
          "这个选择非常适合教程站。因为访客真正关心的是从哪里开始学、哪些内容最值得先看，而不是一堆品牌口号。",
        ],
      },
      {
        title: "第六步：教程内容不是随便写，而是按专题组织",
        body: [
          "这个网站的内容不是单篇零散堆出来的，而是按入门、基础、工作流、实战、FAQ 这几个专题来组织。这样做后，用户进站以后不会只看到文章列表，而能感受到清晰的学习路径。",
          "首批内容包括 Codex 是什么、第一次使用怎么跑通、怎样给 Codex 下任务、交互命令怎么用、完整 slash commands 清单等。这些内容都围绕真实使用问题，而不是抽象介绍。",
        ],
      },
      {
        title: "第七步：把一篇错方向的文章重写成正确版本",
        body: [
          "这个项目里有一个非常典型的 Codex 协作场景：中途发现文章方向理解错了。原先写的是泛化的内置命令说明，但用户真正要的是像 /model、/permissions、/status 这种交互 slash commands。",
          "这时没有继续在错误方向上修修补补，而是先重新核对官方文档，再整篇重写，最后还顺势拆成两篇：一篇讲新手最该先掌握的 8 个高频命令，一篇讲完整命令清单。这个过程很能体现 Codex 的价值：先纠偏，再重构内容。",
        ],
      },
      {
        title: "第八步：把长标题卡片问题修掉",
        body: [
          "网站进入内容阶段后，很快暴露出一个真实前端问题：某篇文章标题太长，导致首页卡片布局失衡。这个问题看起来很小，但如果不处理，会直接影响首页观感。",
          "修复方式不是简单缩短标题，而是调整卡片组件本身，让它支持更稳的换行、等高布局和可伸展摘要区域。这样以后再出现长标题，也不会继续把首页撑坏。",
        ],
      },
      {
        title: "第九步：边做边修文案，而不是最后一次性返工",
        body: [
          "这个项目还有一个很实际的过程，就是首页文案多次迭代。比如重复的 Learn Codex、别扭的英文 slogan、偏内部口径的上线范围，这些都不是靠一开始就想对，而是边看边改、边体验边收敛。",
          "这也是 Codex 在内容站里很实用的一点：你可以快速要求它改一小块文案、一段布局、一张卡片，而不用重新搭整页。",
        ],
      },
      {
        title: "第十步：补基础 SEO 和站点能力",
        body: [
          "在页面和内容有了以后，网站继续补了 metadata、sitemap.xml、robots.txt、静态参数生成、相关推荐和上一篇下一篇等能力。这些功能不会像首页视觉那样显眼，但对教程站非常重要。",
          "尤其是文章型网站，SEO 和内部链接结构不是上线后再想的事情，而应该尽早进入基础版本。",
        ],
      },
      {
        title: "第十一步：用 Vercel 的方式准备上线",
        body: [
          "因为目标平台一开始就定成了 Vercel，所以项目没有走复杂部署路线，而是尽量保持 Next.js 原生兼容，配合环境变量生成站点 URL，保证 metadata 和 sitemap 在部署后能直接使用正式域名。",
          "这里还有一个很实际的坑：一开始用了在线 Google 字体，后来在本地构建时因为字体请求失败而报错，最终改成了不依赖在线拉取的字体方案。这一步非常典型，说明部署准备不只是填配置，还包括把潜在不稳定依赖提前移除。",
        ],
      },
      {
        title: "第十二步：用 Git 和 GitHub 管理结果",
        body: [
          "网站做好之后，再把本地仓库初始化、接远程、提交、推送到 GitHub。这个过程里也遇到过 SSH 权限不通的问题，最后切成 HTTPS 远程顺利推送。",
          "这说明 Codex 的实战价值不只是写页面，它同样适合帮助你处理真实项目流程里的细节问题，例如初始化仓库、检查状态、修正忽略规则、整理首次提交。",
        ],
      },
      {
        title: "这个案例里，Codex 真正帮到了什么",
        body: [
          "第一，它能快速把模糊的需求收敛成可执行的网站结构。第二，它能持续推进实现，不会只停在建议层。第三，它能在做内容站这种多轮迭代任务里，不断根据反馈调整文案、结构和样式。",
          "更重要的是，它不是只会写一段代码，而是能参与从计划、搭建、内容、排错、验证到上线准备的整条链路。这也是为什么这种项目特别适合作为 Codex 的实战案例。",
        ],
      },
      {
        title: "你可以怎么复用这个案例",
        body: [
          "如果你也想用 Codex 做一个内容型网站，最推荐的路径是先定主题和技术栈，再让它搭项目骨架，之后用统一内容数据结构驱动页面，最后逐步补 SEO、导航、文章和部署配置。",
          "不要一开始就追求特别复杂的功能。先把一套结构清晰、内容可靠、可以部署的网站做出来，再慢慢扩展搜索、评论、订阅或更多专题，这是更稳的节奏。",
        ],
      },
      {
        title: "这篇案例最值得记住的一点",
        body: [
          "做这种网站时，Codex 最强的地方不是替你一次性生成最终成品，而是它可以在每个阶段都接手一个明确任务：定结构、搭页面、补内容、改文案、修样式、查问题、做验证。",
          "你把任务拆清楚，Codex 就能稳定推进。你把目标说模糊，它就会开始发散。这个项目本身，就是一个很好的证明。",
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
