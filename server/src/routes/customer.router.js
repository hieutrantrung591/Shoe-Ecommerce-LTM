var express = require('express');
var router = express.Router();

var customerController = require('../controllers/customer.controller');

router.get("/customer/list", customerController.getList);

router.get("/customer/detail/:id", customerController.detail);

router.post("/customer/add", customerController.addCustomer);

router.delete("/customer/delete/:id", customerController.deleteCustomer);

router.put("/customer/update", customerController.updateCustomer);

module.exports = router;