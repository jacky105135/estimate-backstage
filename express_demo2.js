var express = require('express');
var app = express();

app.get('/',function(req,res){
    console.log("主頁 GET 請求");
    res.send('Hello GET');
})

app.post('/',function(req,res){
    console.log("主頁 POST 請求");
    res.send('Hello POST');
})

app.get('/del_user',function(req,res){
    console.log("/del_user 回應 DELETE 請求")
    res.send('刪除頁面');
})

app.get('/list_user',function(req,res){
    console.log("/list_user GET 請求");
    res.send('用戶列表頁面');
})

app.get('/ab*cd',function(req,res){
    console.log("/ab*cd GET 請求");
    res.send('正規匹配')
})

var server = app.listen(8082,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("http://"+host+":"+port);
})
