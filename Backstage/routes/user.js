// -----------后台管理人员和门店用户----------//
var express = require('express');
var router = express.Router();

const { register, Land, list, sets, set, setuserapp, setuserapps } = require("../service/userService")
// -------注册包括判断是否已注册--------//
router.post('/register', async function (req, res, next) {
    res.send(await register(req.body))
});
//------登陆---// 
router.post('/Land', async function (req, res, next) {
    res.send(await Land(req.body))
});
//------用户列表---// 
router.post('/list', async function (req, res, next) {
    res.send(await list(req.body))
});
//------删除用户平台和门店---// 
router.post('/sets', async function (req, res, next) {
    res.send(await sets(req.body))
});
//------删除宠物用户---// 
router.post('/setuserapp', async function (req, res, next) {
    res.send(await setuserapp(req.body))
});
//--修改宠物用户-//
router.post('/setuserapps', async function (req, res, next) {
    res.send(await setuserapps(req.body))
});
//----修改--//
router.post('/set', async function (req, res, next) {
    res.send(await set(req.body))
});
module.exports = router;