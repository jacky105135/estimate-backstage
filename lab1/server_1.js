var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false})

app.use(express.static('public'));
app.get('/index_1.htm',function(req,res){
    res.sendFile(__dirname + "/" + "index_1.htm");
})
app.post('/process_post',urlencodedParser,function(req,res){
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8083,function(){
    var host = server.address().address;
    var port = server.address().port;

console.log("http://"+host+":"+port);
})