const db = require("../config/connect")
const InvoiceProduct = function(invoiceProduct) {
    this.MaHD = sizeProduct.MaHD;
    this.MaSP = sizeProduct.MaSP;
    this.SoLuong = sizeProduct.SoLuong;
    this.DonGia = sizeProduct.DonGia;
}

InvoiceProduct.getAll = function(result) {
    db.query("SELECT * FROM chitiethoadon", function(err, invoiceProduct) {
        if (err || invoiceProduct.length == 0) {
            result(null);
        } else {
            result(invoiceProduct);
        }
    })
}

InvoiceProduct.create = function(data, result) {
    db.query("INSERT INTO chitiethoadon SET ?", data, function(err, invoiceProduct) {
        if (err) {
            result(null);
        } else {
            result({ ...data });
        }
    })
}

InvoiceProduct.delete = function(data, result) {
    db.query("DELETE FROM chitiethoadon WHERE MaSP = ? AND MaHD = ?", [data.MaSP, data.MaHD], function(err, invoiceProduct) {
        if (err) {
            result(null);
        } else {
            result("Delete invoiceProduct with id = " + id + " successful");
        }
    })
}

InvoiceProduct.update = function(data, result) {
    db.query("UPDATE chitiethoadon SET SoLuong = ?, DonGia = ? WHERE MaSP = ? AND MaHD = ?", [data.SoLuong, data.DonGia, data.MaSP, data.MaHD], function(err, invoiceProduct) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}

module.exports = SizeProduct;