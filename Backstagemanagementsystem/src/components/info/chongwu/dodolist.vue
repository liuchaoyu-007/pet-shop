<template>
    <div>
        <el-button type="primary" style="margin:20px;" @click="shuxin" plain>刷新数据</el-button>
        <template>
            <el-table :data="Todos" border style="width: 100%">
                <el-table-column prop="memberuser" label="账号" width="150" align="center">
                </el-table-column>
                <el-table-column prop="memberpassword" label="密码" width="120" align="center">
                </el-table-column>
                <el-table-column prop="memberPhone" label="电话" width="120" align="center">
                </el-table-column>
                <el-table-column prop="memberAcount" label="昵称" width="120" align="center">
                </el-table-column>
                <el-table-column prop="memberName" label="真实姓名" width="150" align="center">
                </el-table-column>
                <el-table-column prop="memberArea" label="区域" width="200" align="center">
                </el-table-column>
                <el-table-column prop="memberPoint" label="积分" width="120" align="center">
                </el-table-column>
                <el-table-column prop="vip" label="会员" width="120" align="center">
                </el-table-column>
                <el-table-column label="操作" width="200" align="center" >
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="bianji(scope.$index,scope.row)"  icon="el-icon-edit">编辑</el-button>
                        <el-dialog title="宠主管理" :visible.sync="centerDialogVisible" width="30%" center>
                            <div>
                                <span>账户</span>                                
                                <el-input maxlength="9" v-model="memberuser" size="mini" placeholder="请输入账户"></el-input>
                            </div>
                            <div>
                                <span>密码</span>
                                <el-input maxlength="9" v-model="memberpassword"  size="mini" placeholder="请输入账户"></el-input>
                            </div>
                            <div>
                                <span>电话</span>
                                <el-input maxlength="9" v-model="memberPhone"  size="mini" placeholder="请输入账户"></el-input>
                            </div>
                            <div>
                                <span>昵称</span>
                                <el-input maxlength="9" v-model="memberAcount"  size="mini" placeholder="请输入账户"></el-input>
                            </div>
                            <div>
                                <span>真实姓名</span>
                                <el-input maxlength="9" v-model="memberName"  size="mini" placeholder="请输入账户"></el-input>
                            </div>
                        
                            <div>
                                <span>区域</span>
                                <el-input maxlength="9" v-model="memberArea"  size="mini" placeholder="请输入账户"></el-input>
                            </div>

                            <div>
                                <span>积分</span>
                                <el-input maxlength="9" v-model="memberPoint"  size="mini" placeholder="请输入账户"></el-input>
                            </div>
                            <div>
                                <span>会员</span>
                                <el-input maxlength="9" v-model="haveapet"  size="mini" placeholder="请输入账户"></el-input>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="centerDialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="tianjia">确 定</el-button>
                            </span>
                        </el-dialog>
                        <el-button size="mini" type="danger" @click="shanchu(scope.row)" icon="el-icon-delete">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template>
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
      centerDialogVisible: false,
      memberuser: "",
      memberpassword: "",
      memberPhone: "",
      memberAcount: "",
      memberName: "",
      menberCard: "",
      memberArea: "",
      memberPoint: "",
      haveapet: "",
      idindex: 0,
      Todos: [],
      curPage: 1,
      eachPage: 5,
      maxPage: 0,
      count: 0
    };
  },
  watch: {
    curPage() {
      //监听curPage
      this.async_getEmpsByPage("宠物用户");
    },
    eachPage() {
      //监听eachPage
      this.async_getEmpsByPage("宠物用户");
    }
  },
  created() {
    this.async_getEmpsByPage("宠物用户");
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
    shuxin() {
      this.async_getEmpsByPage("宠物用户");
    },
    // ...mapMutations("chongwu", ["shanchu"]),
    async async_getEmpsByPage(data) {
      document.getElementById("zhuanquan").style.display = "block";
      console.log(data);
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
    async shanchu(row) {
      let datas = await fetch("/user/setuserapp", {
        //这个删除宠物用户
        method: "post",
        body: JSON.stringify({
          memberuser: row.memberuser //店家账号
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      this.async_getEmpsByPage("宠物用户");
    },
    bianji(index, row) {
      this.centerDialogVisible = true;
      this.memberuser = row.memberuser;
      this.memberpassword = row.memberpassword;
      this.memberPhone = row.memberPhone;
      this.memberAcount = row.memberAcount;
      this.memberName = row.memberName;
      this.memberArea = row.memberArea;
      this.memberPoint = row.memberPoint;
      this.haveapet = row.vip;
      this.idindex = row._id;
    },
    async tianjia() {
      this.centerDialogVisible = false;
      let datas = await fetch("/user/setuserapps", {
        //这个修改宠物用户
        method: "post",
        body: JSON.stringify({
          _id: this.idindex, //id
          memberuser: this.memberuser, //账号
          memberpassword: this.memberpassword, //密码
          memberPhone: this.memberPhone, //电话
          memberAcount: this.memberAcount, //昵称
          memberName: this.memberName, //真实姓名
          memberArea: this.memberArea, //地址
          memberPoint: this.memberPoint, //积分
          vip: this.haveapet //vip
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      this.async_getEmpsByPage("宠物用户");
    }
  }
};
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>