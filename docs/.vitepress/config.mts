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
          { text: '2235：两数之和（two sum）', link: '/basic/2235.md' },
          {text:'2469: 温度运算', link: '/basic/2469.md'},
          {text:'2236:根节点值运算', link:'/basic/2236.md'},
          {text:'1512:对的对数', link:'/basic/1512.md'},
          {text:'1534:好三元', link:'/basic/1534.md'},
          {text:'258:各个位数相加', link:'/basic/258.md'},
          {text:'1281:整数的积和差', link:'/basic/1281.md'},
          {text:'231:2的幂', link:'/basic/231.md'},
          {text:'1470:重新排列数组', link:'/basic/1470.md'},
          {text:'867:反转matrix', link:'/basic/867.md'}

        ]
      },
      
      {
        text: 'Sliding Window',
        collapsed: true,
        items: [
          { text: '什么是滑动窗口？', link: '/sliding-window/index.md' },
          {text:'1456: 原音最大数值', link: '/sliding-window/1456.md'},
          {text:'643: 子数组最大平均数1', link: '/sliding-window/643.md'},
          {text:'1343: 大小为k且平均值大于threshold', link: '/sliding-window/1343.md'},
          {text:'2090: 半径为 k 的子数组平均值', link: '/sliding-window/2090.md'},
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
