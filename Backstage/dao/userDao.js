const mongoose = require("mongoose")
module.exports.register = async (data) => {//注册包括判断是否已注册
    const {
        userAcount,//账号
        userPwd,//密码
        userPhone,//电话
        userName,//昵称
        userType,//角色
    } = data
    let isdata = "false";
    const datauser = await mongoose.model("user").find()
    for (let i = 0; i < datauser.length; i++) {
        if (userAcount == datauser[i].userAcount && userType == datauser[i].userType) {
            isdata = true;
            i = datauser.length + 1;
        } else {
            isdata = "false";
        }
    }
    if (isdata == "false") {
        await mongoose.model("user")
            .create({
                userAcount: userAcount,//账号
                userPwd: userPwd,//密码
                userPhone: userPhone,//电话
                userName: userName,//昵称
                userType: userType,//角色
                userStatus: "不可用",//状态
            })
        isdata = "true";
    } else {
        isdata = "false";
    }
    return isdata;
}
module.exports.Land = async (data) => {//登陆
    const {
        userAcount,//账号
        userPwd,//密码
        userType//登陆类型
    } = data
    let isdata = "false";
    let my = "false";
    const datauser = await mongoose.model("user").find()
    for (let i = 0; i < datauser.length; i++) {
        if (userAcount == datauser[i].userAcount && userPwd == datauser[i].userPwd && userType == datauser[i].userType) {
            isdata = "true";
            my = datauser[i]
            i = datauser.length + 1;
        } else {
            isdata = "false";
        }
    }
    return my;
}