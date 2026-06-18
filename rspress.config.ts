import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '算栗工坊',
  description: '从实例到类 | From Instance to Class',
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
