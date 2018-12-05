var express = require('express');
var router = express.Router();

var db = require('../config/db');
var sql = require('mssql');

/* GET home page. */
router.get('/', function(req, res, next) {
sql.connect(db, function(err){
  if(err)
    console.log(err);

    var request = new sql.Request();
    request.query("select * from Manager",function(err,result){

      if(err){
        console.log(err)
        res.send(err);
      }
      sql.close();
      res.render('index',)
    })
  })
  res.render('index', { 
    route: 'home',
    data: result.recordset
   });
});

module.exports = router;
