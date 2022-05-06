var express = require('express');
var router = express.Router();

var importExportProductController = require('../controllers/importExportProduct.controller')

router.get('/importExportProduct/list', importExportProductController.getList);

router.post('/importExportProduct/add', importExportProductController.addImportExportProduct);

router.delete('/importExportProduct/delete/', importExportProductController.deleteImportExportProduct);

module.exports = router;