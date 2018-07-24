<template>
<div>
<el-menu class="el-menu-demo" mode="horizontal">
  <el-menu-item index="1">
    <el-input
      placeholder="请输入内容"
      v-model="input10"
      clearable>
    </el-input>
  </el-menu-item>
  <el-menu-item index="2">
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </el-menu-item>
  <el-menu-item index="3">
    <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
  </el-menu-item>
</el-menu>
  <el-table
    :data="tableData3"
    max-height="800"
    border
    style="width: 100%">
    <el-table-column
      prop="goodsDate"
      label="出厂日期"
      width="100">
    </el-table-column>
    <el-table-column
      prop="goodsName"
      label="商品名称"
      width="80">
    </el-table-column>
    <el-table-column
      prop="goodsType"
      label="商品品类"
      width="80">
    </el-table-column>
    <el-table-column
      prop="goodsRegion"
      label="产地"
      width="50">
    </el-table-column>
    <el-table-column
      prop="goodsSpecial"
      label="特殊功能"
      width="100">
    </el-table-column>
    <el-table-column 
    label="图片"
    width="140">
      <template slot-scope="scope">
        <div v-for="(item,index) in scope.row.goodsImg" :key="index">
          <img style="width:100px" :src='item' alt="" >
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="goodsTaste"
      label="口味"
      width="70">
    </el-table-column>
    <el-table-column
      prop="goodsSize"
      label="包装规格"
      width="80">
    </el-table-column>
    <el-table-column
      prop="goodsTime"
      label="保质期"
      width="70">
    </el-table-column>
    <el-table-column
      prop="goodsCanFor"
      label="适用阶段"
      width="80">
    </el-table-column>
    <el-table-column
      prop="goodsPrice"
      label="售价"
      width="60">
    </el-table-column>
        <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="shanchu">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

<el-button type="text" @click="bian">新增商品</el-button>
<el-dialog title="新添商品" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="商品名称" :label-width="formLabelWidth">
      <el-input v-model="form.sName" ></el-input>
    </el-form-item>
    <el-form-item label="出厂日期" :label-width="formLabelWidth">
      <el-input v-model="form.sDate" ></el-input>
    </el-form-item>
    <el-form-item label="商品品类" :label-width="formLabelWidth">
      <el-input v-model="form.sType" ></el-input>
    </el-form-item>
    <el-form-item label="产地" :label-width="formLabelWidth">
      <el-input v-model="form.sRegion" ></el-input>
    </el-form-item>
    <el-form-item label="特殊功能" :label-width="formLabelWidth">
      <el-input v-model="form.sSpecial" ></el-input>
    </el-form-item>
    <el-form-item label="口味" :label-width="formLabelWidth">
      <el-input v-model="form.sTaste" ></el-input>
    </el-form-item>
    <el-form-item label="包装规格" :label-width="formLabelWidth">
      <el-input v-model="form.sSize" ></el-input>
    </el-form-item>
    <el-form-item label="保质期" :label-width="formLabelWidth">
      <el-input v-model="form.sTime" ></el-input>
    </el-form-item>
    <el-form-item label="适用阶段" :label-width="formLabelWidth">
      <el-input v-model="form.sCanFor" ></el-input>
    </el-form-item>
    <el-form-item label="售价" :label-width="formLabelWidth">
      <el-input v-model="form.sPrice" ></el-input>
    </el-form-item>
    <el-upload
      class="upload-demo"
      drag
      action="/imgs/upload"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button @click="tianjia">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>


<script>
export default {
  data() {
    return {
      tableData3: [],
      input10: "",
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        sName: "",
        sDate: "",
        sType: "",
        sRegion: "",
        sSpecial: "",
        sTime: "",
        sPrice: "",
        sTaste: "",
        sSize: "",
        sCanFor: "",
        sImg: []
      },
      formLabelWidth: "120px",
      imgsarr: []
    };
  },
  created() {
    console.log("页面初始化");
    this.aysdata();
  },
  methods: {
    bian() {
      this.dialogFormVisible = true;
    },

    async tianjia() {
      this.dialogFormVisible = false;
      const data = await fetch("/Commodity/Commodity", {
        method: "post",
        body: JSON.stringify({
          goodsDate: this.form.sDate,
          goodsName: this.form.sName,
          goodsType: this.form.sType,
          goodsRegion: this.form.sRegion,
          goodsSpecial: this.form.sSpecial,
          goodsTime: this.form.sTime,
          goodsPrice: this.form.sPrice,
          goodsTaste: this.form.sTaste,
          goodsSize: this.form.sSize,
          goodsCanFor: this.form.sCanFor,
          goodsImg: this.form.sImg
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      if (data == true) {
        this.aysdata();
        console.log("增加成功");
      }
    },
    shanchu() {
      console.log("123");
    },
    // uploadimgs(res) {
    //   this.imgsarr.push(res);
    //   console.log(this.imgsarr);
    // }
    async aysdata() {
      const comm = await fetch("/Commodity/getCinemaPage", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      this.tableData3 = comm
      this.form.sName = '',
      this.form.sDate = '',
      this.form.sType = '',
      this.form.sRegion = '',
      this.form.sSpecial = '',
      this.form.sTaste = '',
      this.form.sSize = '',
      this.form.sTime = '',
      this.form.sCanFor = '',
      this.form.sPrice = '',
      console.log(comm);
    }
  }
};
</script>

<style>
</style>