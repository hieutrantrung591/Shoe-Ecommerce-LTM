const db = require('../config/connect');
const Customer = function(customer) {
    this.MaKH = customer.MaKH;
    this.HoTen = customer.HoTen;
    this.DiaChi = customer.DiaChi;
    this.SDT = customer.SDT;
    this.MaNV = customer.MaNV;
}

Customer.getAll = function() {
    db.query("SELECT * FROM khachhang", function(err, customer) {
        if (err || customer.length == 0) {
            result(null);
        } else {
            result(customer);
        }
    })
}

Customer.getById = function(id, result) {
    db.query("SELECT * FROM khachhang WHERE MaNV = ?", id, function(err, customer) {
        if (err || customer.length == 0) {
            result(null)
        } else {
            result(customer[0])
        }
    })
}

Customer.create = function(data, result) {
    db.query("INSERT INTO khachhang SET ?", data, function(err, customer) {
        if (err) {
            result(null);
        } else {
            result({ ...data });
        }
    })
}

Customer.delete = function(id, result) {
    db.query("DELETE FROM khachhang WHERE MaKH = ?", id, function(err, customer) {
        if (err) {
            result(null);
        } else {
            result("Delete customer with id = " + id + " successful");
        }
    })
}

Customer.update = function(data, result) {
    db.update("UPDATE khachhang SET HoTen = ?, DiaChi = ?, SDT = ?, MaNV = ? WHERE MaKH = ?", [data.HoTen, data.DiaChi, data.SDT, data.MaNV, data.MaKH], function(err, customer) {
        if(err) {
            result(null);
        } else {
            result(data);
        }
    })
}

module.exports = Customer;