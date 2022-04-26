var mysql = require("mysql");

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'demo_node_api'
});

con.connect(function(err) {
    if (err) {
        console.log("Error connecting to database" + err.message);
    }
});

module.exports = con;