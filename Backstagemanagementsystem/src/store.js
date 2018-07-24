import Vue from 'vue'
import Vuex from 'vuex'


import emps from "./components/info/Storemanagement/order/store"//订单界面
import Commodity from "./components/info/Storemanagement/Commodity/store"//订单界面

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    emps,
    Commodity
  }
})
