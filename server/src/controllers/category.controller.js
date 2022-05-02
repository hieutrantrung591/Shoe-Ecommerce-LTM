var Category = require("../models/category.model.js");

exports.getList = function(req, res) {
    Category.get_all(function(data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    Category.getById(req.params.id, function(response) {
        res.send({ result: response });
    });
}

exports.addCategory = function (req, res) {
    var data = req.body;

    Category.create(data, function(response) {
        res.send({ result: response });
    })
}

exports.deleteCategory = function (req, res) {
    var id = req.params.id;

    Category.delete(id, function(response) {
        res.send({ result: response });
    })
}

exports.updateCategory = function (req, res) {
    var data = req.body;

    Category.update(data, function(response) {
        res.send({ result: response });
    })
}