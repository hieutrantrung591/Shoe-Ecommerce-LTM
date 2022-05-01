var Category = require("../models/category.model.js");

exports.get_list = function(req, res) {
    Category.get_all(function(data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    Category.getById(req.params.id, function(response) {
        res.send({ result: response });
    });
}

exports.add_category = function (req, res) {
    var data = req.body;

    Category.create(data, function(response) {
        res.send({ result: response });
    })
}

exports.delete_category = function (req, res) {
    var id = req.params.id;

    Category.delete(id, function(response) {
        res.send({ result: response });
    })
}

exports.update_category = function (req, res) {
    var data = req.body;

    Category.update(data, function(response) {
        res.send({ result: response });
    })
}