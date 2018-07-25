var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storeSchema = new Schema({
	goodsId: {
		type: Schema.Types.ObjectId,
		ref: 'goods'
    },
	shopsId: {
		type: Schema.Types.ObjectId,
		ref: 'store'
    },
    //路径
	url: {
		type: String
    },
    //图片类型（good0:商品小图，good1：商品大图，shop0：门店营业执照，shop1:门店个头图，member：宠主头图）
	type: {
		type: String
	}
});

mongoose.model("imgsmd", storeSchema, "imgsmd");