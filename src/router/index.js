/**
 * Created by HP on 2018/3/14.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Miste from '../pages/Msite/Msite.vue'
import List from '../pages/List/List.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'
import Fenlei from '../pages/List/Fenlei/Fenlei.vue'
import Pinpai from '../pages/List/Pinpai/Pinpai.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/miste',
      component:Miste
    },
    {
      path:'/list',
      component:List,
      children:[
        {
          path:'/list/tab1',
          component:Fenlei
        },
        {
          path:'/list/tab2',
          component:Pinpai
        },
        {
          path:'',
          redirect: '/list/tab1'
        }
      ]
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

