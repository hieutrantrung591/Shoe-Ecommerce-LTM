module.exports = function(router) {
    var homeController = require('../controllers/home.controller');
    var jwt = require('../common/_JWT')

    router.get('/', homeController.home);

    router.get('/json', homeController.json);

    router.get('/token', async function(req, res) {
        var user = {
            name: "Admin",
            email: "admin@example.com",
        };
        const _token = await jwt.make(user);
        res.send({token: _token});
    });

    router.get('/check_token', async function(req, res) {
        try {
            var _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20ifSwiaWF0IjoxNjUxMjgyMjM3LCJleHAiOjE2NTEyODU4Mzd9.j-kw0ZWoQTSRPeGXglIMyQ0faCYproAAkRwX5Op4nLw";
            const data = await jwt.check(_token);
            res.send({ data: data });
        } catch(err) {
            res.send({ data: "Mã token không hợp lệ" });
        }
    });
};