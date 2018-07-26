<template>
<div>
  <div style="margin:20px 0;">
    <div style="margin-left:20px;display:inline-block;">
            <el-button type="primary" @click="addget" plain>新增服务</el-button>
        </div>
          <div style="margin-left:20px;display:inline-block;">
              <el-button type="primary" @click="asy" plain>刷新数据</el-button>
          </div>
      </div>
  <div>
    <div id="dataxiugai">
      <p style="text-align: center;margin: 10px;color: rgb(53, 63, 68);font-size:30px;">门店信息</p>
        <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="门店名称:">
            <el-input v-model="form.shopName" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="联系人:">
            <el-input v-model="form.shopContacts" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="法人:">
            <el-input v-model="form.shopCorporate" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="联系电话:">
            <el-input v-model="form.shopTel" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="营业执照号码:">
            <el-input v-model="form.shopLicenceNum" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="营业执照地址:">
            <el-input v-model="form.shopAdd" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="店铺描述:">
            <el-input v-model="form.shopDescription" clearable>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="quixao">取 消</el-button>
            <el-button type="primary" @click="confirmModify()" :plain="true">确 定</el-button>
          </el-form-item>
        </el-form>
    </div>
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- 门店信息框 -->
        <el-tab-pane label="门店信息" name="first">
            <el-table
            :data="tableData"
            border
            stripe
            style="width: 100%">
            <el-table-column
              prop="useradd"
              label="所属账号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="shopName"
              label="门店名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="shopContacts"
              label="联系人"
              width="180">
            </el-table-column>
            <el-table-column
              prop="shopCorporate"
              label="法人"
              width="180">
            </el-table-column>
            <el-table-column
              prop="shopTel"
              label="联系电话"
              width="180">
            </el-table-column>
            <el-table-column
                label="操作"
                width="200"
                fixed="right"
                >
                <template slot-scope="scope" >
                  <el-button size="mini" icon="el-icon-edit" @click="modify(scope.row)">编辑</el-button>
                    <!-- 门店信息 -->
                    <el-button type="danger" size="mini" icon="el-icon-delete" @click="remove(scope.$index,scope.row)" :plain="true">删除</el-button>
                </template>
            </el-table-column>
          </el-table>
           <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="curPage"
            :page-sizes="[5, 10, 20, 30]"
            :page-size="eachPage"
            layout="total, sizes, prev, pager, next, jumper"
            :total="count">
          </el-pagination>
        </el-tab-pane>
        <!-- 营业执照信息框 -->
        <el-tab-pane label="营业执照信息" name="second">
           <el-table
            :data="tableData"
            stripe
            border
            style="width: 100%">
            <el-table-column
              prop="shopLicenceNum"
              label="营业执照号码"
              width="180">
            </el-table-column>
            <el-table-column
              prop="shopAdd"
              label="营业执照地址"
              width="180">
            </el-table-column>
             <el-table-column
              label="营业执照图片"
              width="300">
              <template slot-scope="scope">
                <el-button
                  size="mini">
                  <img :src="scope.row.shopLicenceImg" style="width:250px;height:150px;" />
                </el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="shopDescription"
              label="店铺描述"
              width="300">
            </el-table-column>
            <el-table-column
                label="操作"
                width="100"
                >
                <template slot-scope="scope">
                    <el-button type="danger" size="mini" icon="el-icon-delete" @click="remove(scope.$index,scope.row)" :plain="true">删除</el-button>
                </template>
           </el-table-column>
          </el-table>
        </el-tab-pane>
        <!-- 店员信息框 -->
      </el-tabs>
    </template>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      curPage: 1, //当前页
      eachPage: 5, //总页数
      maxPage: 0, //每页显示条数
      count: 0, //总条数
      dialogFormVisible: false,
      form: {
        shopName: "",
        shopContacts: "",
        shopCorporate: "",
        shopAdd: "",
        shopTel: "",
        shopLicenceNum: "",
        shopAdd: "",
        shopDescription: "",
        delivery: false
      },
      formLabelWidth: "120px",
      activeName: "first",
      input: ""
    };
  },
  created() {
    this.asy();
  },
  watch: {
    curPage() {
      //监听curPage
      this.asy();
    },
    eachPage() {
      //监听eachPage
      this.asy();
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
      console.log(this.curPage);
    },
    setEachPage(eachPage) {
      this.curPage = 1;
      this.eachPage = eachPage;
      console.log(this.eachPage);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClick1(row) {
      console.log(row);
    },
    remove(index, row) {
      this.$confirm("您将要删除该门店, 是否继续?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.more(row);
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.asy();
        })
        .catch(() => {});
    },
    async more(row) {
      let data2 = await fetch("/store/remove", {
        method: "post",
        body: JSON.stringify({
          id: row._id
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
    },
    async asy() {
      //门店查询
      document.getElementById("zhuanquan").style.display = "block";
      let type = localStorage.userType;
      let data = await fetch("/store/get", {
        //这个是当前店主的订单-门店管理员
        method: "post",
        body: JSON.stringify({
          curPage: this.curPage,
          eachPage: this.eachPage,
          useradd: localStorage.userAcount, //店家账号
          type: type
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      document.getElementById("zhuanquan").style.display = "none";
      this.curPage = data.curPage;
      this.eachPage = data.eachPage;
      this.count = data.count;
      this.maxPage = data.maxPage;
      this.tableData = data.rows;
    },
    quixao() {
      document.getElementById("dataxiugai").style.display = "none";
    },
    modify(scope) {
      //修改
      // this.dialogFormVisible = true;
      document.getElementById("dataxiugai").style.display = "block";
      console.log(document.getElementById("dataxiugai"));
      this.form.shopName = scope.shopName;
      this.form.shopContacts = scope.shopContacts;
      this.form.shopCorporate = scope.shopCorporate;
      this.form.shopAdd = scope.shopAdd;
      this.form.shopTel = scope.shopTel;
      this.form.shopLicenceNum = scope.shopLicenceNum;
      this.form.shopAdd = scope.shopAdd;
      this.form.shopDescription = scope.shopDescription;
      this.form.useradd = scope._id;
    },
    addget() {
      this.$router.push("/info/storemanagement/StoreBuilding");
    },
    async confirmModify() {
      //确认修改
      // this.dialogFormVisible = false;
      const modifyData = {
        useradd: this.form.useradd,
        shopName: this.form.shopName,
        shopContacts: this.form.shopContacts,
        shopCorporate: this.form.shopCorporate,
        shopAdd: this.form.shopAdd,
        shopTel: this.form.shopTel,
        shopLicenceNum: this.form.shopLicenceNum,
        shopAdd: this.form.shopAdd,
        shopDescription: this.form.shopDescription
      };
      let modifyData2 = await fetch("/store/modify", {
        method: "post",
        body: JSON.stringify(modifyData),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      this.$message({
        message: "修改成功",
        type: "success"
      });
      document.getElementById("dataxiugai").style.display = "none";
      this.asy();
    }
  }
};
</script>

<style>
#dataxiugai {
  /* display: none; */
  position: fixed;
  top: 30px;
  left: 32%;
  display: none;
  width: 500px;
  height: 500px;
  overflow-y: scroll;
  z-index: 99999999999999;
  background-color: white;
  border: 1px solid #409eff;
}
</style>


