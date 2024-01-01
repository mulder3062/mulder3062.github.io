import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mulder's Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  head: [ // TODO Google Analytics를 붙이자. https://vitepress.dev/reference/site-config#example-using-google-analytics
      [
        'link', 
        { rel: 'icon', href: '/favicon.png' }
      ],
      [
        'link',
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
      ],
    ]
})
