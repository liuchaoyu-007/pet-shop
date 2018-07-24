const mongoose = require("mongoose")

module.exports.add = async (data) => {// -------创建门店--------//
    return await mongoose.model("store").create(data)
}