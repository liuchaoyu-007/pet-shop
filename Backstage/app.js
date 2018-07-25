var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Petowner = require('./routes/Petowner');//宠物用户
var user = require('./routes/user');//后台用户
var Ordermanagement = require('./routes/Ordermanagement');//订单
var Commodity = require('./routes/Commodity');//商品
var store = require('./routes/store')//门店管理
var imgsmd = require('./routes/imgsmd')//门店管理
var serviceManagement = require('./routes/serviceManagement');//服务

require("./dao/database.js");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/Petowner', Petowner);//宠物用户
app.use('/user', user);//后台用户
app.use('/Ordermanagement', Ordermanagement);//订单
app.use('/Commodity', Commodity);//商品
app.use('/store',store)//门店管理
app.use('/imgsmd',imgsmd)//门店管理
app.use('/serviceManagement',serviceManagement)//服务管理




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
