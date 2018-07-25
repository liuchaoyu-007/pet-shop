<template>
    <div>
        <template>
            <el-table :data="Todos" border style="width: 100%">
                <el-table-column prop="memberuser" label="账号" width="150">
                </el-table-column>
                <el-table-column prop="memberpassword" label="密码" width="120">
                </el-table-column>
                <el-table-column prop="memberPhone" label="电话" width="120">
                </el-table-column>
                <el-table-column prop="memberAcount" label="昵称" width="120">
                </el-table-column>
                <el-table-column prop="memberName" label="真实姓名" width="150">
                </el-table-column>
                <el-table-column prop="menberCard" label="会员卡" width="120">
                </el-table-column>
                <el-table-column prop="memberArea" label="区域" width="200">
                </el-table-column>
                <el-table-column prop="memberPoint" label="积分" width="120">
                </el-table-column>
                <el-table-column prop="haveapet" label="会员" width="120">
                </el-table-column>
                <el-table-column label="操作" width="100">
                    <template slot-scope="scope">

                        <el-button size="small" type="text" @click="bianji(scope.$index,scope.row)" style="margin-right: 10px">修改</el-button>
                        <el-dialog title="宠主管理" :visible.sync="centerDialogVisible" width="30%" center>
                            <div>
                                <span>账户</span>
                                <el-input maxlength="9" v-model="memberuser" size="mini" placeholder="请输入账户"></el-input>
                            </div>
                            <div>
                                <span>密码</span>
                                <el-input maxlength="9" v-model="memberpassword"  size="mini" placeholder="请输入账户"></el-input>
                            </div>
                            <div>
                                <span>电话</span>
                                <el-input maxlength="9" v-model="memberPhone"  size="mini" placeholder="请输入账户"></el-input>
                            </div>
                            <div>
                                <span>昵称</span>
                                <el-input maxlength="9" v-model="memberAcount"  size="mini" placeholder="请输入账户"></el-input>
                            </div>
                            <div>
                                <span>真实姓名</span>
                                <el-input maxlength="9" v-model="memberName"  size="mini" placeholder="请输入账户"></el-input>
                            </div>
                            <div>
                                <span>会员卡</span>
                                <el-input maxlength="9" v-model="menberCard"  size="mini" placeholder="请输入账户"></el-input>
                            </div>

                            <div>
                                <span>区域</span>
                                <el-input maxlength="9" v-model="memberArea"  size="mini" placeholder="请输入账户"></el-input>
                            </div>

                            <div>
                                <span>积分</span>
                                <el-input maxlength="9" v-model="memberPoint"  size="mini" placeholder="请输入账户"></el-input>
                            </div>
                            <div>
                                <span>会员</span>
                                <el-input maxlength="9" v-model="haveapet"  size="mini" placeholder="请输入账户"></el-input>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="centerDialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="tianjia">确 定</el-button>
                            </span>
                        </el-dialog>


                        <el-button @click="shanchu(scope.row)" type="text" size="small">删除</el-button>

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
                centerDialogVisible: false,
                memberuser:"",
                memberpassword:"",
                memberPhone:"",
                memberAcount:"",
                memberName:"",
                menberCard:"",
                memberArea:"",
                memberPoint:"",
                haveapet:"",
                idindex: 0
            }
          

        },
        methods: {
            ...mapMutations("chongwu", ["shanchu"]),
            
            bianji(index,row){
                this.centerDialogVisible = true
                this.memberuser = row.memberuser
                this.memberpassword = row.memberpassword
                this.memberPhone = row.memberPhone
                this.memberAcount = row.memberAcount
                this.memberName = row.memberName
                this.menberCard = row.menberCard
                this.memberArea = row.memberArea
                this.memberPoint = row.memberPoint
                this.haveapet = row.haveapet
                this.idindex=row._id
            },
            tianjia(){
                this.centerDialogVisible = false
                console.log('i')
            }

        },
        computed: {
            ...mapGetters("chongwu", ["Todos"])
        }
    }
</script>
<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>