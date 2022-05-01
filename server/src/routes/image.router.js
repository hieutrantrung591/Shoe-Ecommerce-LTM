var express = require('express');
var router = express.Router();

var imageController = require('../controllers/image.controller.js');

router.get("/image/list", imageController.get_list);

router.get("/image/detail/:id", imageController.detail);

router.post("/image/add", imageController.add_image);

router.delete("/image/delete/:id", imageController.delete_image);

router.put("/image/update", imageController.update_image);

module.exports = router;