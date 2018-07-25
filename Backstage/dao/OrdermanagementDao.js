const mongoose = require("mongoose")

module.exports.Ordermanagement = async (datas) => {// -------获取当前门店主任人有的订单（是主人的所有的店里的所有订单总和）--------//
    console.log("查询当前门店订单")
    const {
        storesure,//店家账号
    } = datas
    const datauser = await mongoose.model("Ordermanagement").find()
    let moviesModel = []
    for (let i = 0; i < datauser.length; i++) {
        if (storesure == datauser[i].storesure) {
            moviesModel.push(datauser[i])
        }
    }
    return moviesModel
}
module.exports.Ordermanagementtype = async (datas) => {// -------获取所有门店主任人有的订单总和--------//
    console.log("查询所有门店订单")
    return await mongoose.model("Ordermanagement").find()
}
module.exports.add = async (data) => {// -------添加订单--------//
    return await mongoose.model("Ordermanagement").create(data)
}
module.exports.hot = async (data) => {// -------添加订单--------//
    const {
        id,
        storesure, //这个订单属于那个店家的（店家账号）
        storename, //这个订单属于那个门店
        username, //这个订单属于那个用户(账号)
        usertime, //这个订单购买时间
        userpsrum, //这个订单购买的什么商品
        usernum, //这个订单购买数量
        userprice, //这个订单购买单价
        userzong, //这个订单购买总价
        useryou, //这个订单运费
        userdiqu, //这个订单发往地
        state //这个订单是否发货
    } = data
    await mongoose.model("Ordermanagement")
        .find({ _id: id })
        .update({
            storesure: storesure, //这个订单属于那个店家的（店家账号）
            storename: storename, //这个订单属于那个门店
            username: username, //这个订单属于那个用户(账号)
            usertime: usertime, //这个订单购买时间
            userpsrum: userpsrum, //这个订单购买的什么商品
            usernum: usernum, //这个订单购买数量
            userprice: userprice, //这个订单购买单价
            userzong: userzong, //这个订单购买总价
            useryou: useryou, //这个订单运费
            userdiqu: userdiqu, //这个订单发往地
            state: state //这个订单是否发货
        })
    return true
}
module.exports.sc = async (data) => {// -------删除订单--------//
    console.log(data)
    const { id } = data
    await mongoose.model("Ordermanagement")
        .remove({ _id: id })
    return true
}