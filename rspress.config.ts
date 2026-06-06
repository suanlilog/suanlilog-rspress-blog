import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '算栗工坊',
  description: '每个知识点，都值得举个栗子。',
  icon: '/chestnut.png',
  base: '/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', activeMatch: '^/$' },
      { text: 'Agent', link: '/Agent/', activeMatch: '/Agent/' },
      { text: 'Python教程', link: '/Python教程/', activeMatch: '/Python(?:%E6%95%99%E7%A8%8B|教程)/' },
      { text: '工具教程', link: '/工具教程/', activeMatch: '/(?:%E5%B7%A5%E5%85%B7%E6%95%99%E7%A8%8B|工具教程)/' },
      { text: '生活', link: '/生活/', activeMatch: '/(?:%E7%94%9F%E6%B4%BB|生活)/' },
    ],
    sidebar: {
      '/Agent/': [
        { text: 'Agent 开发', items: [{ text: '概览', link: '/Agent/' }] },
      ],
      '/Python教程/': [
        {
          text: 'Python 教程',
          items: [
            { text: '概览', link: '/Python教程/' },
            { text: '从 conda 转 uv 快速上手', link: '/Python教程/从conda转uv快速上手' },
          ],
        },
      ],
      '/工具教程/': [
        {
          text: '工具教程',
          items: [
            { text: '概览', link: '/工具教程/' },
            { text: '日常更新流程', link: '/工具教程/日常更新流程' },
            { text: 'C盘清理', link: '/工具教程/C盘清理' },
            {
              text: 'AI Coding工具',
              items: [
                { text: 'Claude Code + CC Switch', link: '/工具教程/AI Coding工具/Claude Code + CC Switch' },
                { text: 'Open Code', link: '/工具教程/AI Coding工具/Open Code' },
                { text: 'cursor 无限续杯流程', link: '/工具教程/AI Coding工具/cursor无限续杯流程【已停更】' },
                { text: '基于 claude code 源码重构', link: '/工具教程/AI Coding工具/基于claude code源码重构的python代码及其rust运行版' },
              ],
            },
            {
              text: '打造个人品牌',
              items: [
                { text: '从零搭建 MkDocs 博客', link: '/工具教程/打造个人品牌/从零搭建MkDocs博客' },
                { text: '打造 GitHub 个人品牌', link: '/工具教程/打造个人品牌/打造GitHub个人品牌' },
              ],
            },
          ],
        },
      ],
      '/生活/': [
        {
          text: '生活',
          items: [
            { text: '概览', link: '/生活/' },
            {
              text: '游戏',
              items: [
                { text: 'switch 破解版下载游戏教程', link: '/生活/游戏/switch破解版下载游戏教程' },
                { text: '星露谷下载 Mod 教程', link: '/生活/游戏/星露谷下载Mod教程' },
              ],
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/suanlilog',
      },
    ],
    footer: {
      message: 'Powered by Rspress',
    },
    enableContentAnimation: true,
    enableScrollToTop: true,
  },
  markdown: {
    showLineNumbers: true,
  },
  globalStyles: path.join(__dirname, 'docs', 'styles', 'extra.css'),
});
