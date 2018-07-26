//商品信息//
var express = require('express');
var router = express.Router();

const {Commodity,getCinemaPage,moveCinema,alterCinema} = require("../service/CommodityService")

router.post('/Commodity', async function (req, res, next) {//添加
    res.send(await Commodity(req.body))
    // console.log(req.body)
});

router.post('/getCinemaPage', async function (req, res, next) {   //查询
    res.send(await getCinemaPage(req.body))   
    console.log(req.body)
  });

  router.post('/moveCinema', async function (req, res, next) {     //删除
    res.send(await moveCinema(req.body))
  });

  router.post('/alterCinema', async function (req, res, next) {     //修改
    res.send(await alterCinema(req.body))
    console.log(req.body)
  });

module.exports = router;