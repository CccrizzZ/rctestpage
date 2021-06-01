import Vue from 'vue'
import Router   from 'vue-router'

import Index    from '@/pages/index.vue'
import Clothes  from '@/pages/clothes.vue'
import Voices    from '@/pages/voices.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home',
    },
    {
      path: '/clothes',
      name: 'clothes',
      component: Clothes,
    },
    {
      path: '/voices',
      name: 'voices',
      component: Voices,
    },
  ]
})
