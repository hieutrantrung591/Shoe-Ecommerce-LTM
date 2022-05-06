const bcrypt = require('bcrypt')
var User = require('../models/user.model.js');
var jwt = require('../middleware/jwtHelper')

exports.Register = async function (req, res) {
    const { email, password, confirmPassword } = req.body
    if (password != confirmPassword) {
        return res.status(400).json({msg: "Password and Confirm Password do not match"})
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = {
        email: req.body.email,
        password: hashPassword
    }

    User.create(newUser, function(response) {
        res.send({ result: response });
    })
}

exports.Login = function(req, res) {
    const { email, password } = req.body
    var { userPassword } = ''
    
    User.getByEmail(email, async function(response) {
        const validPassword = await bcrypt.compare(req.body.password, response.body);
        if (!validPassword) {
            res.status(400).json("Wrong password");
        }
    })



    const newUser = {
        email: req.body.email,
        password: userPassword
    }

    // res.send({ user: newUser })

    // User.login(newUser, async function(response) {
    //     if(response) {
    //         const _token = await jwt.generateToken(response)
    //         res.send({ token: _token })
    //     }
    //     res.send({ result: response })
    // })
}