import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VModal from 'vue-js-modal'
import AOS from "aos";
import "aos/dist/aos.css";


Vue.config.productionTip = false
Vue.use(VModal)
new Vue({
  vuetify,
  created () {
    AOS.init({ })
  },
  render: h => h(App)
}).$mount('#app')
