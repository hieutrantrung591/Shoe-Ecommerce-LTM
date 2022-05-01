var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
// const _AuthMiddleWare = require("./app/common/_AuthMiddleWare");

var app = express();

app.use(bodyParser.urlencoded({
    extended: false 
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
var brandRouter = require("./src/routes/brand.router.js");
var categoryRouter = require("./src/routes/category.router.js");
var imageRouter = require("./src/routes/image.router.js");
app.use('/', brandRouter);
app.use('/', categoryRouter);
app.use('/', imageRouter);

// app.use(_AuthMiddleWare.isAuth);
// cac router nam phia sau cai middleware deu phai check token hop le

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log(`CORS-enabled web server listening on port ${PORT}`);
});