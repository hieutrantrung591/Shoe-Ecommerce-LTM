var Supplier = require('../models/supplier.model.js');

exports.getList = function(req, res) {
    Supplier.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.detail = function(req, res) {
    Supplier.getById(req.params.id, function(response) {
        res.send({ result: response });
    })
}

exports.addSupplier = function(req, res) {
    var data = req.body;
    
    Supplier.create(data, function(response) {
        res.send({ result: response });
    })
}

exports.deleteSupplier = function(req, res) {
    var id = req.params.id;

    Supplier.delete(id, function(response) {
        res.send({ result: response });
    })
}

exports.updateSupplier = function (req, res) {
    var data = req.body;

    Supplier.create(data, function(response) {
        res.send({ result: response });
    })
}