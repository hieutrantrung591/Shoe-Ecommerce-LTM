const db = require("../config/connect")
const SizeProduct = function(sizeProduct) {
    this.MaSP = sizeProduct.MaSP;
    this.MaKT = sizeProduct.MaKT;
}

SizeProduct.getAll = function(result) {
    db.query("SELECT * FROM kichthuocsanpham", function(err, sizeProduct) {
        if (err || sizeProduct.length == 0) {
            result(null);
        } else {
            result(sizeProduct);
        }
    })
}

SizeProduct.create = function(data, result) {
    db.query("INSERT INTO kichthuocsanpham SET ?", data, function(err, sizeProduct) {
        if (err) {
            result(null);
        } else {
            result({ ...data });
        }
    })
}

SizeProduct.delete = function(data, result) {
    db.query("DELETE FROM kichthuocsanpham WHERE MaSP = ? AND MaKT = ?", [data.MaSP, data.MaKT], function(err, sizeProduct) {
        if (err) {
            result(null);
        } else {
            result("Delete sizeProduct with id = " + id + " successful");
        }
    })
}

module.exports = SizeProduct;