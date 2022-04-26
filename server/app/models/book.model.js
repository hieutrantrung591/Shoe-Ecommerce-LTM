const db = require('../common/connect');
const Book = function(book) {
    this.id = book.id;
    this.name = book.name;
    this.image = book.image;
    this.author_id = book.author_id;
}

Book.get_all = function(result) {
    db.query("SELECT * FROM book", function(err, book) {
        if (err || book.length == 0) {
            result(null);
        } 
        else {
            result(book);
        }
    });
}

Book.getById = function(id, result) {
    db.query("SELECT * FROM book WHERE id = ?", id, function(err, book) {
        if (err) {
            result(null);
        } else {
            result(book[0]);
        }
    });
}

Book.create = function(data, result) {
    db.query("INSERT INTO book SET ?", data, function(err, book) {
        if (err) {
            result(null);
        } else {
            result({ id: book.insertId, ...data });
        }
    })
}

Book.delete = function(id, result) {
    db.query("DELETE FROM book WHERE id = ?", id, function(err, book) {
        if (err) {
            result(null);
        } else {
            result("Xóa dữ liệu book có id = " + id + " thành công");
        }
    })
}

Book.update = function(data, result) {
    db.query("UPDATE book SET name=?, image=?, author_id=? WHERE id=?", [data.name, data.image, data.author_id, data.id], function(err, book) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}

module.exports = Book;