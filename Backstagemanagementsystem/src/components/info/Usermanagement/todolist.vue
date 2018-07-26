<template>
    <div>
        <el-button type="primary" @click="async_getEmpsByPage" plain>刷新数据</el-button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <el-select style="float:right;" v-model="value" placeholder="默认-全部用户" @change="mydaya">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
        <div style="height:20px;">

        </div>
        <el-table :data="Todos" style="width: 100%" border>
            <el-table-column prop="userAcount" label="账户" width="160">
            </el-table-column>
            <el-table-column prop="userPhone" label="手机号" width="160">
            </el-table-column>
            <el-table-column prop="userName" label="姓名" width="160">
            </el-table-column>
            <el-table-column prop="userType" label="登录类型" width="160">
            </el-table-column>
            <el-table-column prop="userStatus" label="状态" width="160">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">


                    <el-button size="mini" type="primary" @click="bianjis(scope.$index,scope.row)" style="margin-right: 10px" icon="el-icon-edit">编辑</el-button>
                    <el-dialog title="编辑" :visible.sync="centerDialogVisible" width="30%" center>

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
                    <el-button size="mini" type="danger" @click="handleDeletes(scope.$index, scope.row)" icon="el-icon-delete">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="count">
          </el-pagination>
      </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      options: [
        {
          value: "全部用户",
          label: "全部用户"
        },
        {
          value: "平台管理员",
          label: "平台管理员"
        },
        {
          value: "门店管理员",
          label: "门店管理员"
        }
      ],
      value: "",
      Todos: [],
      curPage: 1,
      eachPage: 5,
      maxPage: 0,
      count: 0,
      index: 5,
      centerDialogVisible: false,
      userAcount: "",
      userPhone: "",
      userName: "",
      userType: "",
      userStatus: "",
      idindex: 0
    };
  },
  created() {
    this.async_getEmpsByPage("全部用户");
  },
  watch: {
    curPage() {
      //监听curPage
      this.async_getEmpsByPage("全部用户");
    },
    eachPage() {
      //监听eachPage
      this.async_getEmpsByPage("全部用户");
    }
  },
  methods: {
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    setCurPage(curPage) {
      this.curPage = curPage;
    },
    setEachPage(eachPage) {
      this.curPage = 1;
      this.eachPage = eachPage;
    },
    mydaya() {
      //切换用户类型
      this.async_getEmpsByPage(this.value);
    },
    async async_getEmpsByPage(data) {
      //you 平台-门店 my 宠物
      document.getElementById("zhuanquan").style.display = "block";
      let datas = await fetch("/user/list", {
        //这个是当前店主的订单-门店管理员
        method: "post",
        body: JSON.stringify({
          curPage: this.curPage,
          eachPage: this.eachPage,
          myuser: data //店家账号
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      this.curPage = datas.curPage;
      this.eachPage = datas.eachPage;
      this.count = datas.count;
      this.maxPage = datas.maxPage;
      this.Todos = datas.rows; //渲染数据
      document.getElementById("zhuanquan").style.display = "none";
    },
    bianjis(index, row) {
      this.centerDialogVisible = true;
      this.userAcount = row.userAcount;
      this.userPhone = row.userPhone;
      this.userName = row.userName;
      this.userType = row.userType;
      this.userStatus = row.userStatus;
      this.idindex = row._id;
    },
    async tianjia() {
      //修改管理
      console.log(this.idindex);
      let datas = await fetch("/user/set", {
        //这个是删除用户
        method: "post",
        body: JSON.stringify({
          _id: this.idindex,
          userAcount: this.userAcount, //账号
          userPwd: this.userPwd, //密码
          userPhone: this.userPhone, //电话
          userName: this.userName, //昵称
          userType: this.userType, //角色
          userStatus: this.userStatus //状态
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      console.log(datas);
      this.async_getEmpsByPage("全部用户");
      this.centerDialogVisible = false;
    },
    async handleDeletes(index, row) {
      let datas = await fetch("/user/sets", {
        //这个是删除用户
        method: "post",
        body: JSON.stringify({
          _id: row._id
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      console.log(datas);
      this.async_getEmpsByPage("全部用户");
    }
  }
};
</script>
<style>
</style>