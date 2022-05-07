const db = require("../config/connect.js");
const Product = function(product) {
    this.MaSP = product.MaSP;
    this.Ten = product.Ten;
    this.DonGia = product.DonGia;
    this.MoTa = product.MoTa;
    this.MaDM = product.MaDM;
    this.MaNCC = product.MaNCC;
    this.MaTH = product.MaTH;
}

Product.getAll = function(result) {
    db.query("SELECT * FROM sanpham", function(err, product) {
        if (err || product.length == 0) {
            result(null);
        } else {
            result(product);
        }
    })
}

Product.getById = function(id, result) {
    db.query("SELECT * FROM sanpham WHERE MaSP = ?", id, function(err, product) {
        if (err || product.length == 0) {
            result(null);
        } else {
            result(product[0]);
        }
    })
}

Product.create = function(data, result) {
    db.query("INSERT INTO sanpham SET ?", data, function(err, product) {
        if (err) {
            result(null);
        } else {
            result({ id: product.insertId, ...data });
        }
    })
}

Product.delete = function(id, result) {
    db.query("DELETE FROM sanpham WHERE MaSP = ?", id, function(err, product) {
        if (err) {
            result(null);
        } else {
            result("Delete sanpham with id = " + id + " successful");
        }
    })
}

Product.update = function(data, result) {
    db.query("UPDATE sanpham SET Ten = ?, DonGia = ?, MoTa = ?, MaDM = ?, MaNCC = ?, MaTH = ? WHERE MaSP = ?", [data.Ten, data.DonGia, data.MoTa, data.MaDM, data.MaNCC, data.MaTH, data.MaSP], function(err, product) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}

module.exports = Product;