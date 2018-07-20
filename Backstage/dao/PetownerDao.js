const mongoose = require("mongoose")
module.exports.Petowner = async (data) => {//注册包括判断是否已注册
    const {
        memberuser,//账号
        memberpassword,//密码
        memberPhone,//电话
        memberAcount,//昵称
        memberName,//真实姓名
        memberImg,//头像
    } = data
    let isdata = "false";
    const datauser = await mongoose.model("Spoilmanagement").find()
    for (let i = 0; i < datauser.length; i++) {
        if (memberuser == datauser[i].memberuser && memberpassword == datauser[i].memberpassword) {
            isdata = "true";
            i = datauser.length + 1;
        } else {
            isdata = "false";
        }
    }
    if (isdata=="true") {
        await mongoose.model("Spoilmanagement")
            .create({
                memberuser: memberuser,//账号
                memberpassword: memberpassword,//密码
                memberPhone: memberPhone,//电话
                memberAcount: memberAcount,//昵称
                memberName: memberName,//真实姓名
                menberCard: [],//会员卡
                memberImg: memberImg,//头像,
                memberAdd: [],//收货地址
                memberArea: memberArea,//区域,
                memberPoint: 0,//积分
                haveapet: []//宠物
            })
            isdata = "true";
    } else {
        isdata = "false";
    }
    return isdata;
}
module.exports.Petowget = async (data) => {//登陆
    const {
        memberuser,//账号
        memberpassword,//密码
    } = data
    let isdata = "false";
    const datauser = await mongoose.model("Spoilmanagement").find()
    for (let i = 0; i < datauser.length; i++) {
        if (memberuser == datauser[i].memberuser && memberpassword == datauser[i].memberpassword) {
            isdata = "true";
            i = datauser.length + 1;
        } else {
            isdata = "false";
        }
    }
    return isdata;
}