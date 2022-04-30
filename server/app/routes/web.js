import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

import { getAllEmployees } from "../controllers/EmployeeController.js";
import { getAllCategories } from "../controllers/CategoryController.js";
import { getAllSuppliers } from "../controllers/SupplierController.js";

// import { login, refreshToken } from "../controllers/AuthController.js";
// import isAuth from "../middleware/AuthMiddleware.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get('/employee/list', getAllEmployees);
router.get('/category/list', getAllCategories);
router.get('/supplier/list', getAllSuppliers);

export default router;