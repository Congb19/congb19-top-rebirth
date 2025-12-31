// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: false,
  modules: ['@vueuse/nuxt', '@nuxt/ui', '@pinia/nuxt'],
  colorMode: {
    preference: 'system'
  },
  // imports: {
  //   dirs: ['~/stores']
  // },
  // pinia: {
  //   /**
  //    * Automatically add stores dirs to the auto imports. This is the same as
  //    * directly adding the dirs to the `imports.dirs` option. If you want to
  //    * also import nested stores, you can use the glob pattern `./stores/**`
  //    * (on Nuxt 3) or `app/stores/**` (on Nuxt 4+)
  //    *
  //    * @default `['stores']`
  //    */
  //   storesDirs: []
  // },
  nitro: {
    experimental: {
      websocket: true
    }
  }
});
