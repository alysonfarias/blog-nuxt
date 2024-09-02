// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  content: {
    highlight: {
      theme: {
        default: "min-light",
        dark: "min-dark",
      },
    },
    // markdown: {
    //   remarkPlugins: ["remark-directive", "remark-gemoji", "remark-rehype"],
    //   rehypePlugins: [
    //     "rehype-format",
    //     "rehype-stringify",
    //     [
    //       "rehype-external-links",
    //       {
    //         target: "_blank",
    //         rel: "nofollow",
    //       },
    //     ],
    //   ],
    // },
  },
  colorMode: {
    classSuffix: "",
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  future: {
    compatibilityVersion: 4,
  },
});
