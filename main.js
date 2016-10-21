var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false);
  var foodList = ["gyo_jjam", "real_china", "sun_dai"];
  var index = Math.floor((Math.random()*1000))%foodList.length;

  var resObj = {
    food: foodList[index]
  };
 
  res.writeHead(200);
  res.end(JSON.stringify(resObj));
}).listen(8080);

