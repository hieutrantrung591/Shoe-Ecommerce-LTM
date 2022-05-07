const db = require('../config/connect.js');
const Image = function(image) {
    this.MaAnh = image.MaAnh;
    this.DiaChi = image.DiaChi;
    this.IsThumbnail = image.IsThumbnail;
    this.MaSp = image.MaSP;
}

Image.getAll = function(result) {
    db.query("SELECT * FROM hinhanh", function(err, image) {
        if (err || image.length == 0) {
            result(null);
        } else {
            result(image);
        }
    });
}

Image.getById = function(id, result) {
    db.query("SELECT * FROM hinhanh WHERE MaAnh = ?", id, function(err, image) {
        if (err || image.length == 0) {
            result(null);
        } else {
            result(image[0]);
        }
    });
}

Image.create = function(data, result) {
    db.query("INSERT INTO hinhanh SET ?", data, function(err, image) {
        if (err) {
            result(null);
        } else {
            result({ id: image.insertId, ...data });
        }
    });
}

Image.delete = function(id, result) {
    db.query("DELETE FROM hinhanh WHERE MaAnh = ?", id, function(err, image) {
        if(err) {
            result(null);
        } else {
            result("Delete HinhAnh with id = " + id + " successful");
        }
    });
}

Image.update = function(data, result) {
    db.query("UPDATE hinhanh SET DiaChi = ?, IsThumbnail = ?, MaSP = ? WHERE MaAnh = ?", [data.DiaChi, data.IsThumbnail, data.MaSP, data.MaAnh], function(err, image) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    });
}

Image.getImagesOfProduct = function(id, result) {
    db.query("SELECT * FROM hinhanh WHERE MaSP = ? AND IsThumbnail = false", id, function(err, image) {
        if (err || image.length == 0) {
            result(null);
        } else {
            result(image);
        }
    });
}

module.exports = Image;