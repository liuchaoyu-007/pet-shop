<template>
    <div>
      <div class="store" >
        <h1>创建门店</h1>
         <p>店铺名称: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="shopName"
          border
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
        <p style="height: 260px;">店铺图片:<el-upload
          style="width: 400px;float: right;"
          class="upload-demo"
          drag
          action="/imgsmd/upload"
          :on-success='success0'
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
        @click='handleClicke' :plain="true">提交</el-button></p>
    </div>
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
      shopDescription: "",
      imgId: ""
    };
  },
  methods: {
    async handleClicke() {
      if (
        this.shopName == "" ||
        this.shopContacts == "" ||
        this.shopTel == "" ||
        this.shopAdd == "" ||
        this.shopCorporate == "" ||
        this.shopLicenceNum == "" ||
        this.shopDescription == "" ||
        this.imgId == ""
      ) {
        this.$message({
          message: "警告资料不能为空",
          type: "warning"
        });
      } else {
        if (localStorage.userType == "门店管理员") {
          let data = await fetch("/store/add", {
            method: "post",
            body: JSON.stringify({
              useradd: localStorage.userAcount, //店家账号
              shopName: this.shopName,
              shopContacts: this.shopContacts,
              shopTel: this.shopTel,
              shopAdd: this.shopAdd,
              shopCorporate: this.shopCorporate,
              shopLicenceNum: this.shopLicenceNum,
              shopDescription: this.shopDescription,
              shopLicenceImg: this.imgId
            }),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(res => res.json());
          console.log(data);
          this.$message({
            message: "恭喜你，创建成功，等待审核",
            type: "success"
          });
          this.$router.push("/info/storemanagement/storeinformation");
        } else {
          this.$alert("添加失败，只能门店管理员才能添加", "警告", {
            confirmButtonText: "确定"
          });
        }
      }
    },
    success0(res) {
      this.imgId = res;
      console.log(this.imgId);
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
