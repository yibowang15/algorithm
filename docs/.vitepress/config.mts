import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "算法学习",
  description: "记录算法学习的点滴",
  base: '/algorithm',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: '介绍',
        collapsed: false,
        items: [
          { text: '什么是算法？', link: '/' },
        ]
      },
      {
        text: '滑动窗口',
        collapsed: false,
        items: [
          { text: '什么是滑动窗口？', link: '/sliding-window/index.md' },
          { text: '3.无重复字符的最长子串', link: '/sliding-window/3.md' },
          { text: '209.长度最小的子数组', link: '/sliding-window/209.md' },
          { text: '567.字符串的排列', link: '/sliding-window/567.md' },
          { text: '643.子数组最大平均数', link: '/sliding-window/643.md' },
          { text: '1004.最大连续1的个数 III', link: '/sliding-window/1004.md' },
          { text: '1343.大小为 K 且平均值大于等于阈值的子数组数目', link: '/sliding-window/1343.md' },
          { text: '1456.定长子串中元音的最大数目', link: '/sliding-window/1456.md' },
          { text: '1493.删掉一个元素以后全为 1 的最长子数组', link: '/sliding-window/1493.md' },
          { text: '2379.得到 K 个黑块的最少涂色次数', link: '/sliding-window/2379.md' },
          { text: '2730.找到最长的半重复子字符串', link: '/sliding-window/2730.md' },
          { text: '3090.每个字符最多出现两次的最长子字符串', link: '/sliding-window/3090.md' },
        ]
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/honkinglin/algorithm' }
    ]
  }
})
