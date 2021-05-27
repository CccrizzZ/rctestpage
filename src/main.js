import Vue from 'vue'
import App from './App.vue'

// import vuesax
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax, {
  // options here
})
// Vue.use(Vuesax)



// import bootstrap vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)


// import video background
import VideoBackground from 'vue-responsive-video-background-player'
Vue.component('video-background', VideoBackground)


// import boxicons
import 'boxicons/css/boxicons.css'




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
