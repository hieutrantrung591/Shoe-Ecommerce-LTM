var Warehouse = require("../models/warehouse.model.js");

exports.getList = function (req, res) {
    Warehouse.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.detail = function (req, res) {
    Warehouse.getById(req.params.id, function(response) {
        res.send({ result: response });
    });
}

exports.addWarehouse = function (req, res) {
    var data = req.body;

    Warehouse.create(data, function(response) {
        res.send({ result: response });
    });
}

exports.deleteWarehouse = function (req, res) {
    var id = req.params.id;

    Warehouse.delete(id, function(response) {
        res.send({ result: response });
    });
}

exports.updateWarehouse = function (req, res) {
    var data = req.body;

    Warehouse.update(data, function(response) {
        res.send({ result: response });
    });
}