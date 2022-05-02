var express = require('express');
var router = express.Router();

var brandController = require('../controllers/brand.controller');

router.get("/brand/list", brandController.getList);

router.get("/brand/detail/:id", brandController.detail);

router.post("/brand/add", brandController.addBrand);

router.delete("/brand/delete/:id", brandController.deleteBrand);

router.put("/brand/update", brandController.updateBrand);

module.exports = router;