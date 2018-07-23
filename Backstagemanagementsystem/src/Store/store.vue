
  <template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="门店名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="门店类型"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="联系人"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="联系电话"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
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
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
        </template>
    </el-table-column>
  </el-table>
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
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>

