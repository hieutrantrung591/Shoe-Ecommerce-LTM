var ImportExportProduct = require("../models/importExportProduct.model");

exports.getList = function (req, res) {
    ImportExportProduct.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.addImportExportProduct = function (req, res) {
    var data = req.body;

    ImportExportProduct.create(data, function(response) {
        res.send({ result: response });
    })
}

exports.deleteImportExportProduct = function (req, res) {
    var data = req.body;

    ImportExportProduct.delete(data, function(response) {
        res.send({ result: response });
    })
}