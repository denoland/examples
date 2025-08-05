import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: "deno",
  },

  app: {
    head: {
      title: "Dinosaur Encyclopedia",
      link: [
        {
          rel: "preload",
          href: "https://demo-styles.deno.deno.net/fonts/Moranga-Regular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "https://demo-styles.deno.deno.net/fonts/Moranga-Medium.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "https://demo-styles.deno.deno.net/fonts/Recursive_Variable.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://demo-styles.deno.deno.net/styles.css",
          type: "text/css",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-11-06",
});
