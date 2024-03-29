const db = require('../config/connect.js');
const Size = function(size) {
    this.MaKT = size.MaKT;
    this.Ten = size.Ten;
}

Size.getAll = function(result) {
    db.query("SELECT * FROM kichthuoc", function(err, size) {
        if (err || size.length == 0) {
            result(null);
        } else {
            result(size);
        }
    })
}

Size.getById = function(id, result) {
    db.query("SELECT * FROM kichthuoc WHERE MaKT = ?", id, function(err, size) {
        if (err || size.length == 0) {
            result(null);
        } else {
            result(size[0]);
        }
    })
}

Size.create = function(data, result) {
    db.query("INSERT INTO kichthuoc SET ?", data, function(err, size) {
        if (err) {
            result(null);
        } else {
            result({ id: size.insertId, ...data });
        }
    })
}

Size.delete = function(id, result) {
    db.query("DELETE FROM kichthuoc WHERE MaKT = ?", id, function(err, size) {
        if(err) {
            result(null);
        } else {
            result("Delete KichThuoc with id = " + id + " successful");
        }
    })
}

Size.update = function(data, result) {
    db.query("UPDATE kichthuoc SET Ten = ? WHERE MaKT = ?", [data.Ten, data.MaKT], function(err, size) {
        if (err) {
            result(null);
        } else {
            result(size);
        }
    })
}

module.exports = Size;