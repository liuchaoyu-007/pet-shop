
export default {
    namespaced: true,
    state: {
        todos: [{
            id: 0,
            userAcount: '123',
            userPhone: '12345678911',
            userName: ' 王小虎',
            userType: "平台管理员",
            userStatus: "申请中"

        }, {
            id: 1,
            userAcount: '123',
            userPhone: '12345678911',
            userName: ' 王小虎',
            userType: "平台管理员",
            userStatus: "申请中"
        }, {
            id: 2,
            userAcount: '123',
            userPhone: '12345678911',
            userName: ' 王小虎',
            userType: "平台管理员",
            userStatus: "申请中"
        }, {
            id: 3,
            userAcount: '123',
            userPhone: '12345678911',
            userName: ' 王小虎',
            userType: "平台管理员",
            userStatus: "申请中"
        }
        ],
        index: 4,
    },
    mutations: {
        handleDelete(state, index) { //删除
            console.log(index)
            for (let i = 0; i < state.todos.length; i++) {
                if (state.todos[i].id == index.id) {
                    if (confirm(`
                         确认删除改商品吗？
                         编号:${state.todos[i].id}
                         账户:${state.todos[i].userAcount}
                         手机号:${state.todos[i].userPhone}
                         姓名:${state.todos[i].userName}
                         登录类型:${state.todos[i].userType}
                         状态:${state.todos[i].userStatus}
                       `)) {
                        state.todos.splice(i, 1)
                        console.log(state.todos)
                    } else {
                        console.log("取消")
                    }
                }
            }
        },


    },

    getters: {
        Todos(state) {
            return state.todos
        }
    }

}