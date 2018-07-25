export default {
  namespaced: true,
  state: {
    rows: [],
  },

  mutations: {

  },

  actions: {
    async async_getEmpsByPage({ state, commit }) {
      const data = await fetch("/emps/getEmpsByPage", {
        method: "post",
        body: JSON.stringify({
          curPage: state.curPage,
          eachPage: state.eachPage
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      commit("getEmpsByPage", data)
    },
  }
}