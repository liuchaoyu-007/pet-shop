import Vue from 'vue'
import Router from 'vue-router'
// import Login from "./components/login.vue"//登陆界面
import Info from "./components/info.vue"//导航首页
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'info',
      component: Info
    },
  ]
})
