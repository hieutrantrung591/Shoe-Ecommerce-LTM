var User = require('../models/user.model');
var jwt = require('../common/_JWT');
var bcrypt = require('bcrypt');

let get_list = function (req, res) {
    User.get_all(function(data) {
        res.send({ result: data });
    });
}

let detail = function (req, res) {
    User.getById(req.params.id, function(response) {
        res.send({ result: response });
    });
}

let add_user = function (req, res) {
    // Data se nhan tu form
    var data = req.body;

    User.create(data, function (response) {
        res.send({ result: response });
    });
}

let delete_user = function (req, res) {
    var id = req.params.id;

    User.delete(id, function (response) {
        res.send({ result: response });
    });
}

let update_user = function (req, res) {
    // Update se nhan du lieu tu request, truoc do no hien thi du lieu cu tu dbcs
    var data = req.body;

    User.update(data, function (response) {
        res.send({ result: response });
    });
}

let login = function (req, res) {
    var data = req.body;

    User.check_login(data, async function (response) {
        if (response) {
            const _token = await jwt.make(response);
            res.send({ result: _token, status : true });
        } else {
            res.send({ result: '', status: false });
        }
    });
}

module.exports = {
    login: login,
    add_user: add_user,
    detail: detail,
    get_list: get_list,
    delete_user: delete_user,
    update_user: update_user
}