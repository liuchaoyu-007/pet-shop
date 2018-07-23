<template>
<div>
    <div class="header">
        <span>宠物邦后台管理系统</span>
        <div style="height:60px;">
            <ul>
                <li style="float:right;" @click="falsemy">
                  <img src="../assets/tuichu.png" alt="">
                  <p>退出登陆</p>
                </li>
                <li style="float:right;" @click="falsemyHC">
                  <img src="../assets/dasao.png" alt="">
                  <p>清除缓存</p>
                </li>
                <li style="float:right;">
                  <img src="../assets/leixing.png" alt="">
                  <p>{{mytype}}</p>
                </li>
                <li style="float:right;">
                  <img src="../assets/yonghu.png" alt="">
                  <p>{{myname}}！欢迎你</p>
                </li>
            </ul>
        </div>
    </div>
    <el-row class="tac">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1" @click="messagecenter">
              <i class="el-icon-bell"></i>
              <span slot="title">消息中心</span>
          </el-menu-item>
          <el-menu-item index="2" @click="usermanagement">
              <i class="el-icon-date"></i>
              <span slot="title">用户管理</span>
          </el-menu-item>
          <el-submenu index="3">
              <template slot="title">
              <i class="el-icon-menu"></i>
              <span>门店管理</span>
              </template>
              <el-menu-item-group>
                  <el-menu-item index="3-1" @click="storeinformation">门店信息</el-menu-item>
                  <el-menu-item index="3-2" @click="servicemanagement">服务管理</el-menu-item>
                  <el-submenu index="3-3">
                      <template slot="title">
                      <span>商品管理</span>
                      </template>
                      <el-menu-item-group>
                          <el-menu-item index="3-3-1" @click="Commoditypet">宠物</el-menu-item>
                          <el-menu-item index="3-3-2" @click="Commodityfoot">食品</el-menu-item>
                          <el-menu-item index="3-3-3" @click="CommodityArticles">用品</el-menu-item>                            
                      </el-menu-item-group>
                  </el-submenu>
              </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4" @click="order">
              <i class="el-icon-tickets"></i>
              <span slot="title">订单管理</span>
          </el-menu-item>
          <el-submenu index="5">
              <template slot="title">
              <i class="el-icon-setting"></i>
              <span>友情链接</span>
              </template>
              <el-menu-item-group>
                  <el-menu-item index="4-1">猫</el-menu-item>
                  <el-menu-item index="4-2">狗</el-menu-item>
              </el-menu-item-group>
          </el-submenu>
      </el-menu>
    </el-row>
    <p id="time">{{time}}</p>
    <div class="content">
        <router-view/>
    </div>
    <footer>
        <p>宠物邦(Pet state)&nbsp;&nbsp;&nbsp;后台管理系统</p>
        <p>Copyright @2018 版权所有 © smallseashell.com All Rights Reserved，ICP备：川ICP备1686219806号-666</p>
        <p><a href="http://wpa.qq.com/msgrd?v=3&uin=1686219806&site=qq&menu=yes" style="color:white;">联系我们</a></p>
    </footer>
</div>
</template>
<script>
export default {
  data() {
    return {
      myname: localStorage.userName,
      mytype: localStorage.userType,
      istypetrue: this.iftrue(),
      time: new Date().toLocaleString()
    };
  },
  methods: {
    iftrue() {
      if (this.mytype == "平台管理员") {
        //用于判断登陆用户权限
        return 1;
      } else {
        return 0;
      }
    },
    falsemyHC(){
      this.$confirm("您将要清除缓存, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          alert("清除成功")
        })
        .catch(() => {});
    },
    messagecenter() {
      //消息中心
      this.$router.push("/info/messagecenter");
    },
    usermanagement() {
      //用户管理
      this.$router.push("/info/usermanagement");
    },
    storeinformation() {
      //门店管理-门店信息
      this.$router.push("/info/storemanagement/storeinformation");
    },
    servicemanagement() {
      //门店管理-服务管理
      this.$router.push("/info/storemanagement/servicemanagement");
    },
    order() {
      //门店管理-订单管理
      this.$router.push("/info/storemanagement/order");
    },
    Commoditypet() {
      //门店管理-商品管理-宠物
      this.$router.push("/info/storemanagement/commodity/pet");
    },
    Commodityfoot() {
      //门店管理-商品管理-食品
      this.$router.push("/info/storemanagement/commodity/foot");
    },
    CommodityArticles() {
      //门店管理-商品管理-用品
      this.$router.push("/info/storemanagement/commodity/articles");
    },
    falsemy() {
      //退出登陆
      this.$confirm("您将要注销您的账户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {});
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#time {
  color: #dbdbdb;
  font-size: 12px;
  float: right;
  margin: 3px auto;
  margin-right: 2%;
}
body {
  background-image: url("../assets/16df68841428aaa063dd76639ca3cab8.jpg");
  background-repeat: no-repeat;
  background-size: 0% !important;
}
footer {
  width: 100%;
  height: 100px;
  background-color: rgb(63, 66, 68);
  margin-top:650px;
}
footer p {
  text-align: center;
  margin: 10px 0;
  color: #dbdbdb;
}
.tac {
  width: 200px;
  height: 400px;
  float: left;
}
.header {
  width: 100%;
  height: 60px;
  background-color: #1296db;
  line-height: 60px;
  cursor: pointer;
}
.header > span {
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-left: 2%;
}
.header div {

  float: right;
  height: 60px;
  line-height: 60px;
  margin-right: 30px;
  text-align: center;
}
.header li {
  float: left;
  list-style: none;
  color: #dbdbdb;
  width: 100px;
  height: 54px;
  margin-top: 3px;
  border-left: 1px solid white;
  text-align: center;
  transition: .7s;
}
.header li:hover {
  background-color: #66c9ff;
}
.header li p {
  color: black;
  text-align: center;
  margin-top: -44px;
  font-size: 14px;
  color: white;
}
.header img {
  width: 33px;
}
.content {
  width: 80%;
  height: 570px;
  background-color: white;
  float: right;
  margin-right: 30px;
  overflow-y: scroll;
}
/* 
轮播图
<div class="block">
  <el-carousel height="100px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</div> 
*/
</style>