const mongoose = require("mongoose")
module.exports.Petowner = async (data) => {//注册包括判断是否已注册
    console.log(data)
    const {
        memberuser,//账号
        memberpassword,//密码
        memberPhone,//电话
        memberAcount,//昵称
        memberName,//真实姓名
        menberCard,//会员卡
        memberImg,//头像
        memberAdd,//收货地址
        memberArea,//区域
        memberPoint,//积分
        haveapet,//拥有的宠物
        ShoppingCart,//购物车
        vip//是不是vip
    } = data
    let isdata = "false";
    const datauser = await mongoose.model("Spoilmanagement").find()
    for (let i = 0; i < datauser.length; i++) {
        if (memberuser == datauser[i].memberuser) {
            isdata = "true";
            i = datauser.length + 1;
        } else {
            isdata = "false";
        }
    }
    if (isdata != "true") {
        let datauser = {
            memberuser: memberuser,//账号
            memberpassword: memberpassword,//密码
            memberPhone: memberPhone,//电话
            memberAcount: memberAcount,//昵称
            memberName: memberName,//真实姓名
            menberCard: menberCard,//会员卡
            memberImg: memberImg,//头像,
            memberAdd: memberAdd,//收货地址
            memberArea: memberArea,//区域,
            memberPoint: memberPoint,//积分
            haveapet: haveapet,//宠物
            ShoppingCart: ShoppingCart,//购物车
            vip: vip//vip
        }
        await mongoose.model("Spoilmanagement")
            .create(datauser)
        isdata = datauser;
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
    const datauser = await mongoose.model("Spoilmanagement").find({
        memberuser: memberuser,
        memberpassword: memberpassword
    })
    return datauser;
}

module.exports.Petowgetdog = async (data) => {//销量
    const {
        curPage, eachPage
    } = data
    const modelEmps = mongoose.model("Commodity");
    const count = await modelEmps.count();
    console.log(count)
    const rows = await modelEmps
        .find()
        .sort({
            _id: -1
        })
        .skip((curPage - 1) * eachPage)
        .limit(eachPage);
    console.log(rows)
    let user = [];//开始排序
    for (let i = 0; i < rows.length; i++) {
        user.push(parseInt(rows[i].goodsSpecial));
    }
    user.sort(function (a, b) {
        return b - a;
    });
    let myuser = [];
    for (let m = 0; m < user.length; m++) {
        for (let j = 0; j < rows.length; j++) {
            if (user[m] == rows[j].goodsSpecial) {
                myuser.push(rows[j]);
            }
        }
    }
    let resultarr = [...new Set(myuser)];
    return {
        curPage,
        eachPage,
        count: count,
        maxPage: Math.ceil(count / eachPage),
        rows:resultarr
    };
}