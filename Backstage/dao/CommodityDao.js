const mongoose = require("mongoose")

module.exports.Commodity = async Comm => { //添加
console.log(Comm.goodsImg)
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

module.exports.getCinemaPage = async ({ curPage, eachPage, type, user }) => { //查询
    let types = type
    let datas = {}
    if (types == "平台管理员") {
        curPage = parseInt(curPage);
        eachPage = parseInt(eachPage);
        const modelEmps = mongoose.model("Commodity");
        const count = await modelEmps.count();
        const rows = await modelEmps
            .find()
            .sort({
                _id: -1
            })
            .skip((curPage - 1) * eachPage)
            .limit(eachPage);
        datas = {
            curPage,
            eachPage,
            count: count,
            maxPage: Math.ceil(count / eachPage),
            rows
        };
    } else {
        const modelEmps = mongoose.model("Commodity");
        const count = await modelEmps
            .find({
                user: user
            })
            .count();
        const rows = await modelEmps
            .find({
                user: user
            })
            .sort({
                _id: -1
            })
            .skip((curPage - 1) * eachPage)
            .limit(eachPage);
        datas = {
            curPage,
            eachPage,
            count: count,
            maxPage: Math.ceil(count / eachPage),
            rows
        };
    }
    return datas
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