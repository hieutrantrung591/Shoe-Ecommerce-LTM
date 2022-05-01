var express = require('express');
var router = express.Router();

var categoryController = require('../controllers/category.controller');

router.get("/category/list", categoryController.get_list);

router.get("/category/detail/:id", categoryController.detail);

router.post("/category/add", categoryController.add_category);

router.delete("/category/delete/:id", categoryController.delete_category);

router.put("/category/update", categoryController.update_category);

module.exports = router;