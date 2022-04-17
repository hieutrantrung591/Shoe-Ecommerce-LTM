var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true 
}));

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shoe_shop_db'
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', (req, res) => {
    res.send("Hello!");
})

con.connect();

// Truy xuất tất cả dữ liệu user
app.get('/users', function (req, res) {
    dbConn.query('SELECT * FROM users', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
});

app.get('/items', function (req, res) {
    var sql = 'SELECT gi.id, c.fullname, gi.categoryid, gi.itemname, gi.itemtype ';
    sql += ' FROM mdl_grade_items, mdl_course c ';
    sql += ' WHERE gi.courseid = c.id and gi.hidden = 0';

    con.query(sql, function(error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
});

app.get('/cors', (req, res) => { 
    res.send('This has CORS enabled'); 
})

app.get('/products/:id', cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a Single Route'})
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log(`CORS-enabled web server listening on port ${PORT}`);
});
module.exports = app;