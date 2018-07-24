var express = require('express');
var router = express.Router();

const {uploadFile} = require('../util/upload')

const { addImg } = require("../service/imgsservice.js")

router.post('/upload', async function (req, res, next) {
	// 上传文件事件
	const { success, data } = await uploadFile(req, res, {
		//目录
		fileType: 'movies',
		//路径
		path: "./public/images/",
	})
	console.log(data)
	res.send(await addImg(data))

});

module.exports = router;