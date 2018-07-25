const mongoose = require("mongoose")

module.exports.Commodity = async Comm => { //添加

    await mongoose
        .model("Commodity")
        .create({
            user: Comm.user,
            goodsDate: Comm.goodsDate,
            goodsName: Comm.goodsName,
            goodsType: Comm.goodsType,
            goodsRegion: Comm.goodsRegion,
            goodsSpecial: Comm.goodsSpecial,
            goodsTime: Comm.goodsTime,
            goodsPrice: Comm.goodsPrice,
            goodsTaste: Comm.goodsTaste,
            goodsSize: Comm.goodsSize,
            goodsCanFor: Comm.goodsCanFor,
            goodsImg: Comm.goodsImg,
        })
    return true
}

module.exports.getCinemaPage = async ({ type, user }) => { //查询
    let data = []
    if (type == "平台管理员") {
        data = await mongoose.model("Commodity").find()
    } else {
        let datas = await mongoose.model("Commodity").find()
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].user == user) {
                data.push(datas[i])
            }
        }
    }
    return data
};

module.exports.moveCinema = async ({
    _id
}) => { //删除
    return await mongoose
        .model("Commodity")
        .remove({
            _id: _id
        });
}

module.exports.alterCinema = async (yonghu) => {
    return await mongoose
        .model("Commodity")
        .find({
            _id: yonghu._id
        })
        .update({
            goodsDate: yonghu.goodsDate,
            goodsName: yonghu.goodsName,
            goodsType: yonghu.goodsType,
            goodsRegion: yonghu.goodsRegion,
            goodsSpecial: yonghu.goodsSpecial,
            goodsTime: yonghu.goodsTime,
            goodsPrice: yonghu.goodsPrice,
            goodsTaste: yonghu.goodsTaste,
            goodsSize: yonghu.goodsSize,
            goodsCanFor: yonghu.goodsCanFor,
            goodsImg: yonghu.goodsImg[0],
        })

}