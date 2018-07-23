const mongoose = require("mongoose")

module.exports.Commodity = async Comm =>{
    return await mongoose
    .model("Commodity")
    .create(Comm)
}