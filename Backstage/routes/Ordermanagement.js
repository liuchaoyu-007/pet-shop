// --------------订单管理-------------//
var express = require('express');
var router = express.Router();

const { Ordermanagement, Ordermanagementtype, add, hot, sc } = require("../service/OrdermanagementService")
// -------获取当前门店主任人有的订单（是主人的所有的店里的所有订单总和）--------//
router.post('/Ordermanagement', async function (req, res, next) {
    res.send(await Ordermanagement(req.body))
});
// -------获取所有门店主任人有的订单总和--------//
router.post('/Ordermanagementtype', async function (req, res, next) {
    res.send(await Ordermanagementtype(req.body))
});
//-------添加订单----------//
router.post('/add', async function (req, res, next) {
    res.send(await add(req.body))
});
//----修改订单-//
router.post('/hot', async function (req, res, next) {
    res.send(await hot(req.body))
});
//----删除订单-//
router.post('/sc', async function (req, res, next) {
    res.send(await sc(req.body))
});
module.exports = router;