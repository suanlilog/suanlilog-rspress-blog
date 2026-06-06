import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '算栗工坊',
  description: '每个知识点，都值得举个栗子。',
  icon: '/chestnut.png',
  base: '/',
  themeConfig: {
    lastUpdated: true,
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
