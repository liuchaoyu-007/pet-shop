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
module.exports.list = async ({ myuser }) => {//登陆
    console.log(myuser)
    let data = []
    if (myuser == "全部用户") {
        let owe = await mongoose.model("user").find()//门店-平台
        let two = await mongoose.model("Spoilmanagement").find()//宠物
        for (let i = 0; i < owe.length; i++) {
            data.push(owe[i])
        }
        for (let i = 0; i < two.length; i++) {
            data.push(two[i])
        }
        console.log(data)//得到所有用户列表
    } else if (myuser == "宠物用户") {
        let two = await mongoose.model("Spoilmanagement").find()//宠物
        for (let i = 0; i < two.length; i++) {
            data.push(two[i])
        }
        console.log(data)//得到宠物用户列表
    } else if (myuser == "平台管理员") {
        let owe = await mongoose.model("user").find()//门店-平台
        for (let i = 0; i < owe.length; i++) {
            if (owe[i].userType == "平台管理员") {
                data.push(owe[i])
            }
        }
        console.log(data)//得到平台用户列表
    } else {//平台用户
        let owe = await mongoose.model("user").find()//门店-门店
        for (let i = 0; i < owe.length; i++) {
            if (owe[i].userType == "门店管理员") {
                data.push(owe[i])
            }
        }
        console.log(data)//得到门店用户列表
    }
    return data;
}
module.exports.sets = async ({ _id }) => {//删除平台和门店
    let data = await mongoose.model("user").find()
    let user = ""
    let id = ""
    for (let i = 0; i < data.length; i++) {
        if(data[i]._id==_id){
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