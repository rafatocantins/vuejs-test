import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'

import NavBar from "./components/NavBar/Navbar.vue"
import Footer from "./components/Footer/Footer.vue"

Vue.component('NavBar', NavBar);
Vue.component('Footer', Footer);

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
