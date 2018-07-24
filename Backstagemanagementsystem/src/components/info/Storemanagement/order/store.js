export default {
  namespaced: true,
  state: {
    rows: [],
  },

  mutations: {
    getEmpsByPage(state, payload) {
      console.log("in")
      Object.assign(state.rows, payload)
    },
    setCurPage(state, curPage) {
      state.curPage = curPage
    },
    setEachPage(state, eachPage) {
      state.curPage = 1
      state.eachPage = eachPage
    },
    typexz(state, value) {
      let data = [];
      if (value == 1) {//显示全部
        return state.rows
      } else if (value == 2) {//显示已发货
        for (let i = 0; i < state.rows.length; i++) {
          if (state.rows[i].state == "yes") {
            data.push(state.rows[i])
          }
        }
      } else {//显示未发货
        for (let i = 0; i < state.rows.length; i++) {
          if (state.rows[i].state == "no") {
            data.push(state.rows[i])
          }
        }
      }
      Object.assign(state.rows, data)
    },
    tianjias(state, datas) {
      const data = fetch("/Ordermanagement/add", {
        method: "post",
        body: JSON.stringify(datas),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      Object.assign(state.rows, data)
    },
    scEmpsByPage() {
      this.async_getEmpsByPage()
    }
  },
  actions: {
    async async_getEmpsByPage({ commit }) {
      let data;
      if (localStorage.userType == "门店管理员") {
        data = await fetch("/Ordermanagement/Ordermanagement", {//这个是当前店主的订单-门店管理员
          method: "post",
          body: JSON.stringify({
            storesure: localStorage.userAcount,//店家账号
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json());
        console.log(data)
        commit("getEmpsByPage", data)
      } else {
        data = await fetch("/Ordermanagement/Ordermanagementtype", {//这个是所有店主的订单-平台管理员
          method: "post",
          body: JSON.stringify(),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json());
        console.log(data)
        commit("getEmpsByPage", data)
      }
    },
  }
}