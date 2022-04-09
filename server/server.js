var express = require('express');
var app = express();
app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});

var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shoe_shop_db'
})

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM tasks";
    con.query(sql, function(err, results) {
      if (err) throw err;
      console.log(results);
    })
  });