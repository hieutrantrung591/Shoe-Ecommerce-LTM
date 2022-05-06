var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
// const _AuthMiddleWare = require("./app/common/_AuthMiddleWare");

var app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

/**
 * Allow Origin
 */
const whitelist = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:8080'];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if (whitelist.includes(origin))
      return callback(null, true)
    callback(new Error('Not allowed by CORS'));
  },
  methods: 'GET, PUT, POST, DELETE'
}

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", whitelist);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

/**
 * Routers
 */
var brandRouter = require("./src/routes/brand.router");
var categoryRouter = require("./src/routes/category.router");
var imageRouter = require("./src/routes/image.router");
var warehouseRouter = require("./src/routes/warehouse.router");
var supplierRouter = require("./src/routes/supplier.router");
var sizeRouter = require("./src/routes/size.router");
var sizeProductRouter = require("./src/routes/sizeProduct.router");
var productRouter = require("./src/routes/product.router");
var invoiceRouter = require("./src/routes/invoice.router");
var importExportRouter = require("./src/routes/importExport.router");
var employeeRouter = require("./src/routes/employee.router");
var invoiceProductRouter = require("./src/routes/invoiceProduct.router");
var importExportProductRouter = require("./src/routes/importExportProduct.router")
var customerRouter = require("./src/routes/customer.router");
var userRouter = require("./src/routes/user.router");

app.use('/', userRouter);
app.use('/', brandRouter);
app.use('/', categoryRouter);
app.use('/', customerRouter);
app.use('/', employeeRouter);
app.use('/', imageRouter);
app.use('/', importExportRouter);
app.use('/', importExportProductRouter);
app.use('/', invoiceRouter);
app.use('/', invoiceProductRouter);
app.use('/', productRouter);
app.use('/', sizeRouter);
app.use('/', sizeProductRouter);
app.use('/', supplierRouter);
app.use('/', warehouseRouter);

// app.use(_AuthMiddleWare.isAuth);
// cac router nam phia sau cai middleware deu phai check token hop le

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});