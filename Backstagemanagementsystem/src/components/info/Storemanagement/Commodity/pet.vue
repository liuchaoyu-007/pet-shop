


<template>
    <div style="width:200px">
        <el-input
            placeholder="请输入内容"
            v-model="input10"
            clearable>
        </el-input>
         <el-button type="primary">搜索</el-button>
    </div>
</template>

<script>
export default {
  data() {
    //-----------商品管理--宠物-//
    return {
      input10: ""
    };
  }
};
</script>

<style>
</style>