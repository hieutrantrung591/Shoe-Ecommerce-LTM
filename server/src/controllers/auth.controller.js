const bcrypt = require('bcrypt')
var User = require('../models/user.model.js');
var jwtHelper = require('../middleware/jwtHelper');
const dotenv = require('dotenv');

dotenv.config();

// Thời gian sống của token
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || "10s";

// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const accessTokenSecret = "" + process.env.ACCESS_TOKEN_SECRET;

// Thời gian sống của refreshToken
const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || "365d";

// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const refreshTokenSecret = "" + process.env.REFRESH_TOKEN_SECRET;

let Register = async function (req, res) {
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

let tokenList = {};

let Login = async function (req, res) {
    try {
        const { email, password } = req.body

        User.login(email, async function (response) {
            const validPassword = await bcrypt.compare(password, response.Password);
            if (!validPassword) {
                res.status(400).json("Wrong password");
            } else {
                const newUser = {
                    email: email
                }

                const accessToken = await jwtHelper.generateToken(newUser, accessTokenSecret, accessTokenLife);
                const refreshToken = await jwtHelper.generateToken(newUser, refreshTokenSecret, refreshTokenLife);

                tokenList[refreshToken] = { accessToken, refreshToken };

                return res.status(200).json({ accessToken, refreshToken });
            }
        })
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

/**
 * Refresh token
 */
let RefreshToken = async (req, res) => {
    // User gửi mã refresh token kèm theo trong body
    const refreshTokenFromClient = req.body.refreshToken || req.headers["authorization"];

    // Nếu như tồn tại refreshToken truyền lên và nó cũng nằm trong tokenList của chúng ta
    if (refreshTokenFromClient && (tokenList[refreshTokenFromClient])) {
        try {
            // Verify kiểm tra tính hợp lệ của cái refreshToken và lấy dữ liệu giải mã decoded 
            const decoded = await jwtHelper.verifyToken(refreshTokenFromClient, refreshTokenSecret);

            // Thông tin user lúc này các bạn có thể lấy thông qua biến decoded.data
            // có thể mở comment dòng debug bên dưới để xem là rõ nhé.
            const userData = decoded.data;

            const accessToken = await jwtHelper.generateToken(userData, accessTokenSecret, accessTokenLife);
            return res.status(200).json({ accessToken });

        } catch (error) {
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

module.exports = {
    Login: Login,
    Register: Register,
    RefreshToken: RefreshToken,
  }