export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "hello-world",
    title: "你好，世界",
    date: "2026-06",
    excerpt: "这是我的第一篇博客，分享一下搭建个人网站的过程和想法。",
    content: `# 你好，世界

这是我的个人博客的第一篇文章。

## 为什么搭建这个网站

作为一个数据科学专业的学生，我一直希望有一个地方能够记录自己的学习历程、项目经验和思考。这个网站就是为此而生。

## 技术栈

- Next.js 16
- Tailwind CSS 4
- Framer Motion
- TypeScript

## 后续计划

后续会陆续更新项目复盘、技术笔记等内容，敬请期待。`,
  },
  {
    slug: "chtholly-dev-log",
    title: "Chtholly 开发日志：聚光灯 GameJam 之旅",
    date: "2026-06",
    excerpt: "回顾参与 TapTap 聚光灯 GameJam 的开发过程与技术要点。",
    content: `# Chtholly 开发日志

项目代号 Chtholly（路人女主？别开玩笑啦！）是我在 TapTap 聚光灯 GameJam 中的作品。

## 项目背景

这是一个限时创作的游戏开发比赛，需要在规定时间内完成一款可玩的游戏原型。

## 技术实现

使用 Unity 引擎 + C# 进行开发。我在团队中负责整体程序设计，包括：

- 游戏架构设计
- 核心玩法实现
- 场景搭建与交互逻辑

## 收获与反思

这次比赛让我深刻体会到团队协作与快速迭代的重要性，也积累了宝贵的 GameJam 经验。`,
  },
];
