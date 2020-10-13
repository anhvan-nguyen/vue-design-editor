import { createApp, h } from 'vue'
import router from './router'
import App from './components/App.vue'
import BaseIcon from './components/BaseIcon.vue';

export default function registerVueModule(plugins: any, modules: any = []) {
  const app = createApp({
    render() {
      return (
        h(App)
      );
    },
    // setup() {
    //   const { t } = useI18n();
    //   app.config.globalProperties.$t = (key: any) => t(key);
    //   app.config.globalProperties.$i18nRoute = (to: RouteLocationNormalized): RouteLocationNormalized => ({
    //     ...to,
    //     params: { lang: i18n.global.locale.value, ...to.params },
    //   });
    // },
  });
  modules.map((Module: any) => new Module(router).install(app));
  app.component('base-icon', BaseIcon);
  app.use(router);
  Object.values(plugins).forEach((plugin: any) => app.use(plugin));
  app.mount('#app');
}
