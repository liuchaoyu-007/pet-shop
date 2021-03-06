
//-----------订单管理-------//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    storesure: {
        type: String//这个订单属于那个店家的（店家账号）
    },
    storename: {
        type: String//这个订单属于那个门店
    },
    username: {
        type: String//这个订单属于那个用户（账号）
    },
    usertime: {
        type: String//这个订单购买时间
    },
    userpsrum: {
        type: String//这个订单购买的什么商品
    },
    usernum: {
        type: String//这个订单购买数量
    },
    userprice: {
        type: String//这个订单购买单价
    },
    userzong: {
        type: String//这个订单购买总价
    },
    useryou: {
        type: String//这个订单运费
    },
    userdiqu: {
        type: String//这个订单发往地
    },
    state:{
        type: String//这个订单是否发货
    }
});

mongoose.model("Ordermanagement", MovieSchema, "Ordermanagement");