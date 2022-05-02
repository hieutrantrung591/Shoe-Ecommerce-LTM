var express = require('express');
var router = express.Router();

var invoiceProductController = require('../controllers/invoiceProduct.controller')

router.get('/invoiceProduct/list', invoiceProductController.getList);

router.post('/invoiceProduct/add', invoiceProductController.addInvoiceProduct);

router.delete('/invoiceProduct/delete/', invoiceProductController.deleteInvoiceProduct);

module.exports = router;