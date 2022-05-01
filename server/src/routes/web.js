const express = require('express');
const router = express.Router();

var userController = require("../controllers/UserController.js");
var employeeController = require("../controllers/EmployeeController.js");
var categoryController = require("../controllers/CategoryController.js");
var supplierController = require("../controllers/SupplierController.js");
var productController = require("../controllers/ProductController.js");

var users = [
	{id: 1, name: "User1", email: "user1@gmail.com", age: 31}, 
	{id: 2, name: "User2", email: "user2@gmail.com", age: 20},
	{id: 3, name: "User1", email: "user1.2@gmail.com", age: 25}
];

router.get('/', function(req, res){
	res.render('users/index',{
		users: users
	});
})



// let initWebRoutes = (app) => {
//     // var verifyToken = require("../middleware/VerifyToken.js");
//     // var refreshToken = require("../controllers/RefreshToken.js");

//     // router.get('/users', userController.getUsers());
//     // router.post('/users', userController.Register());
//     // router.post('/login', userController.Login());
//     // router.get('/token', userController.refreshToken());
//     // router.delete('/logout', userController.Logout());

//     router.get('/users', userController.getUsers());

//     // router.get('/employee/list', employeeController.getAllEmployees());
//     // router.get('/category/list', categoryController.getAllCategories());
//     // router.get('/supplier/list', supplierController.getAllSuppliers());

//     // router.get('/category/detail/:id', categoryController.getCategoryById());

//     // router.get('/product/list', productController.getAllProducts());
//     // router.get('/product/detail/:id', productController.getProductById());

//     return app.use("/", router);
// }

// module.exports = initWebRoutes;

module.exports = router;