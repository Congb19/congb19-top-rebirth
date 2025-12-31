export const useApp1Store = defineStore('appStore', {
  state: () => ({
    name: '',
    description: ''
  }),
  actions: {
    async fetch() {
      const infos: any = await $fetch('https://api.nuxt.com/modules/pinia');
      // console.log('ok,', infos);
      this.name = infos.name;
      this.description = infos.description;
    }
  }
});
