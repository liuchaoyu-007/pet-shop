import Vue from 'vue'
// import wrap from './components/todos/wrap.vue'
import APP from './App.vue'
import router from './router.js'//路由
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import store from "./store.js"


import inputs from "./components/info/Usermanagement/inputs.vue"
import todolist from "./components/info/Usermanagement/todolist.vue"
import dodolist from "./components/info/chongwu/dodolist.vue"
Vue.component('inputs', inputs)
Vue.component('todolist', todolist)
Vue.component('dodolist', dodolist)

Vue.config.productionTip = false

new Vue({
  render: h => h(APP),
  router,
  store
}).$mount('#app')
