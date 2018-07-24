<template>
    <div class="store" >
        <h1>创建门店</h1>
         <p>店铺名称: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="shopName"
          clearable>  
        </el-input></p>
         <p>联系人: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="shopContacts"
          clearable>  
        </el-input></p>
         <p>联系人电话: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="shopTel"
          clearable>  
        </el-input></p>
        <p>店铺地址: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="shopAdd"
          clearable>  
        </el-input></p>
        <p>法人: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="shopCorporate"
          clearable>  
        </el-input></p>
        <p>营业执照号码: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="shopLicenceNum"
          clearable>  
        </el-input></p>
        <p style="height: 260px;">营业执照:<el-upload
          style="width: 400px;float: right;"
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload></p>
        <p style="height: 260px;">店名门头照片:<el-upload
          style="width: 400px;float: right;"
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload></p>
        <p>店铺描述:<el-input
          style="width: 400px;float: right;"
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="shopDescription">
        </el-input></p>
        <p style="margin-top:100px"><el-button style="margin: 0 auto;" type="primary" icon="el-icon-circle-check"
        @click='handleClicke'>提交</el-button></p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      shopName: "",
      shopContacts: "",
      shopTel: "",
      shopAdd: "",
      shopCorporate: "",
      shopLicenceNum: "",
      shopDescription: ""
    };
  },
  methods: {
    async handleClicke() {
      // let data = {
      //   shopName: this.shopName,
      //   shopContacts: this.shopContacts,
      //   shopTel: this.shopTel,
      //   shopAdd: this.shopAdd,
      //   shopCorporate: this.shopCorporate,
      //   shopLicenceNum: this.shopLicenceNum,
      //   shopDescription: this.shopDescription
      // };
      let dataa = await fetch("/store/add", {
        method: "post",
        body: JSON.stringify({
          shopName: this.shopName,
          shopContacts: this.shopContacts,
          shopTel: this.shopTel,
          shopAdd: this.shopAdd,
          shopCorporate: this.shopCorporate,
          shopLicenceNum: this.shopLicenceNum,
          shopDescription: this.shopDescription
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      console.log(dataa);
    }
  }
};
</script>

<style>
.store {
  width: 600px;
  margin: 0 auto;
}
.store > h1 {
  text-align: center;
}
.store > p {
  width: 500px;
  height: 40px;
  margin: 30px auto;
  line-height: 40px;
  text-align: center;
}
</style>
