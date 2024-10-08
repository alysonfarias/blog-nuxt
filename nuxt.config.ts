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
    head: {
      htmlAttrs: {
        lang: "pt-BR",
      },
      title: "Alyson Farias",
      link: [
        {
          rel: "canonical",
          href: "https://www.alysonfarias.me/about",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    // "@nuxtjs/seo",
  ],
  site: {
    url: "https://alysonfarias.me/",
    name: "alyson farias",
    description: "Alyson Farias - Digital Garden",
    trailingSlash: false,
  },
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
