const db = require("../config/connect.js");
const ImportExport = function(importExport) {
    this.MaNX = importExport.MaNX;
    this.Ngay = importExport.Ngay;
    this.NhapXuat = importExport.NhapXuat;
    this.MaKho = importExport.MaKho;
    this.MaNV = importExport.MaNV; 
}

ImportExport.getAll = function(result) {
    db.query("SELECT * FROM nhapxuat", function(err, importExport) {
        if (err || importExport.length == 0) {
            result(null);
        } else {
            result(importExport);
        }
    })
}

ImportExport.getById = function(id, result) {
    db.query("SELECT * FROM nhapxuat WHERE MaNX = ?", id, function(err, importExport) {
        if (err || importExport.length == 0) {
            result(null);
        } else {
            result(importExport[0]);
        }
    })
}

ImportExport.create = function(data, result) {
    db.query("INSERT INTO nhapxuat SET ?", data, function(err, importExport) {
        if (err) {
            result(null);
        } else {
            result({ ...data });
        }
    })
}

ImportExport.delete = function(id, result) {
    db.query("DELETE FROM nhapxuat WHERE MaSP = ?", id, function(err, importExport) {
        if (err) {
            result(null);
        } else {
            result("Delete nhapxuat with id = " + id + " successful");
        }
    })
}

ImportExport.update = function(data, result) {
    db.query("UPDATE nhapxuat SET Ngay = ?, NhapXuat = ?, MaKho = ?, MaNV = ? WHERE MaNX = ?", [data.Ngay, data.NhapXuat, data.MaKho, data.MaNV, data.MaNX], function(err, importExport) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}

module.exports = ImportExport