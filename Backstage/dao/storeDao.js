const mongoose = require("mongoose")

module.exports.add = async (data) => {// -------创建门店--------//
    return await mongoose.model("store").create(data)
}
module.exports.get = async ({ curPage, eachPage, type, useradd }) => {// -------查询门店--------//
    let types = type
    let datas = {}
    if (types == "平台管理员") {
        curPage = parseInt(curPage);
        eachPage = parseInt(eachPage);
        const modelEmps = mongoose.model("store");
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
        const modelEmps = mongoose.model("store");
        const count = await modelEmps
            .find({
                useradd: useradd
            })
            .count();
        const rows = await modelEmps
            .find({
                useradd: useradd
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
}
module.exports.remove = async ({ id }) => {// -------删除门店--------//
    return await mongoose.model("store").remove({ _id: id })
}
module.exports.modify = async (data) => {// -------修改门店--------//
    return await mongoose.model("store").find({ _id: data.useradd }).update({
        shopName: data.shopName,
        shopContacts: data.shopContacts,
        shopCorporate: data.shopCorporate,
        shopAdd: data.shopAdd,
        shopTel: data.shopTel,
        shopLicenceNum: data.shopLicenceNum,
        shopDescription: data.shopDescription
    })
}