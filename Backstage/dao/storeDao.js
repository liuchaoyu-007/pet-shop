const mongoose = require("mongoose")

module.exports.add = async (data) => {// -------创建门店--------//
    return await mongoose.model("store").create(data)
}
module.exports.get = async ({ type, useradd }) => {// -------查询门店--------//
    let data = []
    if (type == "平台管理员") {
        data = await mongoose.model("store").find()
    } else {
        let datas = await mongoose.model("store").find()
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].useradd == useradd) {
                data.push(datas[i])
            }
        }
    }
    return data
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