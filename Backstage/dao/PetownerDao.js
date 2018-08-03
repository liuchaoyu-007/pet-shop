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
            menberCard: [],//会员卡
            memberImg: memberImg,//头像,
            memberAdd: [],//收货地址
            memberArea: memberArea,//区域,
            memberPoint: memberPoint,//积分
            haveapet: [],//宠物
            ShoppingCart: [],//购物车
            vip: vip//vip
        }
        await mongoose.model("Spoilmanagement")
            .create(datauser)
        isdata = datauser;
    } else {
        isdata = "false";
    }
    for (let i = 0; i < 5000; i++) { }
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
    for (let i = 0; i < 5000; i++) { }
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
    for (let i = 0; i < 5000; i++) { }
    return {
        curPage,
        eachPage,
        count: count,
        maxPage: Math.ceil(count / eachPage),
        rows: resultarr
    };
}
module.exports.Petowgetmov = async (data) => {//价格
    const {
        curPage, eachPage
    } = data
    const modelEmps = mongoose.model("Commodity");
    const count = await modelEmps.count();
    const rows = await modelEmps
        .find()
        .sort({
            _id: -1
        })
        .skip((curPage - 1) * eachPage)
        .limit(eachPage);
    let user = [];//开始排序
    for (let i = 0; i < rows.length; i++) {
        user.push(parseInt(rows[i].goodsPrice));
    }
    user.sort(function (a, b) {
        return a - b;
    });
    let myuser = [];
    for (let m = 0; m < user.length; m++) {
        for (let j = 0; j < rows.length; j++) {
            if (user[m] == rows[j].goodsPrice) {
                myuser.push(rows[j]);
            }
        }
    }
    let resultarr = [...new Set(myuser)];
    for (let i = 0; i < 5000; i++) { }
    return {
        curPage,
        eachPage,
        count: count,
        maxPage: Math.ceil(count / eachPage),
        rows: resultarr
    };
}
module.exports.Petowgetmovs = async (data) => {//价格
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
    let user = [];//开始排序
    for (let i = 0; i < rows.length; i++) {
        user.push(parseInt(rows[i].goodsPrice));
    }
    user.sort(function (a, b) {
        return b - a;
    });
    let myuser = [];
    for (let m = 0; m < user.length; m++) {
        for (let j = 0; j < rows.length; j++) {
            if (user[m] == rows[j].goodsPrice) {
                myuser.push(rows[j]);
            }
        }
    }
    let resultarr = [...new Set(myuser)];
    for (let i = 0; i < 5000; i++) { }
    return {
        curPage,
        eachPage,
        count: count,
        maxPage: Math.ceil(count / eachPage),
        rows: resultarr
    };
}
module.exports.search = async ({ start, count, input }) => {//搜索
    let title = input
    const result = {
        start: ~~start,
        count: ~~count,
    }
    try {
        const movieModel = mongoose.model("Commodity")
        result.total = await movieModel.count({
            goodsName: {
                $regex: new RegExp(title)
            }
        })
        result.rows = await
            movieModel.find({
                goodsName: {
                    $regex: new RegExp(title)
                }
            })
                .skip(result.start)
                .limit(result.count)
                .exec()
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve("")
            }, 2000)
        })
        return result
    } catch (e) {
        console.log('=============== getMovies 异常: =====================');
        console.log(e);
        console.log('====================================');
    }
}
module.exports.Addressadd = async ({ name, home, sucs, defaults, _id }) => {//添加地址
    let data = await mongoose.model("Spoilmanagement").find({ _id: _id })
    let datas = []
    for (let i = 0; i < data[0].memberAdd.length; i++) {
        datas.push(data[0].memberAdd[i])
    }
    let ids = 456789;
    if (datas.length <= 0) {
        ids = 0;
    } else {
        let zhi = parseInt(datas[datas.length - 1].id)
        ids = zhi + 1
    }
    datas.push({
        id: ids,
        name: name,
        home: home,
        sucs: sucs,
        defaults: defaults
    })
    await mongoose.model("Spoilmanagement").find({ _id: _id }).update({
        memberAdd: datas
    })
    return datas
}
module.exports.Addressget = async ({ _id }) => {//查询地址
    let data = await mongoose.model("Spoilmanagement").find({ _id: _id })
    return data[0].memberAdd
}
module.exports.Addressgetsc = async ({ _id, id }) => {//删除地址
    console.log(_id, id)
    let data = await mongoose.model("Spoilmanagement").find({ _id: _id })
    let datas = []
    for (let i = 0; i < data[0].memberAdd.length; i++) {
        datas.push(data[0].memberAdd[i])
    }
    console.log(datas)
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].id == id) {
            datas.splice(i, 1)
        }
    }
    console.log(datas)
    await mongoose.model("Spoilmanagement").find({ _id: _id }).update({
        memberAdd: datas
    })
    return datas
}
module.exports.Addressgetset = async ({ _id, defaults, id }) => {//修改默认地址
    let defaultss = ""
    if (defaults == "yes") {
        defaultss = "no"
    } else {
        defaultss = "yes"
    }
    let data = await mongoose.model("Spoilmanagement").find({ _id: _id })
    let datas = []
    for (let i = 0; i < data[0].memberAdd.length; i++) {
        datas.push(data[0].memberAdd[i])
    }
    let msi = 0;
    for (let i = 0; i < datas.length; i++) {
        datas[i].defaults = "no"
    }
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].id == id) {//找到当前地址
            datas[i].defaults = defaultss;
            i = i + datas.length;
        } else {
            datas[i].defaults = "no"
        }
    }
    await mongoose.model("Spoilmanagement").find({ _id: _id }).update({
        memberAdd: datas
    })
    return datas
}
module.exports.Addresssddmy = async ({ name, home, sucs, defaults, _id, id }) => {//修改地址
    console.log(name, home, sucs, defaults, _id, id)
    let data = await mongoose.model("Spoilmanagement").find({ _id: _id })
    let datas = []
    for (let i = 0; i < data[0].memberAdd.length; i++) {
        datas.push(data[0].memberAdd[i])
    }
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].id == id) {//找到当前地址
            datas[i].name = name;
            datas[i].home = home;
            datas[i].sucs = sucs;
            datas[i].defaults = defaults;
            i = i + datas.length;
        }
    }
    await mongoose.model("Spoilmanagement").find({ _id: _id }).update({
        memberAdd: datas
    })
    return datas
}
module.exports.getshangping = async ({ useradd, type }) => {// -------计算商家所在的最低价格最低邮费和销量总和--------//
    let data = await mongoose.model("Commodity").find({ user: useradd })
    let datas = []
    if (type == "1") {
        datas = data
    } else {
        let Salesvolume = 0;//销量
        let Price = 0;//价格
        let Postage = 0;//邮费
        for (let i = 0; i < data.length; i++) {
            Salesvolume += parseInt(data[i].goodsSpecial)
        }
        console.log(Salesvolume)
        let user = [];//开始排序
        for (let i = 0; i < data.length; i++) {
            user.push(parseInt(data[i].goodsPrice));
        }
        user.sort(function (a, b) {
            return a - b;
        });
        Price = user[0]
        datas = [Salesvolume, Price, Postage]
    }
    return datas
}//
module.exports.xiaoliangzengjia = async ({ user, name, num }) => {//---用户购买商品后商品销量加数量--//
    console.log(user, name, num)
    let data = await mongoose.model("Commodity").find({ user: user, goodsName: name })
    data[0].goodsSpecial = parseInt(data[0].goodsSpecial) + parseInt(num)
    console.log(data[0].goodsSpecial)
    await mongoose.model("Commodity").find({ user: user, goodsName: name }).update(data[0])
    return true
}//
module.exports.gocat = async (data) => {//---用户添加商品到购物车--//username
    let datas = await mongoose.model("Spoilmanagement").find({ memberuser: data.username })
    let datass = []
    for (let i = 0; i < datas[0].ShoppingCart.length; i++) {
        datass.push(datas[0].ShoppingCart[i])
    }
    datass.push(data)
    await mongoose.model("Spoilmanagement").find({ memberuser: data.username }).update({
        ShoppingCart: datass
    })
    return true
}
module.exports.getcat = async ({ user }) => {//---用户查询购物车--//
    let datas = await mongoose.model("Spoilmanagement").find({ memberuser: user })
    return datas[0].ShoppingCart
}
module.exports.shanchucat = async ({ user }) => {//---清空购物车购物车--//
    return await mongoose.model("Spoilmanagement").find({ memberuser: user }).update({
        ShoppingCart: []
    })
}
module.exports.dingdanuser = async ({ user }) => {//---根据当前宠物用户查询相对应的订单--//
    let data = await mongoose.model("Ordermanagement").find({ username: user })
    let datas = []
    for (let i = 0; i < data.length; i++) {
        let img = await mongoose.model("Commodity").find({ user: data[i].storesure })
        datas.push({
            _id: data[i]._id,
            storesure: data[i].storesure,//店家
            states: data[i].state,//发货状态
            name: data[i].userpsrum,//商品名称
            shuomin: img[0].goodsTaste,//商品说明
            userzong: data[i].userzong,//商品总价
            num: data[i].usernum,//商品数量
            userprice: data[i].userprice,//商品单价   
            img: `http://localhost:7201${img[0].goodsImg[0]}`,//商品图片     
        })
    }
    return datas
}
module.exports.fuwu = async (datas) => {//---服务--//
    let data = []
    if (datas.type == "全部") {
        let datai = await mongoose.model("serviceAdm").find()
        console.log(datai)
        for (let i = 0; i < datai.length; i++) {
            let img = ""
            let sjs = parseInt(Math.random() * 4 + 1)
            if (sjs == 1) {
                img = "/imgs/fuwu1.jpg"
            }
            if (sjs == 2) {
                img = "/imgs/fuwu2.jpg"
            }
            if (sjs == 3) {
                img = "/imgs/fuwu3.jpg"
            }
            if (sjs == 4) {
                img = "/imgs/fuwu4.jpg"
            }
            console.log(img)
            data.push({
                serviceName: datai[i].serviceName,//服务名称
                serviceType: datai[i].serviceType,//服务类型
                serviceSchedule: datai[i].serviceSchedule,//服务时间段
                serviceLevel: datai[i].serviceLevel,//服务员等级
                serviceCanFor: datai[i].serviceCanFor,//服务宠物体重范围
                serviceDetial: datai[i].serviceDetial,//服务规格
                serviceTime: datai[i].serviceTime,//服务时长   
                img: img,//店家图片 
                servicePrice: datai[i].servicePrice,//价格
            })
        }
    } else {
        let dats = await mongoose.model("store").find({
            useradd: datas.storesure
        })
        let datais = await mongoose.model("user").find({
            userAcount: dats[0].useradd,
            userType: "门店管理员"
        })
        console.log(datais)
        let datai = await mongoose.model("serviceAdm").find({
            storesure: datais[0]._id,
        })
        for (let i = 0; i < datai.length; i++) {
            let img = ""
            let sjs = parseInt(Math.random() * 4 + 1)
            if (sjs == 1) {
                img = "/imgs/fuwu1.jpg"
            }
            if (sjs == 2) {
                img = "/imgs/fuwu2.jpg"
            }
            if (sjs == 3) {
                img = "/imgs/fuwu3.jpg"
            }
            if (sjs == 4) {
                img = "/imgs/fuwu4.jpg"
            }
            console.log(img)
            data.push({
                serviceName: datai[i].serviceName,//服务名称
                serviceType: datai[i].serviceType,//服务类型
                serviceSchedule: datai[i].serviceSchedule,//服务时间段
                serviceLevel: datai[i].serviceLevel,//服务员等级
                serviceCanFor: datai[i].serviceCanFor,//服务宠物体重范围
                serviceDetial: datai[i].serviceDetial,//服务规格
                serviceTime: datai[i].serviceTime,//服务时长   
                img: img,//店家图片 
                servicePrice: datai[i].servicePrice,//价格
            })
        }
    }
    return data
}
module.exports.removeCommodity = async (data) => {//---用户删除购物车某样商品--//username
    let { datass } = data
    await mongoose.model("Spoilmanagement").find({ memberuser: data.username }).update({
        ShoppingCart: datass
    })
    return true
}