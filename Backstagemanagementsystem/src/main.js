import Vue from 'vue'
// import wrap from './components/todos/wrap.vue'
import APP from './App.vue'
import router from './router.js'//路由
// import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



import store from "./store.js"


Vue.config.productionTip = false

new Vue({
  render: h => h(APP),
  router,
  store
}).$mount('#app')
