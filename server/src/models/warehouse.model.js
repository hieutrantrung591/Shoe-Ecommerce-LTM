const db = require('../config/connect.js');
const Warehouse = function(warehouse) {
    this.MaKho = warehouse.MaKho;
    this.Ten = warehouse.Ten;
    this.DiaChi = warehouse.DiaChi;
    this.MaNV = warehouse.MaNV;
}

Warehouse.getAll = function(result) {
    db.query("SELECT * FROM khohang", function(err, warehouse) {
        if (err || warehouse.length == 0) {
            result(null);
        } else {
            result(warehouse);
        }
    });
}

Warehouse.getById = function(result) {
    db.query("SELECT * FROM khohang WHERE MaKho = ?", id, function(err, warehouse) {
        if (err || warehouse.length == 0) {
            result(null);
        } else {
            result(warehouse[0]);
        }
    });
}

Warehouse.create = function(data, result) {
    db.query("INSERT INTO khohang SET ?", data, function(err, warehouse) {
        if (err) {
            result(null);
        } else {
            result({ id: warehouse.insertId, ...data });
        }
    });
}

Warehouse.delete = function(id, result) {
    db.query("DELETE FROM khohang WHERE MaKho = ?", id, function(err, warehouse) {
        if (err) {
            result(null);
        } else {
            result("Delete KhoHang with id = " + id + " successful");
        }
    });
}

Warehouse.update = function(data, result) {
    db.query("UPDATE khohang SET Ten = ?, DiaChi = ?, MaNV = ? WHERE MaKho = ?", [data.Ten, data.DiaChi, data.MaNV, data.MaKho], function(err,warehouse){
        if (err) {
            result(null);
        } else {
            result(data);
        }
    });
}

module.exports = Warehouse;