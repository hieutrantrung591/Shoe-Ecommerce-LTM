const db = require("../config/connect.js");
const Category = function(category) {
    this.MaDM = category.MaDM; 
    this.Ten = category.Ten;
    this.MaNV = category.MaNV;
}

Category.get_all = function(result) {
    db.query("SELECT * FROM danhmuc", function(err, category) {
        if (err || category.length == 0) {
            result(null);
        } else {
            result(category);
        }
    })
}

Category.getById = function(id, result) {
    db.query("SELECT * FROM danhmuc WHERE MaDM = ?", id, function(err, category) {
        if (err || category.length == 0) {
            result(null);
        } else {
            result(category[0]);
        }
    });
}

Category.create = function(data, result) {
    db.query("INSERT INTO danhmuc SET ?", data, function(err, category) {
        if (err) {
            result(null);
        } else {
            result({ id: category.insertId, ...data });
        }
    })
}

Category.delete = function(id, result) {
    db.query("DELETE FROM danhmuc WHERE MaDM = ?", id, function(err, category) {
        if (err) {
            result(null);
        } else {
            result("Delete DanhMuc with id = " + id + " successful");
        }
    })
}

Category.update = function(data, result) {
    db.query("UPDATE danhmuc SET Ten = ?, MaNV = ? WHERE MaDM = ?", [data.Ten, data.MaNV, data.MaDM], function(err, category) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}

module.exports = Category;