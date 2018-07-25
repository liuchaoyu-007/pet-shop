var express = require('express');
var router = express.Router();

const {
	uploadFile
} = require('../util/upload')

const { addImg } = require("../service/imgsServicemd")

router.post('/upload', async function (req, res, next) {
	const {type}=req.query
	// 上传文件事件
	const { success, data } = await uploadFile(req, res, {
		//目录
		fileType: 'imgs',
		//路径
		path: "./public/images/",
	})
	console.log(data)
	res.send(await addImg({...data,type}))

});

module.exports = router;