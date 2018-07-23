// --------------订单管理-------------//
var express = require('express');
var router = express.Router();

const { Ordermanagement } = require("../service/OrdermanagementService")
// -------获取当前门店主任人有的订单（是主人的所有的店里的所有订单总和）--------//
router.post('/Ordermanagement', async function (req, res, next) {
    res.send(await Ordermanagement(req.body))
});
module.exports = router;