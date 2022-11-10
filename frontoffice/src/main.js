import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin, LayoutPlugin, DropdownPlugin, TablePlugin, NavbarPlugin, FormPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
Vue.use(NavbarPlugin)
Vue.use(FormPlugin)

Vue.prototype.$api = axios.create({
  baseURL: 'http://localhost:3000/'
});

Vue.component("HeaderUser", () =>
    import ("@/components/HeaderUser.vue"));

Vue.component("HeaderAdmin", () =>
    import ("@/components/HeaderAdmin.vue"));

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
