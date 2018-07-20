
//-----------订单管理-------//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    storename: {
        type: String//这个订单属于那个门店
    },
    username: {
        type: String//这个订单属于那个用户
    },
    usertime: {
        type: String//这个订单购买时间
    },
    userpsrum: {
        type: Number//这个订单购买的什么商品
    },
    usernum: {
        type: Number//这个订单购买数量
    },
    userprice: {
        type: Number//这个订单购买价格
    },
});

mongoose.model("Ordermanagement", MovieSchema, "Ordermanagement");