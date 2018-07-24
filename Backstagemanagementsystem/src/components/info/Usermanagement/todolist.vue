<template>
    <div>

        <template>
            <el-table :data="Todos" style="width: 100%">
                <el-table-column prop="userAcount" label="账户" width="100%">
                </el-table-column>
                <el-table-column prop="userPhone" label="手机号" width="100%">
                </el-table-column>
                <el-table-column prop="userName" label="姓名" width="100%">
                </el-table-column>
                <el-table-column prop="userType" label="登录类型" width="100%">
                </el-table-column>
                <el-table-column prop="userStatus" label="状态" width="100%">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">


                        <el-button size="mini" type="primary" @click="bianjis(scope.$index,scope.row)" style="margin-right: 10px">权限管理</el-button>
                        <el-dialog title="权限管理" :visible.sync="centerDialogVisible" width="30%" center>

                            <div>
                                <span>账户</span>
                                <el-input maxlength="9" size="mini" v-model="userAcount" placeholder="请输入账户"></el-input>
                            </div>
                            <div>
                                <span>手机号</span>
                                <el-input maxlength="11" size="mini" v-model="userPhone" placeholder="请输入手机号"></el-input>
                            </div>

                            <div>
                                <span>姓名</span>
                                <el-input maxlength="9" size="mini" v-model="userName" placeholder="请输入姓名"></el-input>
                            </div>
                            <div>
                                <p>登录类型</p>
                                <el-radio v-model="userType" label="平台管理员">平台管理员</el-radio>
                                <el-radio v-model="userType" label="门店管理员">门店管理员</el-radio>
                            </div>

                            <div>
                                <p>状态</p>
                                <el-radio v-model="userStatus" label="申请中">申请中</el-radio>
                                <el-radio v-model="userStatus" label="可用">可用</el-radio>
                                <el-radio v-model="userStatus" label="不可用">不可用</el-radio>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="centerDialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="tianjia">确 定</el-button>
                            </span>
                        </el-dialog>

                        <el-button size="mini" type="danger" @click="handleDeletes(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

        </template>

    </div>
</template>
<script>
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        data() {
            return {
              
                index: 5,
                centerDialogVisible: false,
                userAcount: "",
                userPhone: "",
                userName: "",
                userType: "",
                userStatus: "",
                idindex: 0
            }
        },
        computed: {
            ...mapGetters("Usermanagement", ["Todos"])
        },
        methods: {
            ...mapMutations("Usermanagement", ["handleDelete"]),

            bianjis(index, row) {
                this.centerDialogVisible = true
                this.userAcount = row.userAcount
                this.userPhone = row.userPhone
                this.userName = row.userName
                this.userType = row.userType
                this.userStatus = row.userStatus
                this.idindex = index
            },

            tianjia() {//修改管理
                console.log('i')
                for (let i = 0; i < this.Todos.length; i++) {
                    if (this.Todos[i].id == this.idindex) {
                        this.Todos[i].userAcount = this.userAcount
                        this.Todos[i].userPhone = this.userPhone
                        this.Todos[i].userName = this.userName
                        this.Todos[i].userType = this.userType
                        this.Todos[i].userStatus = this.userStatus
                    }
                }


                this.centerDialogVisible = false
            },
            handleDeletes(index,row){
                this.handleDelete(row)
            }
        }
    }
</script>
<style>
</style>