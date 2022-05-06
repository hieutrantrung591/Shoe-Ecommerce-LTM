const db = require('../config/connect');
const User = function(user) {
    this.MaND = user.MaND;
    this.Email = user.Email;
    this.Password = user.Password;
}

User.getAll = function() {
    db.query("SELECT MaND, Email FROM nguoidung", function(err, user) {
        if (err || user.length == 0) {
            result(null);
        } else {
            result(user);
        }
    })
}

User.getById = function(id, result) {
    db.query("SELECT MaND, Email FROM nguoidung WHERE MaND = ?", id, function(err, user) {
        if (err || user.length == 0) {
            result(null)
        } else {
            result(user[0])
        }
    })
}

User.create = function(data, result) {
    db.query("INSERT INTO nguoidung SET ?", data, function(err, user) {
        if (err) {
            result(null);
        } else {
            result({ id: user.insertId, ...data });
        }
    })
}

User.delete = function(id, result) {
    db.query("DELETE FROM nguoidung WHERE MaND = ?", id, function(err, user) {
        if (err) {
            result(null);
        } else {
            result("Delete user with id = " + id + " successful");
        }
    })
}

User.update = function(data, result) {
    db.query("UPDATE nguoidung SET Email = ?, Password = ? WHERE MaND = ?", [data.Email, data.Password, data.MaND], function(err, user) {
        if(err) {
            result(null);
        } else {
            result(data);
        }
    })
}

User.login = function(data, result) {
    db.query("SELECT * FROM nguoidung WHERE email = ? AND password = ?", [data.email, data.password], function(err, user) {
        if (err || user.length == 0) {
            result(null);
        }
        else {
            result(user[0]);
        }
    })
}

User.getByEmail = function(email, result) {
    db.query("SELECT Password FROM nguoidung WHERE Email = ?", email, function(err, user) {
        if (err || user.length == 0) {
            result(null)
        } else {
            result(user[0])
        }
    })
}

module.exports = User