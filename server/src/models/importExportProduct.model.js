const db = require("../config/connect")
const ImportExportProduct = function(importExportProduct) {
    this.MaNX = sizeProduct.MaNX;
    this.MaSP = sizeProduct.MaSP;
    this.SoLuong = sizeProduct.SoLuong;
    this.DonGia = sizeProduct.DonGia;
}

ImportExportProduct.getAll = function(result) {
    db.query("SELECT * FROM chitietnhapxuat", function(err, importExportProduct) {
        if (err || importExportProduct.length == 0) {
            result(null);
        } else {
            result(importExportProduct);
        }
    })
}

ImportExportProduct.create = function(data, result) {
    db.query("INSERT INTO chitietnhapxuat SET ?", data, function(err, importExportProduct) {
        if (err) {
            result(null);
        } else {
            result({ id: importExportProduct.insertId, ...data });
        }
    })
}

ImportExportProduct.delete = function(data, result) {
    db.query("DELETE FROM chitietnhapxuat WHERE MaSP = ? AND MaNX = ?", [data.MaSP, data.MaNX], function(err, importExportProduct) {
        if (err) {
            result(null);
        } else {
            result("Delete importExportProduct with id = " + id + " successful");
        }
    })
}

ImportExportProduct.update = function(data, result) {
    db.query("UPDATE chitietnhapxuat SET SoLuong = ?, DonGia = ? WHERE MaSP = ? AND MaNX = ?", [data.SoLuong, data.DonGia, data.MaSP, data.MaNX], function(err, importExportProduct) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}

module.exports = ImportExportProduct;