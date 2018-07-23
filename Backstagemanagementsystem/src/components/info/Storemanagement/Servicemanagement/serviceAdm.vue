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
        :data="tableData"
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
            prop="serviceCanFor"
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
            <el-button type="danger" icon="el-icon-delete">删除</el-button>
            </template>
        </el-table-column>
        </el-table>
        <div style="width:500px;margin: 10px auto;text-align:center">
            <el-button type="primary" plain>新增服务</el-button>
            <el-button type="primary" @click="fanhui" plain>返回</el-button>
        </div>
    </div>
  </template>

<script>
 export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      fanhui(){
          this.$router.push("/info/storemanagement/servicemanagement");
      }
    },

    data() {
      return {
        tableData: [{
          serviceName: '修毛',
          serviceType:'宠物美容',
          serviceSchedule: '8:00--19:00',
          serviceCanFor: '5kg--20kg',
          serviceDetial: '精修',
          serviceTime:'2小时',
          serviceLevel: 2,
          servicePrice:100
        },{
          serviceName: '修毛',
          serviceType:'宠物美容',
          serviceSchedule: '8:00--19:00',
          serviceCanFor: '5kg--20kg',
          serviceDetial: '精修',
          serviceTime:'2小时',
          serviceLevel: 2,
          servicePrice:100
        },{
          serviceName: '修毛',
          serviceType:'宠物美容',
          serviceSchedule: '8:00--19:00',
          serviceCanFor: '5kg--20kg',
          serviceDetial: '精修',
          serviceTime:'2小时',
          serviceLevel: 2,
          servicePrice:100
        }]
      }
    }
  }
</script>

<style>

</style>