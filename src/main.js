import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'

/* Importing components */

import Navbar from "./components/NavBar/Navbar.vue"
import Footer from "./components/Footer/Footer.vue"
import Header from "./components/Header/Header.vue"

/* Import Css and Boostrap files */

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/components/scss/style.scss"

/* Listing Components */

Vue.component('Navbar', Navbar);
Vue.component('Footer', Footer);
Vue.component('Header', Header);

/* Use Bootstrap Vue */
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
