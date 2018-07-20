var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    id: {
        type: String
    },
    // 用户登录
    userAcount: {
        type: String
    },
    // 密码
    userPwd: {
        type: Number
    },
    // 手机号
    userPhone: {
        type: String
    },
    // 邮箱
    userMail: {
        type: String
    },
    // 姓名
    userName: {
        type: String
    },
    // 角色
    userType: {
        type: String
    },
    // 状态
    wishCount: {
        type: String
    },



});

mongoose.model("movies", MovieSchema, "movies");