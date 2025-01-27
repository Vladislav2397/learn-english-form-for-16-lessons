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
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: "Lesson 1", link: "/lessons/1" },
          { text: "Lesson 2", link: "/lessons/2" },
        ],
      },
    ],
  },
});
