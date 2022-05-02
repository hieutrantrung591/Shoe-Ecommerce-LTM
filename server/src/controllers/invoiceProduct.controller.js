var InvoiceProduct = require("../models/invoiceProduct.model");

exports.getList = function (req, res) {
    InvoiceProduct.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.addInvoiceProduct = function (req, res) {
    var data = req.body;

    InvoiceProduct.create(data, function(response) {
        res.send({ result: response });
    })
}

exports.deleteInvoiceProduct = function (req, res) {
    var data = req.body;

    InvoiceProduct.delete(data, function(response) {
        res.send({ result: response });
    })
}