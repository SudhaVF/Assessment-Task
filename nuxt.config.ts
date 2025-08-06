// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@fortawesome/fontawesome-free/css/all.min.css'],
    // '~/assets/css/main.css'],
  //  vite: {
  //   plugins: [
  //     tailwindcss(),
  //   ],
  // },
})

