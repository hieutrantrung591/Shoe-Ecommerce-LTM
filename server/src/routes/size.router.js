var express = require('express');
var router = express.Router();

var sizeController = require('../controllers/size.controller.js');

router.get('/size/list', sizeController.getList);

router.get('/size/list/:id', sizeController.detail);

router.post('/size/add', sizeController.addSize);

router.delete('/size/delete/:id', sizeController.deleteSize);

router.put('/size/update', sizeController.updateSize);

module.exports = router;