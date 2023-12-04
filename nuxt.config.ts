import { defineNuxtConfig } from "nuxt/config"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // default
    },
    // layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
          crossorigin: ''
        },
      ],
    },
  },

  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: [
    "@/assets/scss/main.scss",
    "bootstrap/dist/css/bootstrap.min.css"

  ],
})
