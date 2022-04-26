var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({
    extended: true 
}));
app.use(bodyParser.json());

app.use(cors());

/**
 * Routers
 */
require('./app/routes/home.router')(app);
require('./app/routes/book.router')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log(`CORS-enabled web server listening on port ${PORT}`);
});