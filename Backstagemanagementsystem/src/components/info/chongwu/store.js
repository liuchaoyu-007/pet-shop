
export default {
  namespaced: true,
  state: {
    todos: [{
      id: 0,
      memberuser: '123',//账号
      memberpassword: '123456',//密码
      memberPhone: '7237387',//电话
      memberAcount: '普陀',//昵称
      memberName: '金沙江',//真实姓名
      menberCard: '200333',//会员卡
      memberArea: "上海市普陀区金沙江路",//区域
      memberPoint: '100',//积分
      haveapet:"vip"//会员
    }, {
      id: 1,
      memberuser: '123',//账号
      memberpassword: '123456',//密码
      memberPhone: '7237387',//电话
      memberAcount: '普陀',//昵称
      memberName: '金沙江',//真实姓名
      menberCard: '200333',//会员卡
      memberArea: "上海市普陀区金沙江路",//区域
      memberPoint: '100',//积分
      haveapet:"vip"//会员

    }, {
      id: 2,
      memberuser: '123',//账号
      memberpassword: '123456',//密码
      memberPhone: '7237387',//电话
      memberAcount: '普陀',//昵称
      memberName: '金沙江',//真实姓名
      menberCard: '200333',//会员卡
      memberArea: "上海市普陀区金沙江路",//区域
      memberPoint: '100',//积分
      haveapet:'VIP'//会员
    }, {
      id: 3,
      memberuser: '123',//账号
      memberpassword: '123456',//密码
      memberPhone: '7237387',//电话
      memberAcount: '普陀',//昵称
      memberName: '金沙江',//真实姓名
      menberCard: '200333',//会员卡
      memberArea: "上海市普陀区金沙江路",//区域
      memberPoint: '100',//积分
      haveapet:"vip"//会员
    }
    ],
    index: 3
  },
  mutations: {
    shanchu(state, index) { //删除用户
      console.log(index)
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id == index.id) {
          if (confirm(`
                确认删除改商品吗？
                编号:${state.todos[i].id}
                账号:${state.todos[i].memberuser}
                密码:${state.todos[i].memberpassword}
                电话:${state.todos[i].memberPhone}
                昵称:${state.todos[i].memberAcount}
                真实姓名:${state.todos[i].memberName}
                会员卡:${state.todos[i].menberCard}
                区域:${state.todos[i].memberArea}
                积分:${state.todos[i].memberPoint}
                会员:${state.todos[i].haveapet}
              `)) {
            state.todos.splice(i, 1)
            console.log(state.todos)
          } else {
            console.log("取消")
          }
        }
      }
    }
  },
  getters: {
    Todos(state) {
      return state.todos
    },
  },
  actions: {

  }

}