const mongoose = require("mongoose")
module.exports.setuserapp = async (data) => {//删除宠物用户
    const { memberuser } = data;
    console.log(memberuser)
    return await mongoose.model("Spoilmanagement").remove({
        memberuser: memberuser
    })
}
module.exports.setuserapps = async (data) => {//删除宠物用户
    const { _id, //id
        memberuser, //账号
        memberpassword, //密码
        memberPhone, //电话
        memberAcount, //昵称
        memberName, //真实姓名
        memberArea, //地址
        memberPoint, //积分
        vip
    } = data
    console.log(vip)
    return await mongoose.model("Spoilmanagement").find({
        _id: _id
    }).update({
        memberuser, //账号
        memberpassword, //密码
        memberPhone, //电话
        memberAcount, //昵称
        memberName, //真实姓名
        memberArea, //地址
        memberPoint, //积分
        vip
    })
}
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
module.exports.list = async ({ myuser, curPage, eachPage }) => {//渲染
    let type = myuser;
    let data = {}
    curPage = parseInt(curPage);
    eachPage = parseInt(eachPage);
    if (type == "平台管理员" || type == "门店管理员") {
        const modelEmps = mongoose.model("user");
        const count = await modelEmps.find({
            userType: type
        }).count();
        const rows = await modelEmps
            .find({
                userType: type
            })
            .sort({
                _id: -1
            })
            .skip((curPage - 1) * eachPage)
            .limit(eachPage);
        data = {
            curPage,
            eachPage,
            count: count,
            maxPage: Math.ceil(count / eachPage),
            rows
        };
    }
    if (type == "全部用户") {
        const modelEmps = mongoose.model("user");
        const count = await modelEmps.count();
        const rows = await modelEmps
            .find()
            .sort({
                _id: -1
            })
            .skip((curPage - 1) * eachPage)
            .limit(eachPage);
        data = {
            curPage,
            eachPage,
            count: count,
            maxPage: Math.ceil(count / eachPage),
            rows
        };
    }
    if (type == "宠物用户") {
        const modelEmps = mongoose.model("Spoilmanagement");
        const count = await modelEmps.count();
        const rows = await modelEmps
            .find()
            .sort({
                _id: -1
            })
            .skip((curPage - 1) * eachPage)
            .limit(eachPage);
        data = {
            curPage,
            eachPage,
            count: count,
            maxPage: Math.ceil(count / eachPage),
            rows
        };
    }
    return data
}
module.exports.sets = async ({ _id }) => {//删除平台和门店
    let data = await mongoose.model("user").find()
    let user = ""
    let id = ""
    for (let i = 0; i < data.length; i++) {
        if (data[i]._id == _id) {
            user = data[i].userAcount
            id = data[i]._id
        }
    }
    await mongoose.model("user").remove({//用户
        _id: _id
    })
    await mongoose.model("store").remove({//门店
        useradd: user
    })
    await mongoose.model("serviceAdm").remove({//服务
        storesure: id
    })
    await mongoose.model("Ordermanagement").remove({//订单
        storesure: user
    }),
        await mongoose.model("Ordermanagement").remove({//商品
            user: user
        })
    return true
}
module.exports.set = async (data) => {//修改用户信息
    const {
        _id,
        userAcount,//账号
        userPwd,//密码
        userPhone,//电话
        userName,//昵称
        userType,//角色
        userStatus,//状态
    } = data
    await mongoose.model("user").find({
        _id: _id
    }).update({
        userAcount,//账号
        userPwd,//密码
        userPhone,//电话
        userName,//昵称
        userType,//角色
        userStatus,//状态
    })
    return true
}