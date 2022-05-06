const bcrypt = require('bcrypt')
var User = require('../models/user.model.js');
var jwtHelper = require('../middleware/jwtHelper')

// Thời gian sống của token
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || "1h";

// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

// Thời gian sống của refreshToken
const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || "3650d";

// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

exports.Register = async function (req, res) {
    const { email, password, confirmPassword } = req.body
    if (password != confirmPassword) {
        return res.status(400).json({ msg: "Password and Confirm Password do not match" })
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = {
        email: req.body.email,
        password: hashPassword
    }

    User.create(newUser, function (response) {
        res.send({ result: response });
    })
}

exports.Login = async function (req, res) {
    try {
        const { email, password } = req.body
    
        User.login(email, async function (response) {
            const validPassword = await bcrypt.compare(password, response.Password);
            if (!validPassword) {
                res.status(400).json("Wrong password");
            } else {
                const newUser = {
                    email: email,
                    password: password
                }
    
                const accessToken = await jwtHelper.generateToken(newUser, accessTokenSecret, accessTokenLife);
                const refreshToken = await jwtHelper.generateToken(newUser, refreshTokenSecret, refreshTokenLife);
    
                res.cookie('refreshToken', refreshToken,{
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000
                });
                res.json({ accessToken });
            }
        })
    } catch (error) {
        res.status(404).json({msg: error});
    }
}

/**
 * Refresh token
 */
 let refreshToken = async(req, res) => {
    // User gửi mã refresh token kèm theo trong body
    const refreshTokenFromClient = req.body.refreshToken;

    // Nếu như tồn tại refreshToken truyền lên và nó cũng nằm trong tokenList của chúng ta
    if (refreshTokenFromClient && (tokenList[refreshTokenFromClient])) {
        try {
            // Verify kiểm tra tính hợp lệ của cái refreshToken và lấy dữ liệu giải mã decoded 
            const decoded = await jwtHelper.verifyToken(refreshTokenFromClient, refreshTokenSecret);

            // Thông tin user lúc này các bạn có thể lấy thông qua biến decoded.data
            // có thể mở comment dòng debug bên dưới để xem là rõ nhé.
            const userFakeData = decoded.data;

            debug(`Thực hiện tạo mã Token trong bước gọi refresh Token, [thời gian sống vẫn là 1 giờ.]`);
            const accessToken = await jwtHelper.generateToken(userFakeData, accessTokenSecret, accessTokenLife);

            // gửi token mới về cho người dùng
            return res.status(200).json({accessToken});

        } catch(error) {
            // Lưu ý trong dự án thực tế hãy bỏ dòng debug bên dưới, mình để đây để debug lỗi cho các bạn xem thôi
            debug(error);
            res.status(403).json({
                message: 'Invalid refresh token.',
            });
        }
    } else {
        // Không tìm thấy token trong request
        return res.status(403).send({
          message: 'No token provided.',
        });
    }
}