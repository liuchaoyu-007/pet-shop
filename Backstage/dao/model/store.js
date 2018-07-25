var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreSchema= new Schema({
    useradd:{
        type:String//用户ID
    },
    shopName:{//店名
        type:String
    },
    shopLicenceNum:{//营业执照号码
        type:String
    },
    shopLicenceImg:{//营业执照图片
        type: String
    },
    shopAdd:{//营业执照地址
        type:String
    },
    shopCorporate:{//法人名字
        type:String
    },
    shopContacts:{//联系人
        type:String
    },
    shopTel:{//联系电话
        type:String
    },
    shopCover:{//店铺门头图片
        type: Schema.Types.ObjectId,
		url: "imgs"
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
    empPhone:{//店员电话
        type:String
    }
});

mongoose.model("store", StoreSchema, "store");