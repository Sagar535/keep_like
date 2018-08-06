import Vue from 'vue'
import Router from 'vue-router'
import Keep from '@/components/Keep_like'
import Keep_list from '@/components/Keep_list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Keep_like',
      component: Keep
    },
    {
      path: '/list',
      name: 'Keep_list',
      component: Keep_list
    }
  ]
})
