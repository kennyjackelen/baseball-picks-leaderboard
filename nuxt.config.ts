// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    storage: {
      data: { driver: 'vercelKV' },
    },
  },
  app: {
    head: {
      title: 'Baseball Picks Leaderboard',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      htmlAttrs: {
        lang: 'en',
        // this avoids any white background on very narrow screens when
        // the grid is too wide to fit on the screen
        class: 'bg-gray-50 dark:bg-gray-900',
      },
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
