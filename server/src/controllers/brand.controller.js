var Brand = require('../models/brand.model.js');

exports.getList = function (req, res) {
    Brand.getAll(function(data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    Brand.getById(req.params.id, function(response) {
        res.send({ result: response });
    });
}

// body-parser
exports.addBrand = function (req, res) {
    // Data se nhan tu form
    var data = req.body;

    Brand.create(data, function (response) {
        res.send({ result: response });
    });
}

exports.deleteBrand = function (req, res) {
    var id = req.params.id;

    Brand.delete(id, function (response) {
        res.send({ result: response });
    });
}

exports.updateBrand = function (req, res) {
    // Update se nhan du lieu tu request, truoc do no hien thi du lieu cu tu dbcs
    var data = req.body;

    Brand.update(data, function (response) {
        res.send({ result: response });
    });
}