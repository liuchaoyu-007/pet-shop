import Vue from 'vue'
import Router from 'vue-router'
import Login from "./components/login.vue"//登陆界面
import Info from "./components/info.vue"//导航首页
import Reg from './components/reg.vue'//注册
import Messagecenter from './components/info/Messagecenter/Messagecenter.vue'//消息中心
import Usermanagement from './components/info/Usermanagement/Usermanagement.vue'//用户管理
import Servicemanagement from './components/info/Storemanagement/Servicemanagement/Servicemanagement.vue'//门店管理-服务管理
import Storeinformation from './components/info/Storemanagement/Storeinformation/Storeinformation.vue'//门店管理-门店信息
import StoreBuilding from './components/info/Storemanagement/Storeinformation/StoreBuilding.vue'//门店管理-创建门店
import Order from './components/info/Storemanagement/order/order.vue'//门店管理-订单管理
import Commoditypet from "./components/info/Storemanagement/Commodity/pet.vue"//门店管理-商品管理-宠物
import Commodityfoot from "./components/info/Storemanagement/Commodity/foot.vue"//门店管理-商品管理-食物
import CommodityArticles from "./components/info/Storemanagement/Commodity/Articles.vue"//门店管理-商品管理-食物
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//网站首页
      name: 'Login',
      component: Login
    },
    {//注册跳转到登陆
      path: '/login/:user/:pass/:type',
      name: 'Login',
      component: Login
    },
    {//注册
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {//登陆后界面
      path: '/info',
      name: 'info',
      component: Info,
      children: [
        {
          path: "messagecenter", //消息中心
          name: "Messagecenter", component: Messagecenter
        },
        {
          path: "usermanagement", //用户管理
          name: "Usermanagement", component: Usermanagement
        },
        {
          path: "storemanagement/storeinformation", //门店-门店信息
          name: "Storeinformation", component: Storeinformation
        },
        {
          path: "storemanagement/StoreBuilding", //门店-创建门店
          name: "StoreBuilding", component: StoreBuilding
        },
        {
          path: "storemanagement/servicemanagement", //门店-服务管理
          name: "Servicemanagement", component: Servicemanagement
        },
        {
          path: "storemanagement/order", //门店-订单管理
          name: "Order", component: Order
        },
        {
          path: "storemanagement/commodity/pet", //门店-商品-宠物
          name: "Commoditypet", component: Commoditypet
        },
        {
          path: "storemanagement/commodity/foot", //门店-商品-食品
          name: "Commodityfoot", component: Commodityfoot
        },
        {
          path: "storemanagement/commodity/articles", //门店-商品-用品
          name: "CommodityArticles", component: CommodityArticles
        }
      ]
    }
  ]
})
