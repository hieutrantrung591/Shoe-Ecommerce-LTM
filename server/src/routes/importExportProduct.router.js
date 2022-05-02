var express = require('express');
var router = express.Router();

var importExportProductController = require('../controllers/importExportProduct.controller')

router.get('/importExportProduct/list', importExportProductController.getList);

router.post('/importExportProduct/add', importExportProductController.addInvoiceProduct);

router.delete('/importExportProduct/delete/', importExportProductController.deleteInvoiceProduct);

module.exports = router;