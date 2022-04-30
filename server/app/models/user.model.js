const db = require('../common/connect');
const User = function(user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
}

User.get_all = function() {
    db.query("SELECT * FROM user", function(err, user) {
        if (err) {
            result(null);
        } else {
            result(user);
        }
    });
}

User.getById = function(id, result) {
    db.query("SELECT * FROM user WHERE id = ?", id, function(err, user) {
        if(err || book.length == 0) {
            result(null);
        } else {
            result(user[0]);
        }
    });
}

User.create = function(data, result) {
    db.query("INSERT INTO user SET ?", data, function(err, user) {
        if (err) {
            result(null);
        } else {
            result({ id: user.insertId, ...data });
        }
    });
}

User.remove = function(id, result) {
    db.query("DELETE FROM user WHERE id = ?", id, function(err, user) {
        if (err) {
            return(null);
        }
        else {
            result("Xóa dữ liệu user có id " + id + " thành công");
        }
    });
}

User.update = function(u, result) {
    db.query("UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?", [u.name, u.email, u.password, u.id], function(err, user){
        if (err) {
            result(null);
        } else {
            result(u);
        }
    });
}

User.check_login = function(data, result) {
    db.query("SELECT * FROM user WHERE email = ? AND password = ?", [data.email, data.password], function(err, user) {
        if (err || user.length == 0) {
            result(null);
        } else {
            result(user[0]);
        }
    });
}

module.exports = User;