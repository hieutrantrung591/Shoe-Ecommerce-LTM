var User = require('../models/user.model.js');

exports.getList = function(req, res) {
    User.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.detail = function(req, res) {
    User.getById(req.params.id, function(response) {
        res.send({ result: response });
    })
}

exports.addUser = function(req, res) {
    var data = req.body;
    
    User.create(data, function(response) {
        res.send({ result: response });
    })
}

exports.deleteUser = function(req, res) {
    var id = req.params.id;

    User.delete(id, function(response) {
        res.send({ result: response });
    })
}

exports.updateUser = function (req, res) {
    var data = req.body;

    User.create(data, function(response) {
        res.send({ result: response });
    })
}