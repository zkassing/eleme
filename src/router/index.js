import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import seller from '../components/seller/seller'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      component: Main,
      redirect:'/goods',
      children:[
        {
          path:'/goods',
          component: goods,

        },
        {
          path:'/ratings',
          component: ratings
        },
        {
          path:'/seller',
          component: seller
        }
      ],

    }
  ]

})
