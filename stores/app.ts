export const useAppStore = defineStore('appStore', {
  state: () => ({
    name: '',
    description: ''
  }),
  actions: {
    async fetch() {
      const infos = await $fetch('https://api.nuxt.com/modules/pinia');

      this.name = infos.name;
      this.description = infos.description;
    }
  }
});
