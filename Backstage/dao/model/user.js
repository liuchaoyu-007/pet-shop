
//-----------后台管理人员和门店用户-------//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    userAcount: {
        type: String//用户名
    },
    userPwd: {
        type: String//密码
    },
    userPhone: {
        type: String//手机号
    },
    userName: {
        type: String//姓名
    },
    userType: {
        type: String//角色
    },
    userStatus: {
        type: String//状态
    },
});

mongoose.model("user", MovieSchema, "user");