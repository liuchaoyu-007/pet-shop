var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommoditySchema = new Schema({
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
    goodsImg:Array,
})

mongoose.model("Commodity", CommoditySchema, "Commodity");