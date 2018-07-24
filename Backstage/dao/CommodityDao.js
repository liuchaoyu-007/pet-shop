const mongoose = require("mongoose")

module.exports.Commodity = async Comm => { //添加
    const {
        goodsDate,
        goodsName,
        goodsType,
        goodsRegion,
        goodsSpecial,
        goodsTime,
        goodsPrice,
        goodsTaste,
        goodsSize,
        goodsCanFor,
    } = Comm
    await mongoose
        .model("Commodity")
        .find({
            goodsDate: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddawdd"
        })
        .update(
           { goodsDate,
            goodsName,
            goodsType,
            goodsRegion,
            goodsSpecial,
            goodsTime,
            goodsPrice,
            goodsTaste,
            goodsSize,
            goodsCanFor,}
        )
        return true
}

module.exports.getCinemaPage = async studios => { //查询
    return await mongoose //把查询到的数据返回给服务层
        .model("Commodity") //针对数据库里的studios对象
        .find(); //进行查询
};