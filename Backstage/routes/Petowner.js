// --------------宠物用户注册登陆以及个人信息-------------//
var express = require('express');
var router = express.Router();

const { Petowner, Petowget, Petowgetdog } = require("../service/PetownerService")
// -------注册包括判断是否已注册--------//
router.post('/Petowner', async function (req, res, next) {
    res.send(await Petowner(req.body))
});
//------登陆---//  
router.post('/Petowget', async function (req, res, next) {
    res.send(await Petowget(req.body))
});
//---销量最高--//
router.post('/Petowgetdog', async function (req, res, next) {
    res.send(await Petowgetdog(req.body))
});
module.exports = router;