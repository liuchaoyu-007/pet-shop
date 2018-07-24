var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImgSchema = new Schema({
	goodsId: {
		type: Schema.Types.ObjectId,
		ref: 'Commodity'
    },
	url: {
		type: String
	},
	type: {
		type: String
	}
});

mongoose.model("imgs", ImgSchema, "imgs");