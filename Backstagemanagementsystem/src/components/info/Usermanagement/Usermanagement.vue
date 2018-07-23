<template>
  <el-card class="box-card">
    <el-menu mode="horizontal">

      <el-autocomplete prefix-icon="el-icon-search" placeholder="请输入内容"></el-autocomplete>

    </el-menu>


    <template>
      <el-table :data="todos" style="width: 100%">
        <el-table-column prop="userAcount" label="账户" width="100%">
        </el-table-column>
        <el-table-column prop="userPhone" label="手机号" width="100%">
        </el-table-column>
        <el-table-column prop="userName" label="姓名" width="100%">
        </el-table-column>
        <el-table-column prop="userType" label="登录类型" width="100%">
        </el-table-column>
        <el-table-column prop="userStatus" label="状态" width="100%">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">


            <el-button size="mini" type="primary" @click="bianji(scope.$index,scope.row)" style="margin-right: 10px">权限管理</el-button>
            <el-dialog title="权限管理" :visible.sync="centerDialogVisible" width="30%" center>

              <div>
                <span>账户</span>
                <el-input maxlength="9" size="mini" v-model="userAcount" placeholder="请输入账户"></el-input>
              </div>
              <div>
                <span>手机号</span>
                <el-input maxlength="11" size="mini" v-model="userPhone" placeholder="请输入手机号"></el-input>
              </div>

              <div>
                <span>姓名</span>
                <el-input maxlength="9" size="mini" v-model="userName" placeholder="请输入姓名"></el-input>
              </div>
              <div>
                <p>登录类型</p>
                <el-radio v-model="userType" label="平台管理员">平台管理员</el-radio>
                <el-radio v-model="userType" label="门店管理员">门店管理员</el-radio>
              </div>

              <div>
                <p>状态</p>
                  <el-radio v-model="userStatus" label="申请中">申请中</el-radio>
                  <el-radio v-model="userStatus" label="可用">可用</el-radio>
                  <el-radio v-model="userStatus" label="不可用">不可用</el-radio>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="tianjia">确 定</el-button>
              </span>
            </el-dialog>

            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </template>



  </el-card>
</template>

<script>
  export default {
    data() {
      return {
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
        index: 5,
        centerDialogVisible: false,
        userAcount: "",
        userPhone: "",
        userName: "",
        userType: "",
        userStatus: "",
        idindex: 0
      }
    },
    methods: {
      bianji(idindex, row) { //获取输入框的值
        this.centerDialogVisible = true
        this.userAcount = row.userAcount
        this.userPhone = row.userPhone
        this.userName = row.userName
        this.userType = row.userType
        this.userStatus = row.userStatus
        this.idindex = idindex
      },
      tianjia() {//修改管理
        if (this.userAcount != "" && this.userPhone != "" && this.userName != "" && this.userType != "" && this.userStatus != "") {
          for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == this.idindex) {
              this.todos[i].userAcount = this.userAcount
              this.todos[i].userPhone = this.userPhone
              this.todos[i].userName = this.userName
              this.todos[i].userType = this.userType
              this.todos[i].userStatus = this.userStatus
            }
          }
        } else {
          alert("输入错误")
        }
        this.centerDialogVisible = false
      },
      handleDelete(index) { //删除
        for (let i = 0; i < this.todos.length; i++) {
          if (this.todos[i].id == index) {
            if (confirm(`
                   确认删除改商品吗？
                   编号:${this.todos[i].id}
                   账户:${this.todos[i].userAcount}
                   手机号:${this.todos[i].userPhone}
                   姓名:${this.todos[i].userName}
                   登录类型:${this.todos[i].userType}
                   状态:${this.todos[i].userStatus}
                 `)) {
              this.todos.splice(index, 1)
            } else {
              console.log("取消")
            }
          }
        }
      },


    }
  }
</script>

<style>
</style>