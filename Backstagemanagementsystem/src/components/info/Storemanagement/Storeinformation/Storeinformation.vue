<template>
<div>
  <div class="int">
      <el-input style="width: 300px; margin:5px 10px;"
      placeholder="请输入内容"
      v-model="input"
      clearable>
      </el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
  </div>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="shopName"
        label="门店名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="门店类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="shopCorporate"
        label="联系人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="shopTel"
        label="联系电话"
        width="180">
      </el-table-column>
      <el-table-column
        prop="shopAdd"
        label="地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="状态"
        width="180">
      </el-table-column>
      <el-table-column
          label="操作"
          >
          <template slot-scope="scope">
              <el-button type="text" size="small">编辑</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
      label="门店名称"
      width="180">
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {
      tableData: [
        {
          shopName: "123宠物店",
          name: "宠物店",
          shopCorporate: "王小虎",
          shopTel: "13255949884",
          shopAdd: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  }
};
</script>

<style>
.int>input{
 
}
</style>


