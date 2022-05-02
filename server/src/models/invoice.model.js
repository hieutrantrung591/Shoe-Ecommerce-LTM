const db = require('../config/connect.js');
const Invoice = function(invoice) {
    this.MaHD = invoice.MaHD;
    this.ThanhTien = invoice.ThanhTien;
    this.NgayXuat = invoice.NgayXuat;
    this.MaKH = invoice.MaKH;
    this.MaNV = invoice.MaNV;
}

Invoice.getAll = function(result) {
    db.query("SELECT * FROM hoadon", function(err, invoice) {
        if (err || invoice.length == 0) {
            result(null);
        } else {
            result(invoice);
        }
    })
}

Invoice.getById = function(id, result) {
    db.query("SELECT * FROM hoadon WHERE MaHD = ?", id, function(err, invoice) {
        if (err || invoice.length == 0) {
            result(null);
        } else {
            result(invoice[0]);
        }
    })
}

Invoice.create = function(data, result) {
    db.query("INSERT INTO hoadon SET ?", data, function(err, invoice) {
        if (err) {
            result(null);
        } else {
            result({ ...data });
        }
    })
}

Invoice.delete = function(id, result) {
    db.query("DELETE FROM hoadon WHERE MaHD = ?", id, function(err, invoice) {
        if (err) {
            result(null);
        } else {
            result("Delete HoaDon with id = " + id + " successful");
        }
    })
}

Invoice.update = function(data, result) {
    db.query("UPDATE hoadon SET ThanhTien = ?, NgayXuat = ?, MaKH = ?, MaNV = ? WHERE MaHD = ?", [data.ThanhTien, data.NgayXuat, data.MaKH, data.MaNV, data.MaHD], function(err, invoice) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}