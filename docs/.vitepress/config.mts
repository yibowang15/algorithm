import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "算法学习",
  description: "记录算法学习的点滴",
  base: '/',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    //['link', { rel: 'icon', href: '/algorithm/favicon.ico' }],
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
        text: 'Basic',
        collapsed: true,
        items: [
          { text: '基础题目', link: '/basic/index.md' },
          { text: '2235：两数之和（two sum）', link: '/basic/2235.md' }
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
        text: 'Link List',
        collapsed: true,
        items: [
          { text: '什么是链表？', link: '/linked-list/index.md' },
          
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
      { icon: 'github', link: 'https://github.com/yibowang15/algorithm' }
    ]
  }
})
