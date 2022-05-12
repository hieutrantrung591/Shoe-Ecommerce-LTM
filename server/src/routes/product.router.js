var express = require('express');
var router = express.Router();

var productController = require('../controllers/product.controller');

router.get("/product/list", productController.getList);

router.get("/product/detail/:id", productController.detail);

router.post("/product/add", productController.addProduct);

router.delete("/product/delete/:id", productController.deleteProduct);

router.put("/product/update", productController.updateProduct);

router.post("/product/search", productController.searchProduct);

module.exports = router;