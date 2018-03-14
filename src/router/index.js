/**
 * Created by HP on 2018/3/14.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Miste from '../pages/Msite/Msite.vue'
import List from '../pages/List/List.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/miste',
      component:Miste
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/shopcart',
      component:ShopCart
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/',
      redirect:'/miste'
    }
  ]
})

