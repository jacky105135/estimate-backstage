var sql = require('mssql');
var req = require("request");

const db =
{
        "user": "sa",
        "password": "jacky920",
        "server": "123.193.214.240",
        "database": "EstimateSystem"
};

sql.connect(db, function (err) {

    　　sql.close();
    });

var request = new sql.Request();
request.query("select * from Manager",function (err,result){

});

/*var request = new sql.Request();
request.input('Name',sql.NVarChar(20), req.body.name);
request.input('Employee_id',sql.NVarChar(20),req.body.employee_id);
request.input('Password',sql.NVarChar(20),req.body.password);*/
module.exports = db;

