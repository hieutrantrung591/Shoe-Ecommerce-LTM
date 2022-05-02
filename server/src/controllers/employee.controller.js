var Employee = require('../models/employee.model');

exports.getList = function (req, res) {
    Employee.getAll(function(data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    Employee.getById(req.params.id, function(response) {
        res.send({ result: response });
    });
}

// body-parser
exports.addEmployee = function (req, res) {
    // Data se nhan tu form
    var data = req.body;

    Employee.create(data, function (response) {
        res.send({ result: response });
    });
}

exports.deleteEmployee = function (req, res) {
    var id = req.params.id;

    Employee.delete(id, function (response) {
        res.send({ result: response });
    });
}

exports.updateEmployee = function (req, res) {
    // Update se nhan du lieu tu request, truoc do no hien thi du lieu cu tu dbcs
    var data = req.body;

    Employee.update(data, function (response) {
        res.send({ result: response });
    });
}