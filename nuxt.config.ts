// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      apiBase: "http://localhost:8000/api",
      // apiBase: "https://restaurant.api.ghaffari-projects.ir/api",
    },
  },

  app: {
    head: {
      htmlAttrs: { dir: "rtl", lang: "fa" },
    },
  },
});
