var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommoditySchema = new Schema({
    user:{//账号
        type: String
    },
    goodsDate:{
        type: String
    },
    goodsName:{
        type: String
    },
    goodsType:{
        type: String
    },
    goodsRegion:{
        type: String
    },
    goodsSpecial:{
        type: String
    },
    goodsTime:{
        type: String
    },
    goodsPrice:{
        type: String
    },
    goodsTaste:{
        type: String
    },
    goodsSize:{
        type: String
    },
    goodsCanFor:{
        type: String
    },
    goodsImg:[{
        type:Array,
        ref:"goodsImg"
    }],
})

mongoose.model("Commodity", CommoditySchema, "Commodity");