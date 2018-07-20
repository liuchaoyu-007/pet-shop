<template>
    <div>
        <el-table
        :data="rows"
        style="width: 100%"
        max-height="250">
        <el-table-column
        fixed
        prop="_id"
        label="日期"
        width="150">
        </el-table-column>
        <el-table-column
        prop="empName"
        label="姓名"
        width="120">
        </el-table-column>
        <el-table-column
        prop=""
        label="省份"
        width="120">
        </el-table-column>
        <el-table-column
        prop="city"
        label="市区"
        width="120">
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址"
        width="300">
        </el-table-column>
        <el-table-column
        prop="zip"
        label="邮编"
        width="120">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
            <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small">
            移除
            </el-button>
        </template>
    </el-table-column>
  </el-table>
        <el-table
        :data="rows"
        border
        style="width: 100%">
        <el-table-column
        fixed
        prop="_id"
        label="编号"
        width="">
        </el-table-column>
        <el-table-column
        prop="empName"
        label="姓名"
        width="120">
        </el-table-column>
        <el-table-column
        prop="job"
        label="岗位"
        width="120">
        </el-table-column>
        <el-table-column
        prop="sal"
        label="薪水"
        width="120">
        </el-table-column>
        <el-table-column 
        label="操作"
        width="75px"
        >
        <template slot-scope="scope">
            <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions, mapMutations } = createNamespacedHelpers("emps");

export default {
  created() {
    this.$store.dispatch("emps/async_getEmpsByPage");
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

  computed: {
    ...mapState(["rows", "curPage", "eachPage", "count"])
  },

  methods: {
    ...mapActions(["async_getEmpsByPage"]),
    ...mapMutations(["setCurPage", "setEachPage", "scEmpsByPage"]),
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    handleDelete(index, row) {
      this.scEmpsByPage(row._id);
      this.async_getEmpsByPage();
    }
  }
};
</script>

<style>
.el-pagination {
  text-align: center;
}
</style>