
//-----------宠物主管理-用户-------//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    memberuser :{
		type: String//账号
    },
    memberpassword :{
		type: String//密码
    },
	memberPhone: {
		type: String//电话
	},
	memberAcount: {
		type: String//昵称
	},
	memberName: {
		type: String//真实姓名
	},
	menberCard: {
		type: Array//会员卡
	},
	memberImg: {
		type: String//头像url
	},
	memberAdd: {
		type: String//收货地址
	},
	memberArea: {
		type: String//区域
	},
	memberPoint: {
        type: Number//积分
    },
	haveapet: {
		type: Array,//拥有的宠物
	}
});

mongoose.model("Spoilmanagement", MovieSchema, "Spoilmanagement");