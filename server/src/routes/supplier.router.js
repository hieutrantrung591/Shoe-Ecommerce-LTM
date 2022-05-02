var express = require('express');
var router = express.Router();

var supplierController = require('../controllers/supplier.controller.js');

router.get('/supplier/list', supplierController.getList);

router.get('/supplier/detail/:id', supplierController.detail);

router.post('/supplier/add', supplierController.addSupplier);

router.delete('/supplier/delete/:id', supplierController.deleteSupplier);

router.put('/supplier/update', supplierController.updateSupplier);

module.exports = router;