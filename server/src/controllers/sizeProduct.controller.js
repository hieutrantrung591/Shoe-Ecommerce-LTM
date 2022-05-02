var SizeProduct = require("../models/sizeProduct.model");

exports.getList = function (req, res) {
    SizeProduct.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.addSizeProduct = function (req, res) {
    var data = req.body;

    SizeProduct.create(data, function(response) {
        res.send({ result: response });
    })
}

exports.deleteSizeProduct = function (req, res) {
    var data = req.body;

    SizeProduct.delete(data, function(response) {
        res.send({ result: response });
    })
}