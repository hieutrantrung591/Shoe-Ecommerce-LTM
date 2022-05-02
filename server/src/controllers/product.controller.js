var Product = require('../models/product.model.js');

exports.getList = function (req, res) {
    Product.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.detail = function (req, res) {
    Product.getById(req.params.id, function(response) {
        res.send({ result: response });
    })
}

exports.addProduct = function (req, res) {
    var data = req.body;

    Product.create(data, function(response) {
        res.send({ result: response });
    })
}

exports.deleteProduct = function (req, res) {
    var id = req.params.id;

    Product.delete(id, function(response) {
        res.send({ result: response });
    })
}

exports.updateProduct = function (req, res) {
    var data = req.body;

    Product.update(data, function(response) {
        res.send({ result: response });
    })
}