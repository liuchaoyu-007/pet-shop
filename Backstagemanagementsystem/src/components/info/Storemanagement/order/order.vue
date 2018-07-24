<template>
  <div>
    <div class="header-s">
      <div style="width:400px;">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="sousuo">
        </el-input>
      </div>
      <div style="margin-left:8px;">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="text" @click="dialogFormVisible = true">添加</el-button>
        <el-dialog title="添加订单" :visible.sync="dialogFormVisible" center modal>
          <el-form :model="form" style="margin:10px auto;">
            <el-form-item label="店家账号" :label-width="formLabelWidth">
              <el-input v-model="form.storesure" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="店家门店" :label-width="formLabelWidth">
              <el-input v-model="form.storename" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="订单用户" :label-width="formLabelWidth">
              <el-input v-model="form.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="订单时间" :label-width="formLabelWidth">
              <el-input v-model="form.usertime" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品名称" :label-width="formLabelWidth">
              <el-input v-model="form.userpsrum" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" :label-width="formLabelWidth">
              <el-input v-model="form.usernum" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品单价" :label-width="formLabelWidth">
              <el-input v-model="form.userprice" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品总价" :label-width="formLabelWidth">
              <el-input v-model="form.userzong" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品运费" :label-width="formLabelWidth">
              <el-input v-model="form.useryou" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品地址" :label-width="formLabelWidth">
              <el-input v-model="form.userdiqu" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="tianjia">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div style="float:right;">
        <el-select v-model="value" placeholder="默认-显示全部" @change="typexzs" >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div>
        <el-table
        :data="rows"
        border
        style="width: 100%">
        <el-table-column
        fixed
        prop="usertime"
        label="订单时间"
        width="160">
        </el-table-column>
        <el-table-column
        prop="storesure"
        label="店主账号"
        width="160">
        </el-table-column>
        <el-table-column
        prop="storename"
        label="店主门店"
        width="160">
        </el-table-column>
        <el-table-column
        prop="username"
        label="宠物用户"
        width="160">
        </el-table-column>
        <el-table-column
        prop="usernum"
        label="购买数量"
        width="160">
        </el-table-column>
        <el-table-column
        prop="userprice"
        label="购买单价"
        width="160">
        </el-table-column>
        <el-table-column
        prop="userzong"
        label="购买总价"
        width="160">
        </el-table-column>
        <el-table-column
        prop="useryou"
        label="订单运费"
        width="160">
        </el-table-column>
        <el-table-column
        prop="userdiqu"
        label="订单发往地"
        width="160">
        </el-table-column>
        <el-table-column
        prop="state"
        label="是否发货"
        width="160">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="220px"
        >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleDelete(scope.$index, scope.row)">发货</el-button>
            <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions, mapMutations } = createNamespacedHelpers("emps");

export default {
  data() {
    return {
      sousuo: "",
      options: [
        {
          value: "1",
          label: "显示全部"
        },
        {
          value: "2",
          label: "已发货"
        },
        {
          value: "3",
          label: "未发货"
        }
      ],
      value: "",
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        storesure: "", //这个订单属于那个店家的（店家账号）
        storename: "", //这个订单属于那个门店
        username: "", //这个订单属于那个用户
        usertime: "", //这个订单购买时间
        userpsrum: "", //这个订单购买的什么商品
        usernum: "", //这个订单购买数量
        userprice: "", //这个订单购买单价
        userzong: "", //这个订单购买总价
        useryou: "", //这个订单运费
        userdiqu: "", //这个订单发往地
        state: "no" //这个订单是否发货
      },
      formLabelWidth: "120px",
    };
  },
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
    ...mapState(["rows"])
  },

  methods: {
    ...mapActions(["async_getEmpsByPage"]),
    ...mapMutations([
      "setCurPage",
      "setEachPage",
      "scEmpsByPage",
      "typexz",
      "tianjias"
    ]),
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    handleDelete(index, row) {
      this.scEmpsByPage(row._id);
      this.async_getEmpsByPage();
    },
    typexzs() {
      const value = this.$data.value;
      this.typexz(value);
    },
    tianjia() {
      const data = {
        storesure: this.form.storesure, //这个订单属于那个店家的（店家账号）
        storename: this.form.storename, //这个订单属于那个门店
        username: this.form.username, //这个订单属于那个用户
        usertime: this.form.usertime, //这个订单购买时间
        userpsrum: this.form.userpsrum, //这个订单购买的什么商品
        usernum: this.form.usernum, //这个订单购买数量
        userprice: this.form.userprice, //这个订单购买单价
        userzong: this.form.userzong, //这个订单购买总价
        useryou: this.form.useryou, //这个订单运费
        userdiqu: this.form.userdiqu, //这个订单发往地
        state: "no" //这个订单是否发货
      };
      this.tianjias(data);
      dialogFormVisible = false
    }
  }
};
</script>

<style>
.el-pagination {
  text-align: center;
}
.header-s {
  height: 50px;
  margin: 8px 5px;
  line-height: 50px;
}
.header-s div {
  display: inline-block;
}
</style>