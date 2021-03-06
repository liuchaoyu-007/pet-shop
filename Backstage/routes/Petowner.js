// --------------宠物用户注册登陆以及个人信息-------------//
var express = require('express');
var router = express.Router();

const {
    Petowner,
    Petowget,
    Petowgetdog,
    Petowgetmov,
    search,
    Petowgetmovs,
    Addressadd,
    Addressget,
    Addressgetsc,
    Addressgetset,
    Addresssddmy,
    getshangping,
    xiaoliangzengjia,
    gocat,
    getcat,
    shanchucat,
    dingdanuser,
    fuwu,
    removeCommodity,
    fuwusetssss,
    getfuwusetssss,
    getfuwusetset
} = require("../service/PetownerService")
// -------用户添加预约--------//
router.post('/fuwusetssss', async function (req, res, next) {
    res.send(await fuwusetssss(req.body))
});
// -------用户取消预约--------//
router.post('/getfuwusetset', async function (req, res, next) {
    res.send(await getfuwusetset(req.body))
});
// -------用户查询预约--------//
router.post('/getfuwusetssss', async function (req, res, next) {
    res.send(await getfuwusetssss(req.body))
});
// -------计算商家所在的最低价格最低邮费和销量总和--------//
router.post('/getshangping', async function (req, res, next) {
    res.send(await getshangping(req.body))
});
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
//---价格由高到低--//
router.post('/Petowgetmovs', async function (req, res, next) {
    res.send(await Petowgetmovs(req.body))
});
//---搜索--//
router.post('/search', async function (req, res, next) {
    res.send(await search(req.body))
});
//---地址添加--//
router.post('/Addressadd', async function (req, res, next) {
    res.send(await Addressadd(req.body))
});
//---地址添加--//
router.post('/Addressget', async function (req, res, next) {
    res.send(await Addressget(req.body))
});
//---删除地址--//
router.post('/Addressgetsc', async function (req, res, next) {
    res.send(await Addressgetsc(req.body))
});
//---修改默认地址--//
router.post('/Addressgetset', async function (req, res, next) {
    res.send(await Addressgetset(req.body))
});
//---修改地址--//
router.post('/Addresssddmy', async function (req, res, next) {
    res.send(await Addresssddmy(req.body))
});
//---用户购买商品后商品销量加数量--//
router.post('/xiaoliangzengjia', async function (req, res, next) {
    res.send(await xiaoliangzengjia(req.body))
});
//---用户添加商品到购物车--//
router.post('/gocat', async function (req, res, next) {
    res.send(await gocat(req.body))
});
//---用户查询购物车--//
router.post('/getcat', async function (req, res, next) {
    res.send(await getcat(req.body))
});
//---删除购物车某样商品--//
router.post('/removeCommodity', async function (req, res, next) {
    res.send(await removeCommodity(req.body))
});
//---清空购物车--//
router.post('/shanchucat', async function (req, res, next) {
    res.send(await shanchucat(req.body))
});
//---根据当前宠物用户查询相对应的订单--//
router.post('/dingdanuser', async function (req, res, next) {
    res.send(await dingdanuser(req.body))
});
//---服务--//
router.post('/fuwu', async function (req, res, next) {
    res.send(await fuwu(req.body))
});
module.exports = router;