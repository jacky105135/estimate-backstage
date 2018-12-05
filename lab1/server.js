var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.htm',function(req,res){
    res.sendFile(__dirname + "/" +"index.htm");
})

app.get('/process_get',function(req,res){
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
    console.log("a")
})
var server = app.listen(8083,function(){
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("http://"+host+":"+port);
})
