var express = require('express');
var router = express.Router();

var warehouseController = require('../controllers/warehouse.controller.js');

router.get("/warehouse/list", warehouseController.getList);

router.get("/warehouse/detail/:id", warehouseController.detail);

router.post("/warehouse/add", warehouseController.addWarehouse);

router.delete("/warehouse/delete/:id", warehouseController.deleteWarehouse);

router.put("/warehouse/update", warehouseController.updateWarehouse);

module.exports = router;