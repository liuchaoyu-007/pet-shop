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