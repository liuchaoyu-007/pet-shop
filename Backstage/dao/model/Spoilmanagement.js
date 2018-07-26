
//-----------宠物主管理-用户-------//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
	memberuser: {
		type: String//账号
	},
	memberpassword: {
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
		type: Array//收货地址
	},
	memberArea: {
		type: String//区域
	},
	memberPoint: {
		type: String//积分
	},
	haveapet: {
		type: Array,//拥有的宠物
	},
	ShoppingCart: {
		type: Array,//购物车
	},
	vip: {
		type: String//vip
	}
});

mongoose.model("Spoilmanagement", MovieSchema, "Spoilmanagement");