var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var axios = require('axios');
var app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

/*var data;
var url = 'https://api.weixin.qq.com/cgi-bin/poi/getpoilist?access_token=SwUezZjLhtfAurxDGuzpUW0IvxAwSb0EnVSLQ2UJ3lolsIcqaPVSeGfn9Tb7JrGpUWbq5QzsSBDQX57ls9ns5iBIh9Vtc-SLpU7aZUsfY3P8zvLaerj5wyZA41UcujGGKOMgAGDPTR'
axios.post(url, {
	"begin":0,
	"limit":10
	})
  .then(function (response) {
	 data = response;         
  })
  .catch(function (error) {
    console.log(error);
  })*/
var data = {
"errcode":0,
"errmsg":"ok",
"business_list":[
{"base_info":{
                "sid":"101",
                "business_name":"麦当劳",
                "branch_name":"艺苑路店",
                "address":"艺苑路11号",
                "telephone":"020-12345678",
                "categories":["美食,快餐小吃"],
                "city":"广州市",
                "province":"广东省",
                "offset_type":1,
                "longitude":115.32375,
                "latitude":25.097486,
                "photo_list":[{"photo_url":"http: ...."}],
                "introduction":"麦当劳是全球大型跨国连锁餐厅，1940 年创立于美国，在世界上大约拥有3 万间分店。主要售卖汉堡包，以及薯条、炸鸡、汽水、冰品、沙拉、水果等快餐食品",
                "recommend":"麦辣鸡腿堡套餐，麦乐鸡，全家桶",
                "special":"免费wifi，外卖服务",
                "open_time":"8:00-20:00",
                "avg_price":35,
                "poi_id":"285633617",
                "available_state":3,
                "district":"海珠区",
                "update_status":0
              }},
{"base_info":{
                "sid":"101",
                "business_name":"麦当劳",
                "branch_name":"北京路店",
                "address":"北京路12号",
                "telephone":"020-12345689",
                "categories":["美食,快餐小吃"],
                "city":"广州市",
                "province":"广东省",
                "offset_type":1,
                "longitude":115.3235,
                "latitude":25.092386,
                "photo_list":[{"photo_url":"http: ...."}],
                "introduction":"麦当劳是全球大型跨国连锁餐厅，1940 年创立于美国，在世界上大约拥有3 万间分店。主要售卖汉堡包，以及薯条、炸鸡、汽水、冰品、沙拉、水果等快餐食品",
                "recommend":"麦辣鸡腿堡套餐，麦乐鸡，全家桶",
                "special":"免费wifi，外卖服务",
                "open_time":"8:00-20:00",
                "avg_price":35,
                "poi_id":"285633618",
                "available_state":4,
                "district":"越秀区",
                "update_status":0
              }},
{"base_info":{
                "sid":"101",
                "business_name":"麦当劳",
                "branch_name":"龙洞店",
                "address":"迎龙路122号",
                "telephone":"020-12345659",
                "categories":["美食,快餐小吃"],
                "city":"广州市",
                "province":"广东省",
                "offset_type":1,
                "longitude":115.32345,
                "latitude":25.056686,
                "photo_list":[{"photo_url":"http: ...."}],
                "introduction":"麦当劳是全球大型跨国连锁餐厅，1940 年创立于美国，在世界上大约拥有3 万间分店。主要售卖汉堡包，以及薯条、炸鸡、汽水、冰品、沙拉、水果等快餐食品",
                "recommend":"麦辣鸡腿堡套餐，麦乐鸡，全家桶",
                "special":"免费wifi，外卖服务",
                "open_time":"8:00-20:00",
                "avg_price":35,
                "poi_id":"285633619",
                "available_state":2,
                "district":"天河区",
                "update_status":0
              }},
],
      "total_count":"3",
}  

app.get('/', function(req, res) {
  res.render('login.html');
});

app.get('/register', function(req, res) {
  res.render('register.html');
});

app.get('/index', function(req, res) {
	res.render('index.html',{data: data});
});

app.get('/forgot-password', function(req, res) {
  res.render('forgot-password.html');
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
