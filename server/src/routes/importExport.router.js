var express = require('express');
var router = express.Router();

var importExportController = require('../controllers/importExport.controller');

router.get("/importExport/list", importExportController.getList);

router.get("/importExport/detail/:id", importExportController.detail);

router.post("/importExport/add", importExportController.addImportExport);

router.delete("/importExport/delete/:id", importExportController.deleteImportExport);

router.put("/importExport/update", importExportController.updateImportExport);

module.exports = router;