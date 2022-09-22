// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  runtimeConfig: {
    apiKey: "", // can be overridden by NUXT_API_KEY environment variable
    public: {
      apiId: "", // can be overridden by NUXT_PUBLIC_API_ID environment variable
    },
  },
});
