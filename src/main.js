import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Gate from "./Gate";

Vue.prototype.$gate = new Gate();
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueAxios, axios);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

window.axios = require('axios');
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.filter('upText', function(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter('mayus', function(text){
  return text.toUpperCase();
});
Vue.filter('moneda', function(text){
  if(text!="----"){
  let val = (text/1).toFixed(2).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
  return text
});
Vue.filter('pesado', function(text){
  if(text == true){
    return 'Kg'
  }else{
    return 'Und'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
