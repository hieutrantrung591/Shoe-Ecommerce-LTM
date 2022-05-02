var Invoice = require("../models/invoice.model.js");

exports.getList = function (req, res) {
    Invoice.getAll(function(data) {
        res.send({ results: data });
    })
}

exports.detail = function (req, res) {
    Invoice.getById(req.params.id, function(response) {
        res.send({ results: response });
    })
}

exports.addInvoice = function (req, res) {
    var data = req.body;

    Invoice.create(data, function(response) {
        res.send({ results: response });
    })
}

exports.deleteInvoice = function (req, res) {
    var id = req.params.id;

    Invoice.delete(id, function(response) {
        res.send({ results: response });
    })
}

exports.updateInvoice = function (req, res) {
    var data = req.body

    Invoice.update(data, function(response) {
        res.send({ results: response });
    })
}