// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    "nuxt-icon",
    // "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
  ],
  runtimeConfig: {
    public: {
      bucketUrl: import.meta.env.BUCKET_URL,
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
