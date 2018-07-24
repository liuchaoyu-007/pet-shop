<template>
  <div>
    <div class="serviceContent">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-input v-model="formInline.user" placeholder="搜索您要进行操作的门店"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div style="width: 700px;margin:auto;">
        <el-table
          :data="tableData"
          border
          style="width: 100%;">
           <el-table-column
            prop="name"
            label="门店名称"
            width="200">
          </el-table-column>
          <el-table-column
            prop="address"
            label="门店地址"
            width="300">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="onSubmit(scope.row)" type="text" size="small">服务管理</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length"
            >
          </el-pagination>
        </div>
    </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
          name: '小七宠物店',
          address: '上海市普陀区金沙江路 1518 弄',
        }]
      }
    },
    methods: {
      onSubmit() {
         this.$router.push("/info/storemanagement/serviceAdm");
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style>

  .serviceContent{
    width: 700px;
    height: 50px;
    padding-top:5px;
    margin: 10px auto;
    background-color:  #B3C0D1;
    text-align: center;
    border-radius: 10px;
  }
</style>