import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '算栗工坊',
  description: '大模型是工作，算栗是生活。',
  icon: '/chestnut.png',
  logo: '/chestnut.png',
  base: '/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', activeMatch: '^/$' },
      { text: 'Agent', link: '/Agent/', activeMatch: '/Agent/' },
      { text: 'Python教程', link: '/Python教程/', activeMatch: '/Python(?:%E6%95%99%E7%A8%8B|教程)/' },
      { text: '工具教程', link: '/工具教程/', activeMatch: '/(?:%E5%B7%A5%E5%85%B7%E6%95%99%E7%A8%8B|工具教程)/' },
      { text: '生活', link: '/生活/', activeMatch: '/(?:%E7%94%9F%E6%B4%BB|生活)/' },
    ],
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
