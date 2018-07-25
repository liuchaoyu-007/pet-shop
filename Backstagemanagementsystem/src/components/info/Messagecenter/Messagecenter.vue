<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="账号"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>账号: {{ scope.row.name }}</p>
          <p>申请理由: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="success"
          @click="handleEdit(scope.$index, scope.row)">同意</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">拒接</el-button>
          <el-button
          size="mini"
          type="danger"
          @click="handleEdit(scope.$index, scope.row)">删除此消息</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "123123",
          address: "啊撒旦发个i上的"
        },
        {
          date: "2016-05-04",
          name: "123123",
          address: "按时大苏打顶顶顶顶顶顶顶顶顶"
        },
        {
          date: "2016-05-01",
          name: "123",
          address: "啊水水顶顶"
        },
        {
          date: "2016-05-03",
          name: "123123",
          address: "啊谁说的"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style>
</style>