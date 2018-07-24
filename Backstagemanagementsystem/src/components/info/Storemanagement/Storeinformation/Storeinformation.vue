<template>
<div>
  <!-- 搜索框 -->
  <div class="int">
      <el-input style="width: 300px; margin:5px 10px;"
      placeholder="请输入内容"
      v-model="input"
      clearable>
      </el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
  </div>
  <div>
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- 门店信息框 -->
        <el-tab-pane label="门店信息" name="first">
            <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="shopName"
              label="门店名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="shopContacts"
              label="联系人"
              width="180">
            </el-table-column>
            <el-table-column
              prop="shopCorporate"
              label="法人"
              width="180">
            </el-table-column>
            <el-table-column
              prop="shopTel"
              label="联系电话"
              width="180">
            </el-table-column>
            <el-table-column
              prop="shopAdd"
              label="地址"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="状态"
              width="180">
            </el-table-column>
            <el-table-column
                label="操作"
                >
                <template slot-scope="scope">
                    <el-button type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <!-- 营业执照信息框 -->
        <el-tab-pane label="营业执照信息" name="second">
           <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="shopLicenceNum"
              label="营业执照号码"
              width="180">
            </el-table-column>
            <el-table-column
              prop="shopAdd"
              label="营业执照地址"
              width="180">
            </el-table-column>
             <el-table-column
              label="营业执照图片"
              width="300">
              <template slot-scope="scope">
                <el-button
                  size="mini">
                  <img src="../../../../assets/u=4119941613,1752835551&fm=27&gp=0.jpg" style="width:250px;" />
                </el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="shopDescription"
              label="店铺描述"
              width="300">
            </el-table-column>
            <el-table-column
                label="操作"
                >
                <template slot-scope="scope">
                    <el-button type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
           </el-table-column>
          </el-table>
        </el-tab-pane>
        <!-- 店员信息框 -->
        <el-tab-pane label="店员信息" name="third">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="empName"
              label="店员"
              width="180">
            </el-table-column>
            <el-table-column
              prop="empLevel"
              label="职级"
              width="180">
            </el-table-column>
             <el-table-column
              prop="empPhone"
              label="店员电话"
              width="300">
            </el-table-column>
            <el-table-column
                label="操作"
                >
                <template slot-scope="scope">
                    <el-button type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
           </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          shopName: "123宠物店", //店名
          shopContacts: "王大虎", //联系人
          shopCorporate: "王小虎", //法人
          shopTel: "13255949884", //联系电话
          shopAdd: "上海市普陀区金沙江路 1518 弄", //营业执照地址
          shopLicenceNum: "1614648468646", //营业执照号码
          shopDescription: "打嘎嘎嘎刚", //店铺描述
          shopLicenceImg: "", //营业执照图片
          shopCover: "", //店铺门头图片
          empName: "王大锤", //姓名
          empLevel: "高级抡大锤", //职级
          empPhone: "1568489489" //联系电话
        }
      ],
      activeName: "second",
      input: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClick1(row) {
      console.log(row);
    }
  }
};
</script>

<style>
</style>


