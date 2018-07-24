const mongoose = require("mongoose")


module.exports.addService = async (data) => {// ------添加服务---------//
    return await mongoose.model("serviceAdm").create(data)
    // console.log(data)
    
}

module.exports.storeService = async (data) => {// ------门店管理员登陆对应的服务---------//
    // console.log(data)
    const {
        storesure,//店家账号
    } = data
    const datauser = await mongoose.model("serviceAdm").find()
    let moviesModel = []
    for (let i = 0; i < datauser.length; i++) {
        if (storesure == datauser[i].storesure) {
            moviesModel.push(datauser[i])
        }
    }
    return moviesModel
}

module.exports.platformService = async (data) => {  // ------平台管理员登陆对应的服务---------//
    return await mongoose.model("serviceAdm").find()
    // console.log(data)
}


module.exports.deleteService = async ( {serviceId} ) => {  // ------删除服务---------//
    return await mongoose.model("serviceAdm").find().remove({_id:serviceId})   
}