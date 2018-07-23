//商品信息//
var express = require('express');
var router = express.Router();

const {Commodity} = require("../service/CommodityService")

router.post('/Commodity', async function (req, res, next) {
    // res.send(await Commodity(req.body))
    console.log(req.body)
});

module.exports = router;