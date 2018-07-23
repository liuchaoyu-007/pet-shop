const mongoose = require("mongoose")

module.exports.Ordermanagement = async (datas) => {// -------获取当前门店主任人有的订单（是主人的所有的店里的所有订单总和）--------//
    const {
        storesure,//店家姓名
        page,
        rows
    } = datas
    // const data = {};
    // page = parseInt(page)
    // rows = parseInt(rows)
    // const moviesModel = mongoose.model("Ordermanagement")
    // data.total = await moviesModel.count()
    // data.rows = await moviesModel
    //     .find()
    //     .sort({ _id: -1 })
    //     .skip((page - 1) * rows)
    //     .limit(rows)
    //     .exec();
    // return data
    const datauser = await mongoose.model("Ordermanagement").find()
    let moviesModel = []
    for (let i = 0; i < datauser.length; i++) {
        if (storesure == datauser[i].storesure) {
            moviesModel.push(datauser[i])
        }
    }
    // const data = {};
    // page = parseInt(page)
    // rows = parseInt(rows)
    // data.total = await moviesModel.count()
    // data.rows = await moviesModel
    //     .find()
    //     .sort({ _id: -1 })
    //     .skip((page - 1) * rows)
    //     .limit(rows)
    //     .exec();
    // return data
    // const data = {};
    // page = parseInt(page)
    // rows = parseInt(rows)
    // const moviesModel = mongoose.model("movies")
    // data.total = await moviesModel.count()
    // data.rows = await moviesModel
    //     .find()
    //     .sort({ _id: -1 })
    //     .skip((page - 1) * rows)
    //     .limit(rows)
    //     .exec();
    return moviesModel
}