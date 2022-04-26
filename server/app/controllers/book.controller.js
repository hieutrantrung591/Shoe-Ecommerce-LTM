var Book = require('../models/book.model');

exports.get_list = function (req, res) {
    Book.get_all(function(data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    Book.getById(req.params.id, function(response) {
        res.send({ result: response });
    });
}

exports.add_book = function (req, res) {
    // Data se nhan tu form
    var data = req.body;

    Book.create(data, function (response) {
        res.send({ result: response });
    });
}

exports.delete_book = function (req, res) {
    var id = req.params.id;

    Book.delete(id, function (response) {
        res.send({ result: response });
    });
}

exports.update_book = function (req, res) {
    // Update se nhan du lieu tu request, truoc do no hien thi du lieu cu tu dbcs
    var data = req.body;

    Book.update(data, function (response) {
        res.send({ result: response });
    });
}