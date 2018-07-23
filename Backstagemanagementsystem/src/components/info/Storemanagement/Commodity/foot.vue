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
    height="400"
    border
    style="width: 100%">
    <el-table-column
      prop="sDate"
      label="出厂日期"
      width="100">
    </el-table-column>
    <el-table-column
      prop="sName"
      label="商品名称"
      width="80">
    </el-table-column>
    <el-table-column
      prop="sType"
      label="商品品类"
      width="80">
    </el-table-column>
    <el-table-column
      prop="sRegion"
      label="产地"
      width="50">
    </el-table-column>
    <el-table-column
      prop="sSpecial"
      label="特殊功能"
      width="100">
    </el-table-column>
    <el-table-column 
    label="图片"
    width="140">
      <template slot-scope="scope">
        <el-button
          size="mini">
          <img src="../../../../assets/084f5070af51409b5a3401776072e60b.jpg" style="width:80px;height:100px">
        </el-button>
      </template>
    </el-table-column>
    <el-table-column
      prop="sTaste"
      label="口味"
      width="70">
    </el-table-column>
    <el-table-column
      prop="sSize"
      label="包装规格"
      width="80">
    </el-table-column>
    <el-table-column
      prop="sTime"
      label="保质期"
      width="70">
    </el-table-column>
    <el-table-column
      prop="sCanFor"
      label="适用阶段"
      width="80">
    </el-table-column>
    <el-table-column
      prop="sPrice"
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
      action="https://jsonplaceholder.typicode.com/posts/"
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
  methods: {
    bian(){
      this.dialogFormVisible = true
    },
    async tianjia(){
      this.dialogFormVisible = false
      const data = await fetch("/Commodity/Commodity",{
        method:"post",
        body: JSON.stringify ({
          goodsDate:this.form.sDate,
          goodsName:this.form.sName,
          goodsType:this.form.sType,
          goodsRegion:this.form.sRegion,
          goodsSpecial:this.form.sSpecial,
          goodsTime:this.form.sTime,
          goodsPrice:this.form.sPrice,
          goodsTaste:this.form.sTaste,
          goodsSize:this.form.sSize,
          goodsCanFor:this.form.sCanFor,
          goodsImg:this.form.sImg,
        }),
        headers: {
            "Content-Type": "application/json"
          }
      }).then(res=>res.json());
    },
    shanchu(){
      console.log("123")
    }
  },
  data() {
    return {
      tableData3: [
        {
          sDate: "2016-05-03",
          sName: "福贵狗粮",
          sType: "狗粮",
          sRegion: "山东烟台",
          sSpecial: "磨牙，洁齿，护肤美毛",
          sTime: "12个月",
          sImg: "../../../../assets/084f5070af51409b5a3401776072e60b.jpg",
          sPrice: "238元",
          sTaste: "鸡肉味",
          sSize: "100-499g",
          sCanFor: "全阶段",
          sImg:""
        }
      ],
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
      formLabelWidth: "120px"
    };
  }
};
</script>

<style>
</style>