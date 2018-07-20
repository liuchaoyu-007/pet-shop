<template>
    <div class="telog">
        <div class="teloel">
            <el-card class="box-card user">
                <p style="text-align: center;margin: 10px;color: rgb(53, 63, 68);font-size:30px;">宠物邦-注册</p>
                <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名">
                        <el-input placeholder="请输入用户名" v-model="user" clearable>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input placeholder="请输入密码" v-model="pass" clearable>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="登录类型">
                        <el-radio-group v-model="type">
                            <el-radio label="门店用户"></el-radio>
                            <el-radio label="平台管理"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="btn">立即注册</el-button>
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
                type: ""
            };
        },
        methods: {
            btn() {
                if (this.user != "" && this.pass != "" && this.type != "") {
                    this.$router.push('/info')
                } else {
                    this.alerts()
                }
            },
            reg() {
                this.$router.push('/')
            },
            alerts() {
                this.$alert('输入错误', '提示', {
                    confirmButtonText: '确定',
                });
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

    .telog {
        height: 615px;
        background-image: url("../assets/16df68841428aaa063dd76639ca3cab8.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .teloel {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: rgba(0, 0, 0, .4);
        width: 100%;
        height: 100%;

    }
</style>