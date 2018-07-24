<template>
    <div>
        <h3 style="width: 100%;
            height: 30px;
            line-height:30px;
            margin: 10px auto;
            background-color:  #C0C4CC;
            text-align: center;
            color:#409EFF;">小七宠物店</h3>
        <el-table
        :data="lsrows"
        border
        style="width: 100%">
        <el-table-column
            prop="serviceName"
            label="服务名称"
            >
        </el-table-column>
        <el-table-column
            prop="serviceType"
            label="服务类型"
            >
        </el-table-column>
        <el-table-column
            prop="serviceSchedule"
            label="服务时间段"
            >
        </el-table-column>
        <el-table-column
            prop="serviceCanFor"
            label="服务宠物体重范围"
            width="220">
        </el-table-column>
        <el-table-column
            prop="serviceDetial"
            label="服务规格"
            >
        </el-table-column>
        <el-table-column
            prop="serviceTime"
            label="服务时长"
            >
        </el-table-column>
        <el-table-column
            prop="serviceLevel"
            label="服务员等级"
            >
        </el-table-column>
        <el-table-column
            prop="servicePrice"
            label="服务价格"
            >
        </el-table-column>
        <el-table-column
          
            label="操作"
            width="210">
            <template slot-scope="scope">
            <el-button  @click="handleClick(scope.row)" type="primary" icon="el-icon-edit">修改</el-button>
            <el-button @click="deleteService(scope.row)" type="danger" icon="el-icon-delete">删除</el-button>
            </template>
        </el-table-column>
        </el-table>
        <div style="width:500px;margin: 10px auto;text-align:center">
            <el-button type="primary" @click="addService" plain>新增服务</el-button>
            <el-button type="primary" @click="fanhui"  plain>返回</el-button>
        </div>
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
        </div>
    </template>

<script>
 export default {

    data() {
      return {
        rows: [],
        lsrows: [],
        tableData: [{
          serviceName: '修毛',
          serviceType:'宠物美容',
          serviceSchedule: "12",
          serviceCanFor: '5kg--20kg',
          serviceDetial: '精修',
          serviceTime:'2小时',
          serviceLevel: 2,
          servicePrice:100
        }],
        isShow:false
      }
    },
    created() {
        this.async_getEmpsByPage();
    },
    methods: {
        handleClick(row) {
            console.log(row);
        },
        fanhui(){
            this.$router.push("/info/storemanagement/servicemanagement");
        },
        addService(){
            this.isShow=true;
        },
        quxiao(){
            this.isShow=false;
        },
        confirmAdd(){   //添加服务
            const data = {
                storesure:localStorage.userId,
                serviceName:this.tableData.serviceName,
                serviceType:this.tableData.serviceType,
                serviceSchedule:this.tableData.serviceSchedule,
                serviceCanFor: this.tableData.serviceCanFor,
                serviceDetial: this.tableData.serviceDetial,
                serviceTime:this.tableData.serviceTime,
                serviceLevel:parseInt(this.tableData.serviceLevel),
                servicePrice:parseInt(this.tableData.servicePrice) 
            }
            // console.log(data)
            let data1 =  fetch("/serviceManagement/addService", {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                "Content-Type": "application/json"
                }
                }).then(res => res.json());
                this.quxiao()  //新增成功 隐藏窗口
                this.async_getEmpsByPage()
        },
        async async_getEmpsByPage() {  //判断是门店管理员还是平台管理员员登陆 渲染相应的数据
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
            } 
            else {
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
        },
        deleteService(scope){    //删除服务
            // console.log(scope._id)
            let id ={serviceId:scope._id}
            const datas =  fetch("/serviceManagement/deleteService", {
                method: "post",
                body: JSON.stringify(id),
                headers: {
                "Content-Type": "application/json"
                }
                }).then(res => res.json());
              
                this.async_getEmpsByPage()
        }

    }


  }
</script>

<style>
   .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    width: 500px;
    height: 400px;
  }
  .addService{
    position: absolute;
    top:100px;
    left: 500px;
    border-radius: 10px;
    background-color: #E9EEF3;
  }
  .el-icon-close{
      float: right;
      margin: 5px 5px 0 0;
      cursor: pointer;
      color: #F56C6C;
  }
</style>