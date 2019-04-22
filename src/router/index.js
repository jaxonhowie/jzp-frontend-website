import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/components/menu/api-list.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu
    },
  ]
})
