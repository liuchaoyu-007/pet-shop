<template>
<div>
  <el-button style="margin:20px;" type="primary" plain @click="bian">新增商品</el-button>
  <el-button style="margin:20px;" type="primary" plain @click="aysdata">刷新数据</el-button>
  <el-table
    :data="data"
    max-height="800"
    border
    style="width: 100%">
    <el-table-column
      prop="user"
      label="所属账号"
      width="100">
    </el-table-column>
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
      label="销售量"
      width="100">
    </el-table-column>
    <el-table-column 
    label="图片"
    width="120">
      <template slot-scope="scope">
        <div v-for="(item,index) in scope.row.goodsImg" :key="index">
          <img style="width:80px;height:100px;" :src='item' alt="" />
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
    <el-table-column fixed="right"
        label="操作"
        width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
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
      :on-success='supimg'
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

<el-dialog title="修改用品" :visible.sync="dialogFormVisible2">
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
    <el-form-item label="销售量" :label-width="formLabelWidth">
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
      :on-success='uploadimgs'
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
    <el-button @click="handleEditk" type="primary" plain>确 定</el-button>
  </div>
</el-dialog>

</div>
</template>


<script>
export default {
  data() {
    return {
      tableData: [],
      data: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogFormVisible2: false,
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
      imgsarr: [],
      imgsup: []
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
    uploadimgs(res) {
      this.imgsarr.push(res);
      console.log(this.imgsarr);
    },
    supimg(res) {
      this.imgsup.push(res);
      console.log(this.imgsup);
    },
    async tianjia() {
      //添加
      this.dialogFormVisible = false;
      const data = await fetch("/Commodity/Commodity", {
        method: "post",
        body: JSON.stringify({
          user: localStorage.userAcount,
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
          goodsImg: this.imgsup
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      this.aysdata();
    },

    async handleDelete(index, row) {
      //删除
      const datas = await fetch("/Commodity/moveCinema", {
        method: "post",
        body: JSON.stringify({
          _id: row._id
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      this.aysdata();
    },

    handleEdit(index, row) {
      //修改
      this.dialogFormVisible2 = true;
      const {
        goodsName,
        goodsDate,
        goodsType,
        goodsRegion,
        goodsSpecial,
        goodsTime,
        goodsPrice,
        goodsTaste,
        goodsSize,
        goodsCanFor,
        goodsImg,
        _id
      } = row;
      this.form.sName = goodsName;
      this.form.sDate = goodsDate;
      this.form.sType = goodsType;
      this.form.sRegion = goodsRegion;
      this.form.sSpecial = goodsSpecial;
      this.form.sTime = goodsTime;
      this.form.sPrice = goodsPrice;
      this.form.sTaste = goodsTaste;
      this.form.sSize = goodsSize;
      (this.form.sCanFor = goodsCanFor),
        (this.form.sImg = goodsImg),
        (this.form._id = _id);
    },

    async handleEditk(index) {
      //修改
      this.dialogFormVisible2 = false;
      const xiugai = await fetch("/Commodity/alterCinema", {
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
          goodsImg: this.imgsarr,
          _id: this.form._id
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      this.aysdata();
    },

    async aysdata() {
      document.getElementById("zhuanquan").style.display = "block";
      const comm = await fetch("/Commodity/getCinemaPage", {
        method: "post",
        body: JSON.stringify({
          type: localStorage.userType,
          user: localStorage.userAcount
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      this.data = comm;
      console.log(this.data);
      (this.form.sName = ""),
        (this.form.sDate = ""),
        (this.form.sType = ""),
        (this.form.sRegion = ""),
        (this.form.sSpecial = ""),
        (this.form.sTaste = ""),
        (this.form.sSize = ""),
        (this.form.sTime = ""),
        (this.form.sCanFor = ""),
        (this.form.sPrice = "");
      document.getElementById("zhuanquan").style.display = "none";
    }
  }
};
</script>

<style>
</style>