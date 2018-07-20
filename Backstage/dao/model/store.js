var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreSchema= new Schema({
    id:{
        type:String
    },
    shopName:{//店名
        type:String
    },
    shopLicenceNum:{//营业执照号码
        type:Number
    },
    shopLicenceImg:{//营业执照图片
        type:String
    },
    shopAdd:{//营业执照地址
        type:String
    },
    shopLocation:{//定位
        type:String
    },
    shopCorporate:{//法人
        type:String
    },
    shopTel:{//联系电话
        type:Number
    },
    shopImg:{//头图
        type:String
    },
    shopFeature:{//特色
        type:String
    },
    VIPLevel:{//VIP等级
        type:String
    },
    CommissionRate:{//佣金比例
        type:String
    },
    shopEmployee:[{//店员
        empName:String,//姓名
        empLevel:String,//职级
        empPhone:Number//联系电话
    }]
});

mongoose.model("store", StoreSchema, "store");