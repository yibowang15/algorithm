import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "算法学习",
  description: "记录算法学习的点滴",
  base: '/algorithm',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/algorithm/favicon.ico' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    editLink: {
      text: 'Edit it on Github',
      pattern: 'https://github.com/yibowang15/algorithm/edit/main/docs/:path'
    },

    sidebar: [
      {
        text: '介绍',
        collapsed: false,
        items: [
          { text: '什么是算法？', link: '/' },
        ]
      },
      {
        text: 'Sliding Window',
        collapsed: true,
        items: [
          { text: '什么是滑动窗口？', link: '/sliding-window/index.md' },
        ]
      },
      
      {
        text: 'Binary Search',
        collapsed: true,
        items: [
          { text: '什么是二分搜索？', link: '/binary-search/index.md' },
      
        ]
      },
  
      {
        text: '链表',
        collapsed: true,
        items: [
          { text: '什么是链表？', link: '/linked-list/index.md' },
          { text: '203.移除链表元素', link: '/linked-list/203.md' },
          { text: '206.反转链表', link: '/linked-list/206.md' },
          { text: '328.奇偶链表', link: '/linked-list/328.md' },
          { text: '1290.二进制链表转整数', link: '/linked-list/1290.md' },
        ]
      },
      {
        text: 'Binery Tree',
        collapsed: true,
        items: [
          { text: '什么是二叉树？', link: '/binary-tree/index.md' },
        ]
      },
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/honkinglin/algorithm' }
    ]
  }
})
