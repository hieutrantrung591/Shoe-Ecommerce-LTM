var express = require('express');
var router = express.Router();

var brandController = require('../controllers/brand.controller');

router.get("/brand/list", brandController.get_list);

router.get("/brand/detail/:id", brandController.detail);

router.post("/brand/add", brandController.add_brand);

router.delete("/brand/delete/:id", brandController.delete_brand);

router.put("/brand/update", brandController.update_brand);

module.exports = router;