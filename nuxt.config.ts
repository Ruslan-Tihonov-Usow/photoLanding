// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'github_pages'
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Анна Морозова — фотограф',
      meta: [
        { name: 'description', content: 'Свадебная и портретная фотография. Настоящие эмоции в естественном свете.' }
      ]
    }
  }
})