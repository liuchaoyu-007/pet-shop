var mongoose = require('mongoose');
//所有数据库对象的数据类型文件
require("./model/Spoilmanagement");//-----------宠物主管理-用户-------//
require("./model/Ordermanagement");//-----------订单管理-------//
require("./model/user");//-----------后台管理人员和门店用户-------//
var dbURI = 'mongodb://localhost/pet';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log('已经开启服务器名为宠物数据库:' + dbURI);
});
