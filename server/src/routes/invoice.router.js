var express = require('express');
var router = express.Router();

var invoiceController = require('../controllers/invoice.controller.js');

router.get('/invoice/list', invoiceController.getList);

router.get('/invoice/detail/:id', invoiceController.detail);

router.post('/invoice/add', invoiceController.addInvoice);

router.delete('/invoice/delete/:id', invoiceController.deleteInvoice);

router.put('/invoice/update', invoiceController.updateInvoice);

module.exports = router;