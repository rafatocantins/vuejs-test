import NavBar from "../Navbar.vue"
import router from '../../../router'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.component('NavBar', NavBar);


new Vue({
    router,
    render: h => h(NavBar)
  }).$mount('#navbar')

