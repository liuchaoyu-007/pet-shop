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

module.exports.modifyService = async ( data ) => {  // ------修改服务---------//
    const { serviceId,
        serviceName,
        serviceType,
        serviceSchedule,
        serviceCanFor,
        serviceDetial,
        serviceTime,
        serviceLevel,
        servicePrice,
    } = data ;
    // return await mongoose.model("serviceAdm").find()
    // const datauser = await mongoose.model("serviceAdm").find()
    // for(let i = 0;i<datauser.length;i++){
    //     if(serviceId==datauser[i]._id){
    //         await mongoose.model("serviceAdm").find().update(
    //             datauser[i].serviceName = serviceName
    //         )
            
    //     }
    // }   
    return await mongoose //把查询到的数据返回给服务层
    .model("serviceAdm") //针对数据库里的studios对象
    .find({_id:serviceId}) 
    .update({
        serviceName:serviceName,
        serviceType:serviceType,
        serviceSchedule:serviceSchedule,
        serviceCanFor:serviceCanFor,
        serviceDetial: serviceDetial,
        serviceTime:serviceTime,
        serviceLevel:serviceLevel,
        servicePrice:servicePrice 
    }).exec(); //exec()方法是执行
}