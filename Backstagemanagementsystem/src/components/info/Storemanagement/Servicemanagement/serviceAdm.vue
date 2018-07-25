<template>
<div>
    <div style="margin:20px 0;">
        <div style="margin-left:20px;display:inline-block;">
            <el-button type="primary" @click="addService" plain>新增服务</el-button>
        </div>
        <div style="margin-left:20px;display:inline-block;">
            <el-button type="primary" @click="async_getEmpsByPage" plain>刷新数据</el-button>
        </div>
    </div>
    <div>
        <el-table
        :data="lsrows"
        border
        style="width: 100%">
        <el-table-column
            width="150"
            prop="serviceName"
            label="服务名称"
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="serviceType"
            label="服务类型"
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="serviceSchedule"
            label="服务时间段"
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="serviceCanFor"
            label="服务宠物体重范围"
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="serviceDetial"
            label="服务规格"
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="serviceTime"
            label="服务时长"
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="serviceLevel"
            label="服务员等级"
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="servicePrice"
            label="服务价格"
            >
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="180">
            <template slot-scope="scope">
                <el-button  @click="modifyService(scope.row)" size="mini" type="primary" icon="el-icon-edit" :plain="true">编辑</el-button>
                <el-button @click="deleteService(scope.row)" size="mini" type="danger" icon="el-icon-delete" :plain="true">删除</el-button>
            </template>
        </el-table-column>
        </el-table>
        
        <div class="addService"
            v-show="isShow">
            <i class="el-icon-close"  @click="quxiao"></i>
            <h3 style="text-align:center;margin-top:10px" >新增服务</h3>.
            <el-main>
            <el-form status-icon  class="demo-ruleForm">
                <el-form-item label="服务名称">
                    <el-input v-model="tableData.serviceName" style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item  label="服务类型">
                    <el-input v-model="tableData.serviceType" style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item label="服务时间">
                    <el-input v-model="tableData.serviceSchedule" style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item label="体重范围">
                    <el-input v-model="tableData.serviceCanFor" style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item label="服务规格">
                    <el-input v-model="tableData.serviceDetial" style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item label="服务时长">
                    <el-input v-model="tableData.serviceTime"  style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item label="服务等级">
                    <el-input v-model="tableData.serviceLevel" style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item label="服务价格">
                    <el-input v-model="tableData.servicePrice" style="width:300px;"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="confirmAdd" type="primary">添加</el-button>
                    <el-button  @click="quxiao">取消</el-button>
                </el-form-item>
                </el-form>
            </el-main>
        </div>
            <div class="addService"
            v-show="modify">
            <i class="el-icon-close"  @click="quxiao"></i>
            <h3 style="text-align:center;margin-top:10px" >修改服务</h3>.
            <el-main>
                <el-form status-icon  class="demo-ruleForm">
                    <el-form-item label="服务名称">
                        <el-input  v-model="tableData.serviceName" style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item  label="服务类型">
                        <el-input v-model="tableData.serviceType" style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="服务时间">
                        <el-input v-model="tableData.serviceSchedule" style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="体重范围">
                        <el-input v-model="tableData.serviceCanFor" style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="服务规格">
                        <el-input v-model="tableData.serviceDetial" style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="服务时长">
                        <el-input v-model="tableData.serviceTime"  style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="服务等级">
                        <el-input v-model="tableData.serviceLevel" style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="服务价格">
                        <el-input v-model="tableData.servicePrice" style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="confirmModifyService" type="primary">确认修改</el-button>
                        <el-button  @click="quxiao">取消</el-button>
                    </el-form-item>
                    </el-form>
                </el-main>
            </div>
        </div>
</div>
    
</template>
<script>
export default {
  data() {
    return {
      rows: [],
      lsrows: [],
      tableData: {
        serviceName: "",
        serviceType: "",
        serviceSchedule: "",
        serviceCanFor: "",
        serviceDetial: "",
        serviceTime: "",
        serviceLevel: "",
        servicePrice: ""
      },
      isShow: false,
      modify: false
    };
  },
  created() {
    this.async_getEmpsByPage();
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    fanhui() {
      this.$router.push("/info/storemanagement/servicemanagement");
    },
    addService() {
      this.isShow = true;
    },
    quxiao() {
      this.isShow = false;
      this.modify = false;
    },
    confirmAdd() {
      //添加服务
      const data = {
        storesure: localStorage.userId,
        serviceName: this.tableData.serviceName,
        serviceType: this.tableData.serviceType,
        serviceSchedule: this.tableData.serviceSchedule,
        serviceCanFor: this.tableData.serviceCanFor,
        serviceDetial: this.tableData.serviceDetial,
        serviceTime: this.tableData.serviceTime,
        serviceLevel: parseInt(this.tableData.serviceLevel),
        servicePrice: parseInt(this.tableData.servicePrice)
      };
      // console.log(data)
      let data1 = fetch("/serviceManagement/addService", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      this.quxiao(); //新增成功 隐藏窗口
      this.async_getEmpsByPage();
    },
    async async_getEmpsByPage() {
      //判断是门店管理员还是平台管理员员登陆 渲染相应的数据
      document.getElementById("zhuanquan").style.display = "block";
      if (localStorage.userType == "门店管理员") {
        let data = await fetch("/serviceManagement/storeService", {
          //这个是当前店主的服务
          method: "post",
          body: JSON.stringify({
            storesure: localStorage.userId //用户ID
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json());
        // console.log(data);
        this.rows = data;
        this.lsrows = this.rows;
      } else {
        let data = await fetch("/serviceManagement/platformService", {
          //这个是所有店主的服务-平台管理员
          method: "post",
          body: JSON.stringify(),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json());
        // console.log(data);
        this.rows = data;
        this.lsrows = this.rows;
      }
      document.getElementById("zhuanquan").style.display = "none";
    },
    deleteService(scope) {
      //删除服务
      this.$confirm("您将要删除该服务, 是否继续?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let id = { serviceId: scope._id };

          const datas = fetch("/serviceManagement/deleteService", {
            method: "post",
            body: JSON.stringify(id),
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
    modifyService(scope) {
      //修改服务
      this.modify = true;
      // console.log(scope)
      // let canvas=this.$refs.cvs;
      this.tableData.serviceName = scope.serviceName;
      this.tableData.serviceType = scope.serviceType;
      this.tableData.serviceSchedule = scope.serviceSchedule;
      this.tableData.serviceCanFor = scope.serviceCanFor;
      this.tableData.serviceDetial = scope.serviceDetial;
      this.tableData.serviceTime = scope.serviceTime;
      this.tableData.serviceLevel = scope.serviceLevel;
      this.tableData.servicePrice = scope.servicePrice;
      localStorage.serviceId = scope._id;
    },

    confirmModifyService() {
      //确认修改服务
      const data = {
        serviceId: localStorage.serviceId,
        serviceName: this.tableData.serviceName,
        serviceType: this.tableData.serviceType,
        serviceSchedule: this.tableData.serviceSchedule,
        serviceCanFor: this.tableData.serviceCanFor,
        serviceDetial: this.tableData.serviceDetial,
        serviceTime: this.tableData.serviceTime,
        serviceLevel: parseInt(this.tableData.serviceLevel),
        servicePrice: parseInt(this.tableData.servicePrice)
      };
      const datas = fetch("/serviceManagement/modifyService", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      this.$message({
        message: "修改成功",
        type: "success"
      });
      this.async_getEmpsByPage();
      this.quxiao();
    }
  }
};
</script>

<style>
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  width: 500px;
  height: 400px;
}
.addService {
  position: absolute;
  top: 100px;
  left: 500px;
  border-radius: 10px;
  background-color: #e9eef3;
}
.el-icon-close {
  float: right;
  margin: 5px 5px 0 0;
  cursor: pointer;
  color: #f56c6c;
}
</style>