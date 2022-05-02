var Image = require("../models/image.model.js");

exports.get_list = function(req, res) {
    Image.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.detail = function(req, res) {
    Image.getById(req.params.id, function(response) {
        res.send({ result: response });
    })
}

exports.add_image = function(req, res) {
    var data = req.body;

    Image.create(data, function(response) {
        res.send({ result: response });
    })
}

exports.delete_image = function(req, res) {
    var id = req.params.id;

    Image.delete(id, function(response) {
        res.send({ result: response });
    })
}

exports.update_image = function(req, res) {
    var data = req.body;

    Image.update(id, function(response) {
        res.send({ result: response });
    })
}