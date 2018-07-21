export default {
  namespaced: true,
  state: {
    curPage: 1,
    eachPage: 5,
    maxPage: 0,
    count: 0,
    rows: [],
    mydata: {}
  },

  mutations: {
    getEmpsByPage(state, payload) {
      Object.assign(state, payload)
    },
    setCurPage(state, curPage) {
      state.curPage = curPage
    },
    setEachPage(state, eachPage) {
      state.curPage = 1
      state.eachPage = eachPage
    },
    scEmpsByPage(state, payload) {
      const data = fetch("/Ordermanagement/Ordermanagement", {
        method: "post",
        body: JSON.stringify({
          storesure: payload,
          curPage: state.curPage,
          eachPage: state.eachPage
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      Object.assign(state, data)
    }
  },
  actions: {
    async async_getEmpsByPage({ state, commit }) {
      const data = await fetch("/Ordermanagement/Ordermanagement", {
        method: "post",
        body: JSON.stringify({
          storesure:localStorage.userName,//店家姓名
          page: state.curPage,
          rows: state.eachPage
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      commit("getEmpsByPage", data)
    },
  }
}