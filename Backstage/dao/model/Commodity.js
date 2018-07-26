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
        type: Number
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
        type:Schema.Types.ObjectId,
        ref:"goodsImg"
    }],
})

mongoose.model("Commodity", CommoditySchema, "Commodity");