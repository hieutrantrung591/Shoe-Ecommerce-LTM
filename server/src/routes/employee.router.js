var express = require('express');
var router = express.Router();

var employeeController = require('../controllers/employee.controller');

router.get("/employee/list", employeeController.getList);

router.get("/employee/detail/:id", employeeController.detail);

router.post("/employee/add", employeeController.addEmployee);

router.delete("/employee/delete/:id", employeeController.deleteEmployee);

router.put("/employee/update", employeeController.updateEmployee);

module.exports = router;