var ImportExport = require('../models/importExport.model.js');

exports.getList = function(req, res) {
    ImportExport.getAll(function(data) {
        res.send({ result: data })
    })
}

exports.getById = function(req, res) {
    ImportExport.getById(req.params.id, function(response) {
        res.send({ result: response })
    })
}

exports.addImportExport = function(req, res) {
    var data = req.body;

    ImportExport.create(data, function(response) {
        res.send({ result: response })
    })
}

exports.deleteImportExport = function(req, res) {
    var id = req.params.id;

    ImportExport.delete(id, function(response) {
        res.send({ result: response })
    })
}

exports.updateImportExport = function (req, res) {
    var data = req.body;

    ImportExport.update(data, function(response) {
        res.send({ result: response })
    })
}