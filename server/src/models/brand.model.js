const db = require('../config/connect.js');
const Brand = function(brand) {
    this.id = brand.id;
    this.name = brand.name;
    this.createdAt = brand.createdAt;
    this.updatedAt = brand.updatedAt;
}

Brand.get_all = function(result) {
    db.query("SELECT * FROM brand", function(err, brand) {
        if (err || brand.length == 0) {
            result(null);
        } 
        else {
            result(brand);
        }
    });
}

Brand.getById = function(id, result) {
    db.query("SELECT * FROM brand WHERE id = ?", id, function(err, brand) {
        if (err) {
            result(null);
        } else {
            result(brand[0]);
        }
    });
}

Brand.create = function(data, result) {
    db.query("INSERT INTO brand SET ?", data, function(err, brand) {
        if (err) {
            result(null);
        } else {
            result({ id: brand.insertId, ...data });
        }
    })
}

Brand.delete = function(id, result) {
    db.query("DELETE FROM brand WHERE id = ?", id, function(err, brand) {
        if (err) {
            result(null);
        } else {
            result("Xóa dữ liệu book có id = " + id + " thành công");
        }
    })
}

Brand.update = function(data, result) {
    db.query("UPDATE brand SET name=?, updatedAt=? WHERE id=?", [data.name, new Date(), data.id], function(err, brand) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}

module.exports = Brand;