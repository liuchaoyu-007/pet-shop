<template>
    <div class="store">
        <h1>创建门店</h1>
         <p>店铺名称: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="input10"
          clearable>  
        </el-input></p>
         <p>联系人: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="input10"
          clearable>  
        </el-input></p>
         <p>联系人电话: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="input10"
          clearable>  
        </el-input></p>
        <p>店铺地址: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="input10"
          clearable>  
        </el-input></p>
        <p>法人: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="input10"
          clearable>  
        </el-input></p>
        <p>营业执照号码: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="input10"
          clearable>  
        </el-input></p>
        <p>营业执照地址: <el-input
          style="width: 400px;float: right;"
          placeholder="请输入内容"
          v-model="input10"
          clearable>  
        </el-input></p>
        <p style="height: 240px;">营业执照:<el-upload
          style="width: 400px;float: right;"
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload></p>
        <p style="height: 240px;">店名门头照片:<el-upload
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
          v-model="textarea">
        </el-input></p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      input10: "",
      textarea:""
    };
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
}
</style>
