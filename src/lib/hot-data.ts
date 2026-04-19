export type HotRepo = {
  name: string;
  href: string;
  stars: string;
  summary: string;
  type: "官方核心" | "热门工具" | "Skills / 插件" | "生态平台";
};

export const hotRepos: HotRepo[] = [
  {
    name: "openai/codex",
    href: "https://github.com/openai/codex",
    stars: "76.1k",
    summary: "OpenAI 官方 Codex 主仓库，整个生态的核心入口。",
    type: "官方核心",
  },
  {
    name: "openai/skills",
    href: "https://github.com/openai/skills",
    stars: "17.1k",
    summary: "OpenAI 官方 skills 仓库，适合补充 Codex 工作流能力。",
    type: "官方核心",
  },
  {
    name: "openai/codex-plugin-cc",
    href: "https://github.com/openai/codex-plugin-cc",
    stars: "15.0k",
    summary: "OpenAI 官方 Codex 插件相关仓库。",
    type: "官方核心",
  },
  {
    name: "Yeachan-Heo/oh-my-codex",
    href: "https://github.com/Yeachan-Heo/oh-my-codex",
    stars: "24.0k",
    summary: "直接面向 Codex 的社区工具，适合快速上手和增强体验。",
    type: "热门工具",
  },
  {
    name: "farion1231/cc-switch",
    href: "https://github.com/farion1231/cc-switch",
    stars: "46.8k",
    summary: "高频使用的 CLI 工作流切换工具，适合日常开发协作。",
    type: "热门工具",
  },
  {
    name: "ryoppippi/ccusage",
    href: "https://github.com/ryoppippi/ccusage",
    stars: "13.0k",
    summary: "围绕 Codex / Claude Code 使用统计和辅助的实用工具。",
    type: "热门工具",
  },
  {
    name: "steipete/CodexBar",
    href: "https://github.com/steipete/CodexBar",
    stars: "10.9k",
    summary: "菜单栏工具，适合把 Codex 放进更轻量的桌面工作流。",
    type: "热门工具",
  },
  {
    name: "ComposioHQ/awesome-claude-skills",
    href: "https://github.com/ComposioHQ/awesome-claude-skills",
    stars: "54.7k",
    summary: "高质量 skills 集合，很多内容同样适用于 Codex 生态。",
    type: "Skills / 插件",
  },
  {
    name: "VoltAgent/awesome-agent-skills",
    href: "https://github.com/VoltAgent/awesome-agent-skills",
    stars: "16.2k",
    summary: "面向 agent 工作流的 skills 聚合仓库，适合扩展能力边界。",
    type: "Skills / 插件",
  },
  {
    name: "alirezarezvani/claude-skills",
    href: "https://github.com/alirezarezvani/claude-skills",
    stars: "11.7k",
    summary: "仓库说明明确覆盖 Codex，适合找现成技能模板。",
    type: "Skills / 插件",
  },
  {
    name: "CherryHQ/cherry-studio",
    href: "https://github.com/CherryHQ/cherry-studio",
    stars: "43.8k",
    summary: "多模型桌面端工具，适合作为 Codex 的图形化配套入口。",
    type: "生态平台",
  },
  {
    name: "iOfficeAI/AionUi",
    href: "https://github.com/iOfficeAI/AionUi",
    stars: "22.1k",
    summary: "明确支持 Codex、Claude Code、Gemini CLI 等多代理协作。",
    type: "生态平台",
  },
];
