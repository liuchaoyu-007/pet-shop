// -----------门店----------//
var express = require('express');
var router = express.Router();
const { add } = require("../service/storeService")
// -----------创建门店----------//
router.post('/add', async function (req, res, next) {
    res.send(await add(req.body))
});
module.exports = router;