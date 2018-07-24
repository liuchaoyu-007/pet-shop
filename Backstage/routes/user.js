// -----------后台管理人员和门店用户----------//
var express = require('express');
var router = express.Router();

const { register, Land } = require("../service/userService")
// -------注册包括判断是否已注册--------//
router.post('/register', async function (req, res, next) {
    res.send(await register(req.body))
});
//------登陆---// 
router.post('/Land', async function (req, res, next) {
    res.send(await Land(req.body))
});
module.exports = router;