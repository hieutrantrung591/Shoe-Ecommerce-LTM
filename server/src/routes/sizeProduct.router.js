var express = require('express');
var router = express.Router();

var sizeProductController = require('../controllers/sizeProduct.controller');

router.get('/sizeProduct/list', sizeProductController.getList);

router.post('/sizeProduct/add', sizeProductController.addSizeProduct);

router.delete('/sizeProduct/delete/', sizeProductController.deleteSizeProduct);

module.exports = router;