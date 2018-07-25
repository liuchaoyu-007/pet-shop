import Vue from 'vue'
import Vuex from 'vuex'
import emps from "./components/info/Storemanagement/order/store"//订单界面
import Usermanagement from './components/info/Usermanagement/store' //用户管理
import chongwu from "./components/info/chongwu/store"
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    emps,
    Usermanagement,
    chongwu
  }
})
