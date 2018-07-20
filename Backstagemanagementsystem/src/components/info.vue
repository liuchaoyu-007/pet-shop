<template>
<div>
    <div class="header">
        <span>宠物管理系统</span>
        <div>
            <ul>
                <li style="float:right;">
                    <span>退出</span>
                </li>
                <li style="float:right;">
                    <img src="../assets/tuichu.png" alt="">
                </li>
                <li style="float:right;margin-right:15px;">
                    门店管理员
                </li>
                <li style="float:right;margin-right:10px;">
                    幻想!欢迎你
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
            <el-menu-item index="1">
                <i class="el-icon-bell"></i>
                <span slot="title">消息中心</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-date"></i>
                <span slot="title">用户管理</span>
            </el-menu-item>
            <el-submenu index="3">
                <template slot="title">
                <i class="el-icon-menu"></i>
                <span>门店管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">门店信息</el-menu-item>
                    <el-menu-item index="3-2">服务管理</el-menu-item>
                    <el-menu-item index="3-3">商品管理</el-menu-item>
                    <el-menu-item index="3-4">订单管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
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
    <div class="content">
        1222222222222223kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        <router-view/>
    </div>
</div>
</template>
<script>
export default {
  methods: {
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.tac {
  width: 200px;
  height: 400px;
  float: left;
}
.header {
  width: 100%;
  height: 50px;
  background-color: rgb(84, 92, 100);
  line-height: 50px;
  cursor: pointer;
}
.header > span {
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-left: 45%;
}
.header div {
  display: inline-block;
  float: right;
  width: 300px;
  height: 50px;
  line-height: 50px;
  margin-right: 30px;
  text-align: center;
}
.header li {
  float: left;
  list-style: none;
  color: #dbdbdb;
}
.header img {
  width: 24px;
  margin-top: 13px;
}
.content{
    width: 82.5%;
    height: 570px;
    background-color: white;
    display: inline-block;
    margin: 5px;
    float: right;
    margin-right: 30px;
}
</style>