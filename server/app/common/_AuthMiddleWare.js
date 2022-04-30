let isAuth = async function(req, res, next) {
    var _jwt = require('../common/_JWT');
    var _token = req.headers.authorization;
    if(_token) {
        try {
            var authData = await _jwt.check(_token);
            req.auth = authData;
            next();
        } catch(err) {
            return res.send({ data: "Mã token không hợp lệ" });
        }
    } else {
        return res.send({ data: "Bạn chưa gửi kèm mã token" });
    }
    console.log(req.headers);
};

module.exports = {
    isAuth: isAuth,
};