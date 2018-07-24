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
    shopCorporate:{//法人
        type:String
    },
    shopContacts:{//联系人
        type:String
    },
    shopTel:{//联系电话
        type:Number
    },
    shopCover:{//店铺门头图片
        type:String
    },
    shopDescription:{//店铺描述
        type:String
    },
    empName:{//店员姓名
        type:String
    },
    empLevel:{//店员职级
        type:String
    },
    empLevel:{//店员职级
        type:String
    },
    shopEmployee:[{//店员
        empName:String,//姓名
        empLevel:String,//职级
        empPhone:Number//联系电话
    }]
});

mongoose.model("store", StoreSchema, "store");