var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var serviceAdmSchema = new Schema({
    storesure:{     //店家账号
        type:String  
    },
    serviceName: {  //服务 名称
        type: String
    },
    // 服务类别
    serviceType: {
        type: String
    },
    // 排期
    serviceSchedule: {
        type: String
    },
    // 适用规格
    serviceCanFor: {
        type: String
    },
    // 服务规格
    serviceDetial: {
        type: String
    },
    // 耗时
    serviceTime: {
        type: String
    },
    // 服务等级
    serviceLevel: {
        type: Number
    },
    // 服务价格
    servicePrice: {
        type: Number
    },



});

mongoose.model("serviceAdm", serviceAdmSchema, "serviceAdm");
