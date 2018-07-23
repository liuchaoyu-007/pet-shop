<template>
  <div class="telogs">
    <div class="teloel">
      <el-card class="box-card user">
        <p style="text-align: center;margin: 10px;color: rgb(53, 63, 68);font-size:30px;">宠物邦-登录</p>
        <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" v-model="user" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" type="password" v-model="pass" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="登录类型">
            <el-radio-group v-model="type">
              <el-radio label="平台管理员"></el-radio>
              <el-radio label="门店管理员"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="btn" style="margin-left:18%;">登录</el-button>
            <el-button @click="reg">注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      user: this.$route.params.user,
      pass: this.$route.params.pass,
      type: this.$route.params.type
    };
  },
  methods: {
    async btn() {
      if (this.user != undefined && this.pass != undefined && this.type != undefined) {
        const data = await fetch("/user/Land", {
          method: "post",
          body: JSON.stringify({
            userAcount: this.user, //账号
            userPwd: this.pass, //密码
            userType: this.type //登陆类型
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json());
        if (data != false ){
          this.$alert("登陆成功！", "提示", {
            confirmButtonText: "确定",
            callback: action => {
              localStorage.userName = data.userName;//姓名
              localStorage.userStatus = data.userStatus//状态
              localStorage.userType = data.userType//用户类型
              this.$router.push("/info/messagecenter");
            }
          });
        } else {
          this.$alert("登陆失败，账号或者密码错误", "警告", {
            confirmButtonText: "确定"
          });
        }
      } else {
        this.$alert("输入错误", "提示", {
          confirmButtonText: "确定"
        });
      }
    },
    reg() {
      this.$router.push("/reg");
    }
  }
};
</script>
<style>
.user {
  width: 500px;
  height: 400px;
  box-shadow: 20 0 0 15 red;
  margin: 100px auto;
}

body {
  background-image: url("../assets/16df68841428aaa063dd76639ca3cab8.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}

.teloel {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
}
</style>