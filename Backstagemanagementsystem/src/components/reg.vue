<template>
    <div class="bag">
        <div class="teloel ">
            <el-card class="box-card user1">
                <p style="text-align: center;margin: 10px;color: rgb(53, 63, 68);font-size:30px;">宠物邦-注册</p>
                <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名">
                        <el-input 
                            placeholder="请输入用户名"
                            maxlength="8" 
                            v-model="user" 
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="pass">
                        <el-input 
                            placeholder="请输入密码" 
                            maxlength="12" 
                            type="password" 
                            v-model="pass" 
                            auto-complete="off" 
                            clearable max="5"
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="确认密码" prop="pass">
                        <el-input 
                            type="password" 
                            placeholder="请确认密码" 
                            maxlength="12" 
                            v-model="pass1" 
                            auto-complete="off" 
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="手机号码">
                        <el-input 
                            placeholder="请输入手机号" 
                            maxlength="11"
                            v-model="phone"
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="姓名">
                        <el-input 
                            placeholder="请输入姓名" 
                            maxlength="5" 
                            v-model="name"
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="注册权限">
                        <el-radio-group v-model="type">
                            <el-radio label="门店管理员"></el-radio>
                            <el-radio label="平台管理员"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="btn" style="margin-left:18%;">立即注册</el-button>
                        <el-button @click="reg">取消注册</el-button>
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
      user: "",
      pass: "",
      type: "",
      pass1: "",
      phone: "",
      name: ""
    };
  },
  methods: {
    async btn() {
      if (
        this.user != "" &&
        this.pass != "" &&
        this.type != "" &&
        this.pass1 != "" &&
        this.phone != "" &&
        this.name != ""
      ) {
        if (this.pass === this.pass1) {
          const data = await fetch("/user/register", {
            method: "post",
            body: JSON.stringify({
              userAcount: this.user, //账号
              userPwd: this.pass, //密码
              userPhone: this.phone, //手机
              userName: this.name, //姓名
              userType: this.type //注册类型
            }),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(res => res.json());
          if (data == true) {
            this.$alert("注册成功！", "提示", {
              confirmButtonText: "确定",
              callback: action => {
                this.$router.push(
                  `/login/${this.user}/${this.pass}/${this.type}`
                );
              }
            });
          } else {
            this.$alert("注册失败，账号已被注册", "警告", {
              confirmButtonText: "确定"
            });
          }
        } else {
          alert("两次密码入不一致");
        }
      } else {
        this.alerts();
      }
    },
    reg() {
      this.$router.push("/");
    },
    alerts() {
      this.$alert("输入错误", "提示", {
        confirmButtonText: "确定"
      });
    }
  }
};
</script>
<style>
.user1 {
  width: 500px;
  height: 500px;
  box-shadow: 20 0 0 15 red;
  margin: 50px auto;
}

.bag{
  height: 640px;
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