import { defineConfig } from "vitepress";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "en-US",
  title: "VitePress",
  description: "Vite & Vue powered static site generator.",
  base: "/learn-english-form-for-16-lessons/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Lessons", link: "/lessons/1" },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [{ text: "Lesson 1", link: "/lessons/1" }],
      },
    ],
  },
});
