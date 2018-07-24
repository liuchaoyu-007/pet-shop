const { addService,storeService,platformService,deleteService } = require("../dao/serviceManagementDao")


module.exports.addService = async (data) => { //添加服务
    return await addService(data)
}


module.exports.storeService = async (data) => { //门店
    return await storeService(data)
}


module.exports.platformService = async (data) => { //平台
    return await platformService(data)
}

module.exports.deleteService = async (data) => { //删除服务
    return await deleteService(data)
}