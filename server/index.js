var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const _AuthMiddleWare = require("./app/common/_AuthMiddleWare");

var app = express();

app.use(bodyParser.urlencoded({
    extended: true 
}));
app.use(bodyParser.json());

app.use(cors());

/**
 * Allow Origin
 */
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

/**
 * Routers
 */
require('./app/routes/home.router')(app);
require('./app/routes/account.router')(app);

app.use(_AuthMiddleWare.isAuth);
require('./app/routes/book.router')(app);   // cac router nam phia sau cai middleware deu phai check token hop le
require('./app/routes/user.router')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log(`CORS-enabled web server listening on port ${PORT}`);
});