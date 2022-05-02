var Size = require('../models/size.model.js');

exports.getList = function (req, res) {
    Size.getAll(function(data) {
        res.send({ results: data });
    })
}

exports.detail = function (req, res) {
    Size.getById(req.params.id, function(response) {
        res.send({ results: response });
    })
}

exports.addSize = function (req, res) {
    var data = req.body;

    Size.create(data, function(response) {
        res.send({ results: response });
    })
}

exports.deleteSize = function (req, res) {
    var id = req.params.id;

    Size.delete(data, function(response) {
        res.send({ results: response });
    })
}

exports.updateSize = function (req, res) {
    var data = req.body;

    Size.update(data, function(response) {
        res.send({ results: response });
    })
}