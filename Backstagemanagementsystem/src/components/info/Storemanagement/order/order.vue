<template>
    <div>
        <el-table
        :data="rows"
        border
        style="width: 100%">
        <el-table-column
        fixed
        prop="usertime"
        label="订单时间"
        width="120">
        </el-table-column>
        <el-table-column
        prop="storename"
        label="店主门店"
        width="">
        </el-table-column>
        <el-table-column
        prop="username"
        label="宠物用户"
        width="120">
        </el-table-column>
        <el-table-column
        prop="usernum"
        label="购买数量"
        width="120">
        </el-table-column>
        <el-table-column
        prop="userprice"
        label="购买单价"
        width="120">
        </el-table-column>
        <el-table-column
        prop="userzong"
        label="购买总价"
        width="120">
        </el-table-column>
        <el-table-column
        prop="useryou"
        label="订单运费"
        width="120">
        </el-table-column>
        <el-table-column
        prop="userdiqu"
        label="订单发往地"
        width="120">
        </el-table-column>
        <el-table-column
        prop="state"
        label="订单状态"
        width="120">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="65px"
        >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">发货</el-button>
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