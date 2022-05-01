var User = require("../models/UserModel");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var userService = require("../services/UserService.js");
 
let getUsers = async(req, res) => {
    let data = await userService.getAllUser();
    return res.send({ data: data });
}
 
let Register = async(req, res) => {
    // const { name, email, password, confPassword } = req.body;
    // if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    // const salt = await bcrypt.genSalt();
    // const hashPassword = await bcrypt.hash(password, salt);
    // try {
    //     await User.create({
    //         name: name,
    //         email: email,
    //         password: hashPassword
    //     });
    //     res.json({msg: "Registration Successful"});
    // } catch (error) {
    //     console.log(error);
    // }
}
 
let Login = async(req, res) => {
    // try {
    //     const user = await User.findAll({
    //         where:{
    //             email: req.body.email
    //         }
    //     });
    //     const match = await bcrypt.compare(req.body.password, user[0].password);
    //     if(!match) return res.status(400).json({msg: "Wrong Password"});
    //     const userId = user[0].id;
    //     const name = user[0].name;
    //     const email = user[0].email;
    //     const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
    //         expiresIn: '15s'
    //     });
    //     const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
    //         expiresIn: '1d'
    //     });
    //     await User.update({refresh_token: refreshToken},{
    //         where:{
    //             id: userId
    //         }
    //     });
    //     res.cookie('refreshToken', refreshToken,{
    //         httpOnly: true,
    //         maxAge: 24 * 60 * 60 * 1000
    //     });
    //     res.json({ accessToken });
    // } catch (error) {
    //     res.status(404).json({msg:"Email not found"});
    // }
}
 
let Logout = async(req, res) => {
    // const refreshToken = req.cookies.refreshToken;
    // if(!refreshToken) return res.sendStatus(204);
    // const user = await User.findAll({
    //     where:{
    //         refresh_token: refreshToken
    //     }
    // });
    // if(!user[0]) return res.sendStatus(204);
    // const userId = user[0].id;
    // await User.update({refresh_token: null},{
    //     where:{
    //         id: userId
    //     }
    // });
    // res.clearCookie('refreshToken');
    // return res.sendStatus(200);
}

module.exports = {
    Login: Login,
    Logout: Logout,
    Register: Register,
    getUsers: getUsers
}