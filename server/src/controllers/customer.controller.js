var Customer = require("../models/customer.invoice")

exports.getList = function(req, res) {
    Customer.getAll(function(data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    Customer.getById(req.params.id, function(response) {
        res.send({ result: response });
    });
}

exports.addCustomer = function (req, res) {
    var data = req.body;

    Customer.create(data, function(response) {
        res.send({ result: response });
    })
}

exports.deleteCustomer = function (req, res) {
    var id = req.params.id;

    Customer.delete(id, function(response) {
        res.send({ result: response });
    })
}

exports.updateCustomer = function (req, res) {
    var data = req.body;

    Customer.update(data, function(response) {
        res.send({ result: response });
    })
}