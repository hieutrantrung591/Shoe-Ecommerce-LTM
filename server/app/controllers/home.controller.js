// Hien thi file o thu muc khac thu muc con routes
// exports.home = function(req, res) {
//     res.sendFile(__dirname.replace('app\\controllers', '') + '/index.html');
// }

exports.home = function(req, res) {
    res.send("Hello Home Page!");
}

exports.json = function(req, res) {
    var data = [
        { "id": 1, "name": "Demo json string 1" },
        { "id": 2, "name": "Demo json string 2" }
    ];
    res.send({ books: data });
}