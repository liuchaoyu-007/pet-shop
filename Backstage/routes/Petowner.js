// --------------宠物用户注册登陆以及个人信息-------------//
var express = require('express');
var router = express.Router();

const { Petowner, Petowget, Petowgetdog, Petowgetmov } = require("../service/PetownerService")
// -------注册包括判断是否已注册--------//
router.post('/Petowner', async function (req, res, next) {
    res.send(await Petowner(req.body))
});
//------登陆---//  
router.post('/Petowget', async function (req, res, next) {
    res.send(await Petowget(req.body))
});
//---销量由高到低--//
router.post('/Petowgetdog', async function (req, res, next) {
    res.send(await Petowgetdog(req.body))
});
//---价格由低到高--//
router.post('/Petowgetmov', async function (req, res, next) {
    res.send(await Petowgetmov(req.body))
});
module.exports = router;