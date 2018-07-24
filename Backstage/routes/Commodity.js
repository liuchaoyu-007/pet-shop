//商品信息//
var express = require('express');
var router = express.Router();

const {Commodity,getCinemaPage} = require("../service/CommodityService")

router.post('/Commodity', async function (req, res, next) {//添加
    res.send(await Commodity(req.body))
    // console.log(req.body)
});

router.post('/getCinemaPage', async function (req, res, next) {   //查询
    res.send(await getCinemaPage(req.body))   
  });

module.exports = router;