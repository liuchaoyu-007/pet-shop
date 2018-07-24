// --------------服务管理-------------//
var express = require('express');
var router = express.Router();

const { addService,storeService,platformService,deleteService } = require("../service/serviceManagementService")


//-------添加服务----------//
router.post('/addService', async function (req, res, next) {
    res.send(await addService(req.body))
    // console.log(req.body)
});

//-------门店管理员登陆 的 服务----------//
router.post('/storeService', async function (req, res, next) {
    res.send(await storeService(req.body))
    // console.log(req.body)
});

//-------平台管理员登陆 的 服务----------//
router.post('/platformService', async function (req, res, next) {
    res.send(await platformService(req.body))
    // console.log(req.body)
});

//-------删除服务----------//
router.post('/deleteService', async function (req, res, next) {
    res.send(await deleteService(req.body))
    // console.log(req.body)
});


module.exports = router;

