const db = require('../config/connect');
const Employee = function (employee) {
    this.MaNV = employee.MaNV;
    this.HoTen = employee.HoTen;
    this.NgaySinh = employee.NgaySinh;
    this.DiaChi = employee.DiaChi;
    this.ChucVu = employee.ChucVu;
    this.SDT = employee.SDT;
}

Employee.getAll = function () {
    db.query("SELECT MaNV, HoTen, NgaySinh, DiaChi, ChucVu, SDT FROM nhanvien", function (err, employee) {
        if (err || employee.length == 0) {
            result(null);
        } else {
            result(employee);
        }
    })
}

Employee.getById = function (id, result) {
    db.query("SELECT MaNV, HoTen, NgaySinh, DiaChi, ChucVu, SDT FROM nhanvien WHERE MaNV = ?", id, function (err, employee) {
        if (err || employee.length == 0) {
            result(null)
        } else {
            result(employee[0])
        }
    })
}

Employee.create = function (data, result) {
    db.query("INSERT INTO nhanvien SET ?", data, function (err, employee) {
        if (err) {
            result(null);
        } else {
            result({ ...data });
        }
    })
}

Employee.delete = function (id, result) {
    db.query("DELETE FROM nhanvien WHERE MaNV = ?", id, function (err, employee) {
        if (err) {
            result(null);
        } else {
            result("Delete employee with id = " + id + " successful");
        }
    })
}

Employee.update = function (data, result) {
    db.update("UPDATE nhanvien SET HoTen = ?, NgaySinh = ?, DiaChi = ?, ChucVu = ?, SDT = ? WHERE MaNV = ?", [data.HoTen, data.NgaySinh, data.DiaChi, data.ChucVu, data.SDT, data.MaNV], function (err, employee) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}

module.exports = Employee;