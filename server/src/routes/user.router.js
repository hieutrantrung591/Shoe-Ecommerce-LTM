const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')

router.post('/register', authController.Register)

router.post('/login', authController.Login);

router.post('/user/add', userController.addUser)

router.post("/refresh-token", authController.RefreshToken);

module.exports = router;