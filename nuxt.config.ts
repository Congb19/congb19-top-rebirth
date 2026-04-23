export default defineNuxtConfig({
  devServer: {
    port: 7777
  },
  app: { cdnURL: '' },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: false,
  modules: ['@vueuse/nuxt', '@nuxt/ui', '@pinia/nuxt', '@nuxt/content'],
  colorMode: {
    preference: 'system'
  },
  nitro: {
    experimental: {
      websocket: true
    }
  },
  // experimental: { sqliteConnector: true },
  content: {
    experimental: { sqliteConnector: 'native' }
  }
});
