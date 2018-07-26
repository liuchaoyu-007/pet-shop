<template>
  <div>
    <div class="header-s">
      <div style="margin-left:8px;" class="header-sdiv">
        <el-button type="primary" plain @click="pdtj">添加订单</el-button>
        <el-dialog title="添加订单" :visible.sync="dialogFormVisible" center modal class="add">
          <el-form :model="form">
            <el-form-item label="店家账号" :label-width="formLabelWidth">
              <el-input v-model="form.storesure" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="店家门店" :label-width="formLabelWidth">
              <el-input v-model="form.storename" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="订单用户" :label-width="formLabelWidth">
              <el-input v-model="form.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="订单时间" :label-width="formLabelWidth">
              <el-input v-model="form.usertime" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品名称" :label-width="formLabelWidth">
              <el-input v-model="form.userpsrum" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" :label-width="formLabelWidth">
              <el-input v-model="form.usernum" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品单价" :label-width="formLabelWidth">
              <el-input v-model="form.userprice" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品总价" :label-width="formLabelWidth">
              <el-input v-model="form.userzong" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品运费" :label-width="formLabelWidth">
              <el-input v-model="form.useryou" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品地址" :label-width="formLabelWidth">
              <el-input v-model="form.userdiqu" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="tianjia" :plain="true">确 定</el-button>
          </div>
        </el-dialog>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button type="primary" @click="async_getEmpsByPage" plain>刷新数据</el-button>
      </div>
      <div style="float:right;" class="header-sdiv">
        <el-select v-model="value" placeholder="默认-显示全部" @change="typexzs" >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div>
        <el-table
        :data="lsrows"
        border
        style="width: 100%"> 
        <el-table-column
        prop="usertime"
        label="订单时间"
        sortable
        align="center"
        width="160">
        </el-table-column>
        <el-table-column
        prop="storesure"
        label="店主账号"
        align="center"
        width="160">
        </el-table-column>
        <el-table-column
        prop="storename"
        label="店主门店"
        align="center"
        width="160">
        </el-table-column>
        <el-table-column
        prop="username"
        label="宠物用户"
        align="center"
        width="160">
        </el-table-column>
        <el-table-column
        prop="usernum"
        label="购买数量"
        align="center"
        sortable
        width="160">
        </el-table-column>
        <el-table-column
        prop="userprice"
        label="购买单价"
        align="center"
        sortable
        width="160">
        </el-table-column>
        <el-table-column
        prop="userzong"
        label="购买总价"
        align="center"
        sortable
        width="160">
        </el-table-column>
        <el-table-column
        prop="useryou"
        label="订单运费"
        align="center"
        sortable
        width="160">
        </el-table-column>
        <el-table-column
        prop="userdiqu"
        align="center"
        label="订单发往地"
        width="160">
        </el-table-column>
        <el-table-column
        prop="state"
        label="是否发货"
        align="center"
        width="160">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="180"
        align="center"
        >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handfy(scope.$index, scope.row)" icon="el-icon-edit">编辑</el-button>
            <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)" :plain="true" icon="el-icon-delete">删除</el-button>
        </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="data" id="adds">
      <el-card class="box-card">
        <p style="text-align: center;margin: 10px;color: rgb(53, 63, 68);font-size:30px;">订单详情</p>
        <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="店家账号">
            <el-input v-model="data.storesure" clearable :disabled="true">
            </el-input>
          </el-form-item>
          <el-form-item label="店家店名">
            <el-input v-model="data.storename" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="用户名字">
            <el-input v-model="data.username" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="订单时间">
            <el-input v-model="data.usertime" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="商品名称">
            <el-input v-model="data.userpsrum" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="商品数量">
            <el-input v-model="data.usernum" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="商品单价">
            <el-input v-model="data.userprice" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="商品总价">
            <el-input v-model="data.userzong" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="订单运费">
            <el-input v-model="data.useryou" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="订单发往地">
            <el-input v-model="data.userdiqu" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="是否发货">
            <el-radio-group v-model="data.state">
              <el-radio label="yes"></el-radio>
              <el-radio label="no"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="queding" style="margin-left:26%;" :plain="true">确定</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
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
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions, mapMutations } = createNamespacedHelpers("emps");

export default {
  data() {
    return {
      rows: [],
      lsrows: [],
      curPage: 1,
      eachPage: 5,
      maxPage: 0,
      count: 0,
      sousuo: "",
      options: [
        {
          value: "1",
          label: "显示全部"
        },
        {
          value: "2",
          label: "已发货"
        },
        {
          value: "3",
          label: "未发货"
        }
      ],
      value: "",
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        storesure: "", //这个订单属于那个店家的（店家账号）
        storename: "", //这个订单属于那个门店
        username: "", //这个订单属于那个用户
        usertime: "", //这个订单购买时间
        userpsrum: "", //这个订单购买的什么商品
        usernum: "", //这个订单购买数量
        userprice: "", //这个订单购买单价
        userzong: "", //这个订单购买总价
        useryou: "", //这个订单运费
        userdiqu: "", //这个订单发往地
        state: "no" //这个订单是否发货
      },
      formLabelWidth: "120px",
      data: {
        id: "", //id
        storesure: "", //这个订单属于那个店家的（店家账号）
        storename: "", //这个订单属于那个门店
        username: "", //这个订单属于那个用户
        usertime: "", //这个订单购买时间
        userpsrum: "", //这个订单购买的什么商品
        usernum: "", //这个订单购买数量
        userprice: "", //这个订单购买单价
        userzong: "", //这个订单购买总价
        useryou: "", //这个订单运费
        userdiqu: "", //这个订单发往地
        state: "no" //这个订单是否发货
      }
    };
  },
  created() {
    this.async_getEmpsByPage();
  },
  watch: {
    curPage() {
      //监听curPage
      this.async_getEmpsByPage();
    },
    eachPage() {
      //监听eachPage
      this.async_getEmpsByPage();
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
      console.log(this.curPage)
    },
    setEachPage(eachPage) {
      this.curPage = 1;
      this.eachPage = eachPage;
      console.log(this.eachPage)
    },
    handfy(index, row) {
      //详情
      document.getElementById("adds").style.display = "block";
      for (let i = 0; i < this.lsrows.length; i++) {
        if (this.lsrows[i]._id == row._id) {
          this.data.id = this.lsrows[i]._id;
          this.data.storesure = this.lsrows[i].storesure; //这个订单属于那个店家的（店家账号）
          this.data.storename = this.lsrows[i].storename; //这个订单属于那个门店
          this.data.username = this.lsrows[i].username; //这个订单属于那个用户(账号)
          this.data.usertime = this.lsrows[i].usertime; //这个订单购买时间
          this.data.userpsrum = this.lsrows[i].userpsrum; //这个订单购买的什么商品
          this.data.usernum = this.lsrows[i].usernum; //这个订单购买数量
          this.data.userprice = this.lsrows[i].userprice; //这个订单购买单价
          this.data.userzong = this.lsrows[i].userzong; //这个订单购买总价
          this.data.useryou = this.lsrows[i].useryou; //这个订单运费
          this.data.userdiqu = this.lsrows[i].userdiqu; //这个订单发往地
          this.data.state = this.lsrows[i].state; //这个订单是否发货
        }
      }
    },
    queding() {
      //修改
      let dataa = fetch("/Ordermanagement/hot", {
        method: "post",
        body: JSON.stringify(this.data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      this.$message({
        message: "修改成功",
        type: "success"
      });
      this.async_getEmpsByPage();
      document.getElementById("adds").style.display = "none";
    },
    handleDelete(index, row) {
      //删除
      this.$confirm("您将要删除该订单, 是否继续?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let dataa = fetch("/Ordermanagement/sc", {
            method: "post",
            body: JSON.stringify({
              id: row._id
            }),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(res => res.json());
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.async_getEmpsByPage();
        })
        .catch(() => {});
    },
    typexzs() {
      //筛选
      const value = this.$data.value;
      let data = [];
      if (value == 1) {
        //显示全部
        for (let i = 0; i < this.rows.length; i++) {
          data.push(this.rows[i]);
        }
      } else if (value == 2) {
        //显示已发货
        for (let i = 0; i < this.rows.length; i++) {
          if (this.rows[i].state == "yes") {
            data.push(this.rows[i]);
          }
        }
      } else {
        //显示未发货
        for (let i = 0; i < this.rows.length; i++) {
          if (this.rows[i].state == "no") {
            data.push(this.rows[i]);
          }
        }
      }
      this.lsrows = data;
    },
    pdtj() {
      // if (localStorage.userType == "门店管理员") {
      this.dialogFormVisible = true;
      // } else {
      //   this.$alert("您不是门店管理人员，无法添加订单", "警告", {
      //     confirmButtonText: "确定"
      //   });
      // }
    },
    tianjia() {
      //添加订单
      this.dialogFormVisible = false;
      const data = {
        storesure: this.form.storesure, //这个订单属于那个店家的（店家账号）
        storename: this.form.storename, //这个订单属于那个门店
        username: this.form.username, //这个订单属于那个用户(账号)
        usertime: this.form.usertime, //这个订单购买时间
        userpsrum: this.form.userpsrum, //这个订单购买的什么商品
        usernum: this.form.usernum, //这个订单购买数量
        userprice: this.form.userprice, //这个订单购买单价
        userzong: this.form.userzong, //这个订单购买总价
        useryou: this.form.useryou, //这个订单运费
        userdiqu: this.form.userdiqu, //这个订单发往地
        state: "no" //这个订单是否发货
      };
      let dataa = fetch("/Ordermanagement/add", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      this.$message({
        message: "添加成功",
        type: "success"
      });
      this.async_getEmpsByPage();
    },
    async async_getEmpsByPage() {
      document.getElementById("zhuanquan").style.display = "block";
      if (localStorage.userType == "门店管理员") {
        let data = await fetch("/Ordermanagement/Ordermanagement", {
          //这个是当前店主的订单-门店管理员
          method: "post",
          body: JSON.stringify({
            curPage: this.curPage,
            eachPage: this.eachPage,
            storesure: localStorage.userAcount //店家账号
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json());
        this.curPage = data.curPage;
        this.eachPage = data.eachPage;
        this.count = data.count;
        this.maxPage = data.maxPage;
        this.rows = data.rows;
        this.lsrows = this.rows;
      } else {
        let data = await fetch("/Ordermanagement/Ordermanagementtype", {
          //这个是所有店主的订单-平台管理员
          method: "post",
          body: JSON.stringify({
            curPage: this.curPage,
            eachPage: this.eachPage
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json());
        this.curPage = data.curPage;
        this.eachPage = data.eachPage;
        this.count = data.count;
        this.maxPage = data.maxPage;
        this.rows = data.rows;
        this.lsrows = this.rows;
      }
      document.getElementById("zhuanquan").style.display = "none";
    }
  }
};
</script>

<style>
.data {
  position: fixed;
  top: 100px;
  left: 33%;
  width: 500px;
  height: 500px;
  border: 1px solid #1296db;
  overflow-y: scroll;
  display: none;
}
.el-dialog--center {
  margin: 0 auto;
  height: 480px;
  overflow-y: scroll;
  margin-top: -100px;
}

.el-dialog--center {
  display: block;
}
.el-pagination {
  text-align: center;
}
.header-s {
  height: 50px;
  margin: 8px 5px;
  line-height: 50px;
}
.header-sdiv {
  display: inline-block;
}
</style>