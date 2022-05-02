var express = require('express');
var router = express.Router();

var categoryController = require('../controllers/category.controller');

router.get("/category/list", categoryController.getList);

router.get("/category/detail/:id", categoryController.detail);

router.post("/category/add", categoryController.addCategory);

router.delete("/category/delete/:id", categoryController.deleteCategory);

router.put("/category/update", categoryController.updateCategory);

module.exports = router;