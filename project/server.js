var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false})

app.use(express.static('public'));
app.get('/login.htm',function(req,res){
    res.sendFile(__dirname + "/" + "login.htm");
})