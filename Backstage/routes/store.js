// -----------门店----------//
var express = require('express');
var router = express.Router();
const { add, get, remove, modify,getEmpsByPage } = require("../service/storeService")
// -----------创建门店----------//
router.post('/add', async function (req, res, next) {
    res.send(await add(req.body))
});
// -----------查询门店----------//
router.post('/get', async function (req, res, next) {
    res.send(await get(req.body))

});
// -----------删除门店----------//
router.post('/remove', async function (req, res, next) {
    res.send(await remove(req.body))

});
// -----------修改门店----------//
router.post('/modify', async function (req, res, next) {
    res.send(await modify(req.body))

});
// -----------翻页---------//
router.post('/getEmpsByPage', async function (req, res, next) {
    const { curPage, eachPage } = req.body
    res.send(await getEmpsByPage(curPage, eachPage))
});
module.exports = router;