import Vue from 'vue'
import Router from 'vue-router'
import Keep from '@/components/Keep_like'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Keep_like',
      component: Keep
    }
  ]
})
