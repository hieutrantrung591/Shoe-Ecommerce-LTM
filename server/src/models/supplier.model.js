const db = require('../config/connect.js');
const Supplier = function(supplier) {
    this.MaNCC = supplier.MaNCC;
    this.TenNCC = supplier.TenNCC;
    this.DiaChi = supplier.DiaChi;
    this.SDT = supplier.SDT;
    this.Email = supplier.Email;
    this.TenNguoiDaiDien = supplier.TenNguoiDaiDien;
}

Supplier.getAll = function(result) {
    db.query("SELECT * FROM nhacungcap", function(err, supplier) {
        if (err || supplier.length == 0) {
            result(null);
        } else {
            result(supplier);
        }
    });
}

Supplier.getById = function(result) {
    db.query("SELECT * FROM nhacungcap WHERE MaNCC = ?", id, function(id, supplier) {
        if (err || supplier.length == 0) {
            result(null);
        } else {
            result(supplier[0]);
        }
    });
}

Supplier.create = function(data, result) {
    db.query("INSERT INTO nhacungcap SET ?", data, function(err, supplier) {
        if (err) {
            result(null);
        } else {
            result({ ...data });
        }
    });
}

Supplier.delete = function(id, result) {
    db.query("DELETE FROM nhacungcap WHERE MaNCC = ?", id, function(err, supplier) {
        if (err) {
            result(null);
        } else {
            result("Delete NhaCungCap with id = " + id + " successful");
        }
    });
}

Supplier.update = function(data, result) {
    db.query("UPDATE nhacungcap SET TenNCC = ?, DiaChi = ?, SDT = ?, Email = ?, TenNguoiDaiDien = ? WHERE MaNCC = ?", [data.TenNCC, data.DiaChi, data.SDT, data.Email, data.TenNguoiDaiDien, data.MaNCC], function(err, supplier) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    });
}

module.exports = Supplier;