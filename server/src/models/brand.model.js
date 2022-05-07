const db = require('../config/connect.js');
const Brand = function(brand) {
    this.MaTH = brand.MaTH;
    this.Ten = brand.Ten;
}

Brand.getAll = function(result) {
    db.query("SELECT * FROM thuonghieu", function(err, brand) {
        if (err || brand.length == 0) {
            result(null);
        } else {
            result(brand);
        }
    });
}

Brand.getById = function(id, result) {
    db.query("SELECT * FROM thuonghieu WHERE MaTH = ?", id, function(err, brand) {
        if (err || brand.length == 0) {
            result(null);
        } else {
            result(brand[0]);
        }
    });
}

Brand.create = function(data, result) {
    db.query("INSERT INTO thuonghieu SET ?", data, function(err, brand) {
        if (err) {
            result(null);
        } else {
            result({ id: brand.insertId, ...data });
        }
    })
}

Brand.delete = function(id, result) {
    db.query("DELETE FROM thuonghieu WHERE MaTH = ?", id, function(err, brand) {
        if (err) {
            result(null);
        } else {
            result("Delete ThuongHieu with id = " + id + " successful");
        }
    })
}

Brand.update = function(data, result) {
    db.query("UPDATE thuonghieu SET Ten=? WHERE MaTH=?", [data.TenTH, data.MaTH], function(err, brand) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}

module.exports = Brand;