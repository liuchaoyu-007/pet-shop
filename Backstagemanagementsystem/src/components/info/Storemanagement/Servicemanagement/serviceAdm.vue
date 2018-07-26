<template> 
<div>
    <div style="margin:20px 0;">
        <div style="margin-left:20px;display:inline-block;">
            <el-button type="primary" @click="addService" plain >新增服务</el-button>
        </div>
        <div style="margin-left:20px;display:inline-block;">
            <el-button type="primary" @click="async_getEmpsByPage" plain >刷新数据</el-button>
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
             align="center"
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="serviceType"
            label="服务类型"
             align="center"
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="serviceSchedule"
            label="服务时间段"
             align="center"
             sortable
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="serviceCanFor"
            label="服务宠物体重范围"
             align="center"
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="serviceDetial"
            label="服务规格"
             align="center"
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="serviceTime"
            label="服务时长"
             align="center"
             sortable
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="serviceLevel"
            label="服务员等级"
             align="center"
             sortable
            >
        </el-table-column>
        <el-table-column
            width="150"
            prop="servicePrice"
            label="服务价格"
            align="center"
            sortable
            >
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
             align="center"
            width="180">
            <template slot-scope="scope">
                <el-button  @click="modifyService(scope.row)" size="mini" type="primary" icon="el-icon-edit" :plain="true">编辑</el-button>
                <el-button @click="deleteService(scope.row)" size="mini" type="danger" icon="el-icon-delete" :plain="true">删除</el-button>
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
        <transition name="el-zoom-in-center">
            <el-dialog title="新增服务" style="text-align:center" width="35%" :visible.sync="isShow">
                <el-form status-icon  class="demo-ruleForm">
                    <el-form-item label="服务名称">
                        <el-input v-model="tableData.serviceName" style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="服务类型">
                        <el-select v-model="tableData.serviceType" placeholder="请选择服务类型"  style="width:300px;">
                            <el-option label="宠物医院" value="宠物医院"></el-option>
                            <el-option label="宠物美容" value="宠物美容"></el-option>
                            <el-option label="宠物配种" value="宠物配种"></el-option>
                            <el-option label="宠物训练" value="宠物训练"></el-option>
                            <el-option label="宠物托运" value="宠物托运"></el-option>
                            <el-option label="宠物殡葬" value="宠物殡葬"></el-option>
                            <el-option label="其他" value="其他"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="服务时间">
                        <!-- <el-input v-model="tableData.serviceSchedule" style="width:300px;"></el-input> -->
                        <el-time-select
                            style="width:150px;"
                            placeholder="起始时间"
                            v-model="startTime"
                            :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                            }">
                        </el-time-select>
                        <el-time-select
                            style="width:150px;"
                            placeholder="结束时间"
                            v-model="endTime"
                            :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30',
                            minTime: startTime
                            }">
                        </el-time-select>
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
            </el-dialog>
        </transition>
        <transition name="el-zoom-in-top">
            <el-dialog title="修改服务" style="text-align:center" width="35%" :visible.sync="modify">
                <el-form status-icon  class="demo-ruleForm">
                    <el-form-item label="服务名称">
                        <el-input  v-model="tableData.serviceName" style="width:300px;"></el-input>
                    </el-form-item>
                    <el-form-item label="服务类型">
                        <el-select v-model="tableData.serviceType" placeholder="请选择服务类型"  style="width:300px;">
                            <el-option label="宠物医院" value="宠物医院"></el-option>
                            <el-option label="宠物美容" value="宠物美容"></el-option>
                            <el-option label="宠物配种" value="宠物配种"></el-option>
                            <el-option label="宠物训练" value="宠物训练"></el-option>
                            <el-option label="宠物托运" value="宠物托运"></el-option>
                            <el-option label="宠物殡葬" value="宠物殡葬"></el-option>
                            <el-option label="其他" value="其他"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="服务时间">
                        <!-- <el-input v-model="tableData.serviceSchedule" style="width:300px;"></el-input> -->
                        <el-time-select
                            style="width:150px;"
                            placeholder="起始时间"
                            v-model="startTime"
                            :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                            }">
                        </el-time-select>
                        <el-time-select
                            style="width:150px;"
                            placeholder="结束时间"
                            v-model="endTime"
                            :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30',
                            minTime: startTime
                            }">
                        </el-time-select>
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
                </el-dialog>
            </transition>
        </div>
</div>
    
</template>
<script>
export default {
  data() {
    return {
      startTime: "",
      endTime: "",
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
      modify: false,
      curPage: 1,
      eachPage: 5,
      maxPage: 0,
      count: 0
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
      console.log(this.curPage);
    },
    setEachPage(eachPage) {
      this.curPage = 1;
      this.eachPage = eachPage;
      console.log(this.eachPage);
    },
    qingkong() {
      this.tableData.serviceName = "";
      this.tableData.serviceType = "";
      this.tableData.serviceSchedule = "";
      this.tableData.serviceCanFor = "";
      this.tableData.serviceDetial = "";
      this.tableData.serviceTime = "";
      this.tableData.serviceLevel = "";
      this.tableData.servicePrice = "";
    },
    open(row) {
      this.$alert(`${row}`, "提示", {
        confirmButtonText: "确定"
      });
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
      this.qingkong();
    },
    confirmAdd() {
      //添加服务
      let serviceTime = this.startTime + "至" + this.endTime;
      // console.log(serviceTime)
      const data = {
        storesure: localStorage.userId,
        serviceName: this.tableData.serviceName,
        serviceType: this.tableData.serviceType,
        serviceSchedule: serviceTime,
        serviceCanFor: this.tableData.serviceCanFor,
        serviceDetial: this.tableData.serviceDetial,
        serviceTime: this.tableData.serviceTime,
        serviceLevel: parseInt(this.tableData.serviceLevel),
        servicePrice: parseInt(this.tableData.servicePrice)
      };
      if (
        data.serviceName === "" ||
        data.serviceType === "" ||
        data.serviceSchedule === "" ||
        data.serviceCanFor === "" ||
        data.serviceDetial === "" ||
        data.serviceTime === "" ||
        this.tableData.serviceName === "" ||
        this.tableData.servicePrice === ""
      ) {
        this.open("输入有误，请重新输入");
      } else {
        fetch("/serviceManagement/addService", {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json());
        this.quxiao(); //新增成功 隐藏窗口
        this.async_getEmpsByPage();
        this.qingkong(); //调用清空数据的方法
      }
    },
    async async_getEmpsByPage() {
      //判断是门店管理员还是平台管理员员登陆 渲染相应的数据
      document.getElementById("zhuanquan").style.display = "block";
      if (localStorage.userType == "门店管理员") {
        let data = await fetch("/serviceManagement/storeService", {
          //这个是当前店主的服务
          method: "post",
          body: JSON.stringify({
            curPage: this.curPage,
            eachPage: this.eachPage,
            storesure: localStorage.userId //用户ID
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json());
        console.log(data)
        this.curPage = data.curPage;
        this.eachPage = data.eachPage;
        this.count = data.count;
        this.maxPage = data.maxPage;
        this.rows = data.rows;
        // console.log(data);
        this.lsrows = this.rows;
      } else {
        let data = await fetch("/serviceManagement/platformService", {
          //这个是所有店主的服务-平台管理员
          method: "post",
          body: JSON.stringify({
            curPage: this.curPage,
            eachPage: this.eachPage
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json());
        console.log(data)
        this.curPage = data.curPage;
        this.eachPage = data.eachPage;
        this.count = data.count;
        this.maxPage = data.maxPage;
        this.rows = data.rows;
        // console.log(data);
        this.lsrows = this.rows;
        // console.log(data);
        // this.rows = data;
        // this.lsrows = this.rows;
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
      console.log(scope);
      //修改服务
      this.modify = true;
      // console.log(scope)
      // let canvas=this.$refs.cvs;
      this.tableData.serviceName = scope.serviceName;
      this.tableData.serviceType = scope.serviceType;
      //   this.tableData.serviceSchedule = scope.serviceSchedule;
      this.startTime = scope.serviceSchedule.substring(0, 5);
      this.endTime = scope.serviceSchedule.substring(6, 11);
      this.tableData.serviceCanFor = scope.serviceCanFor;
      this.tableData.serviceDetial = scope.serviceDetial;
      this.tableData.serviceTime = scope.serviceTime;
      this.tableData.serviceLevel = scope.serviceLevel;
      this.tableData.servicePrice = scope.servicePrice;
      localStorage.serviceId = scope._id;
    },

    confirmModifyService() {
      //确认修改服务
      let serviceTime = this.startTime + "至" + this.endTime;
      const data = {
        serviceId: localStorage.serviceId,
        serviceName: this.tableData.serviceName,
        serviceType: this.tableData.serviceType,
        serviceSchedule: serviceTime,
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
      this.qingkong();
    }
  }
};
</script>

<style>
</style>