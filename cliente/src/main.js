import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'https://mr-empanadag1.herokuapp.com/api';

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
