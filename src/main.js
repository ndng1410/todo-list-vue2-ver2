import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './assets/store/store';
import i18n from './assets/locales/i18n';

Vue.use(ElementUI);

Vue.config.productionTip = false

export const EventBus = new Vue();

new Vue({
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')