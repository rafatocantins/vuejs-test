import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'

/* Importing components */

import Navbar from "./components/NavBar/Navbar.vue"
import Footer from "./components/Footer/Footer.vue"

/* Import Boostrap files */

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* Listing Components */

Vue.component('Navbar', Navbar);
Vue.component('Footer', Footer);

/* Use Bootstrap Vue */
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
