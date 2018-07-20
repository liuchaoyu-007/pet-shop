import Vue from 'vue'
import Router from 'vue-router'
import Login from "./components/login.vue"//登陆界面
import Info from "./components/info.vue"//导航首页
import Reg from './components/reg.vue'//注册
import Order from './components/order/order.vue'//订单
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login/:user/:pass/:type',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
      children: [
        { 
          path: "Order", 
          name: "Order", component: Order 
        }
      ]
    }
  ]
})
