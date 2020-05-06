import Vue from 'vue'
import Router from 'vue-router'
import underConstruction from '@/components/underConstruction'
import notFound from '@/components/notFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Roulette',
      component: underConstruction
    },
    {
      path: '/Coinflip',
      name: 'Coinflip',
      component: underConstruction
    },
    {
      path: '/Crash',
      name: 'Crash',
      component: underConstruction
    },
    {
      path: '/Unboxing',
      name: 'Unboxing',
      component: underConstruction
    },
    { name: '404', path: '*', component: notFound }
  ]
})
